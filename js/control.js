/* eslint no-unused-vars: 0 no-undef: 0*/

// Global Variables
var miner, elev, board, gPad, gBoard, stopButton, cButton, toolsEnabled;
const cFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 });

function gameInit() {
	gPad = exportRoot.gamepad_mc;
	gBoard = exportRoot.mineBoard_mc;
	
	eventHandlers();
	soundInit();
}

function startGame() {
	disableButtons('all');
	miner = new Miner();
	elev = new Elev();
	animationInit();
	boardInit();
	setSelected('');
	gBoard.info_text.text = 'Please wait while mine is scanned for gold!';
	exportRoot.gotoAndStop('game');
	drawBoard();
}

function makeMove(btn) {
	gBoard.info_text.text = '';
	stopButton = false;
	cButton = btn;

	if(miner.pos == 'townIn') {
		// in the elevator at town level
		if(btn == 'down') { exitTown(); }
		else if(btn == 'left') { 
			if(miner.goldOz > 0) { enterBank(); }
			else { showMessage("You don't have any gold to deposit!", 'error'); }
		}
		else { showMessage('You cannot move in that direction!', 'error');  }
	} else if(miner.pos == 'tunnelIn') {
		// in the elevator at tunnel level
		if(btn == 'up' || btn == 'down') { exitTunnel(btn); }
		else if(btn == 'left') { exitElevator(); }
		else { showMessage('You cannot move in that direction!', 'error');  }
	} else if(miner.pos == 'elev') {
		// in the elevator shaft
		if(btn == 'up' || btn == 'down') { elevLevel(btn); }
		else if(btn == 'left') { showMessage('You must stop the elevator before you can exit!', 'error'); }
		else { showMessage('You cannot move in that direction!', 'error');  }
	} else { 
		// inside the mine
		moveInMine(btn); 
	}
}

function moveInMine(btn) {
	var piece = getPiece(miner.piece);
	var newID = '';
	
	if(btn == 'left') { newID = piece.idLeft; }
	if(btn == 'right') { newID = piece.idRight; }
	if(btn == 'up') { newID = piece.idUp; }
	if(btn == 'down') { newID = piece.idDown; }
	var newPiece = getPiece(newID);

	if(piece.ID == 'p00000') { showMessage('You cannot move in that direction!', 'error'); }
	else if(moveAllowed(newPiece) == true) { 
		if(['dug', 'gold'].includes(newPiece.type)) { movePiece(newPiece, btn); }
		else if(newPiece.type == 'shaft') { enterTunnelElevator(newPiece, btn); }
		else if(newPiece.type == 'hole') { fallDownHole(newPiece, btn); }
		else if(newPiece.type == 'water') { playPump(newPiece, btn); }
		else if(miner.tool == 'jackhammer') { playJackhammer(newPiece, btn); }
		else if(miner.tool == 'dynamite' || newPiece.type == 'cavein') { playDynamite(newPiece, btn); }
		else { playPickaxe(newPiece, btn); }
	}
}

function disableButtons(type) {
	btnClicked = false;
	
	// buttons
	if(type == 'all' || type == 'tools') {
		gPad.btnPickaxe_d.visible = true;
		gPad.btnPump_d.visible = true;
		gPad.btnJackhammer_d.visible = true;
		gPad.btnDynamite_d.visible = true;
		toolsEnabled = false;
	}
	
	// gamepad
	if(type == 'all' || type == 'buttons') {
		gPad.btnUp_d.visible = true;
		gPad.btnRight_d.visible = true;
		gPad.btnDown_d.visible = true;
		gPad.btnLeft_d.visible = true;
		gPad.btnStop_d.visible = true;
		$(document).off('keypress');
	}
}

function enableButtons(type) {
	btnClicked = false;
	
	// buttons
	if(type == 'all' || type == 'tools') {
		gPad.btnPickaxe_d.visible = false;
		gPad.btnPump_d.visible = false;
		gPad.btnJackhammer_d.visible = false;
		gPad.btnDynamite_d.visible = false;
		toolsEnabled = true;
	}
	
	// gamepad
	if(type == 'all' || type == 'buttons') {
		gPad.btnUp_d.visible = false;
		gPad.btnRight_d.visible = false;
		gPad.btnDown_d.visible = false;
		gPad.btnLeft_d.visible = false;
		gPad.btnStop_d.visible = false;
		$(document).off('keypress');
	}
}

function setSelected(btn) {
	gPad.selectedPickaxe.visible = false;
	gPad.selectedPump.visible = false;
	gPad.selectedJackhammer.visible = false;
	gPad.selectedDynamite.visible = false;
	setTool(btn);
	
	if(btn == 'pickaxe') { gPad.selectedPickaxe.visible = true; miner.tool = 'pickaxe'; }
	if(btn == 'jackhammer') { gPad.selectedJackhammer.visible = true; miner.tool = 'jackhammer'; }
	if(btn == 'dynamite') { gPad.selectedDynamite.visible = true; miner.tool = 'dynamite'; }
	if(btn == 'pump') { 
		if(waterNearby() == true) { gPad.selectedPump.visible = true; miner.tool = 'pump'; }
		else { showMessage('There is no water nearby to pump!', 'error'); }
	}
}

function eventHandlers() {
	// start button
	exportRoot.intro_mc.btnStart.on('click', function() { startGame(); });
	exportRoot.won_mc.btnStart.on('click', function() { startGame(); });
	exportRoot.lost_mc.btnStart.on('click', function() { startGame(); });
	
	// tool buttons
	gPad.btnPickaxe.on('click', function() { setSelected('pickaxe'); });
	gPad.btnPump.on('click', function() { setSelected('pump'); });
	gPad.btnJackhammer.on('click', function() { setSelected('jackhammer'); });
	gPad.btnDynamite.on('click', function() { setSelected('dynamite'); });
	toolsEnabled == true;

	// gamepad buttons
	gPad.btnUp.on('click', function() { makeMove('up'); });
	gPad.btnRight.on('click', function() { makeMove('right'); });
	gPad.btnDown.on('click', function() { makeMove('down'); });
	gPad.btnLeft.on('click', function() { makeMove('left'); });
	gPad.btnStop.on('click', function() { stopButton = true; });

	// keyboard events
	$(document).on('keydown', function(e) {
		var key = e.which;
		if(key == 38) { makeMove('up'); }
		if(key == 39) { makeMove('right'); }
		if(key == 40) { makeMove('down'); }
		if(key == 37) { makeMove('left'); }
		if(key == 32) { stopButton = true; }
		
		if(key == 80 && toolsEnabled == true) { setSelected('pickaxe'); }
		if(key == 87 && toolsEnabled == true) { setSelected('pump'); }
		if(key == 74 && toolsEnabled == true) { setSelected('jackhammer'); }
		if(key == 68 && toolsEnabled == true) { setSelected('dynamite'); }
		if([80, 87, 74, 68].indexOf(key) > 0 && toolsEnabled == false) {
			showMessage('A tool cannot be selected at this time!', 'error');
		}
	});
}

function goldPrice() {
	// check if game is over
	if(miner.bankTotal <= 0) { gameLost(); }
	if(miner.bankTotal >= 10000) { gameWon(); }
	
	// set gold price
	var gp = miner.goldPrice;
	var chg = random(40) - 20;
	if(gp > 1000) chg = -Math.abs(chg);
	if(gp < 200) chg = Math.abs(chg);
	miner.goldPrice += chg;
	
	// update signs
	var priceSign = cFormat.format(miner.goldPrice.toFixed()) + ' oz'; 
	var goldSign = miner.goldOz + ' oz';
	var bankSign = cFormat.format(miner.bankTotal.toFixed()); 
	
	gPad.txtPrice.text = priceSign.padStart(9, ' ');
	gPad.txtGold.text = goldSign.padStart(6, ' ');
	gPad.txtBank.text = bankSign.padStart(10, ' ');
}
