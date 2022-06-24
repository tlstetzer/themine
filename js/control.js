/* eslint no-unused-vars: 0 no-undef: 0*/

// Global Variables
var miner, elev, board, gPad, gBoard, stopButton, cButton, toolsEnabled			

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
	setSelected('', '');
	gBoard.info_text.text = 'Please wait while mine is scanned for gold!';
	exportRoot.gotoAndStop('game');
	drawBoard();
}

function makeMove(btn) {
	stopButton = false;
	cButton = btn;

	// in the elevator at town level
	if(miner.pos == 'townIn') {
		if(btn == 'down') { exitTown(); }
		else if(btn == 'left') { enterBank(); }
		else { showMessage('You cannot move in that direction!', 'error');  }
	}

	// in the elevator at tunnel level
	if(miner.pos == 'tunnelIn') {
		if(btn == 'up' || btn == 'down') { exitTunnel(btn); }
		else if(btn == 'left') { exitElevator(); }
		else { showMessage('You cannot move in that direction!', 'error');  }
	}

	// in the elevator shaft
	if(miner.pos == 'elev') {
		if(btn == 'up' || btn == 'down') { elevLevel(btn); }
		else if(btn == 'left') { showMessage('You must stop the elevator before you can exit!', 'error'); }
		else { showMessage('You cannot move in that direction!', 'error');  }
	}
	
	// inside the mine
	if(miner.pos == 'tunnelEnd') { moveInMine(btn); }
}

function moveInMine(btn) {
	var piece = getPiece(miner.piece);
	var newID = '';
	
	if(btn == 'left') { newID = piece.idLeft; }
	if(btn == 'right') { newID = piece.idRight; }
	if(btn == 'up') { newID = piece.idUp; }
	if(btn == 'down') { newID = piece.idDown; }
	var newPiece = getPiece(newID);
/*
	if(piece.idLeft == 'p00000') { showMessage('You cannot move in that direction!', 'error'); }
	else if(moveAllowed(newPiece) == true) { 
		if(newPiece.type == 'dug') { movePiece(newPiece, btn); }
		else if(newPiece.type == 'action') { checkAction(newPiece, btn); }
		else if(newPiece.type == 'water') { playPump(newPiece, btn); }
		else if(miner.tool == 'jackhammer') { playJackhammer(newPiece, btn); }
		else if(miner.tool == 'dynamite') { playDynamite(newPiece, btn); }
		else { playPickaxe(newPiece, btn); }
	}
*/
	// debugging
//	playPickaxe(newPiece, btn);
	playJackhammer(newPiece, btn);
//	playPump(newPiece, btn);
//	playDynamite(newPiece, btn);
}

function disableButtons(type) {
	btnClicked = false;
	
	// buttons
	if(type == 'all' || type == 'tools') {
		gPad.btnPickaxe_d.visible = true;
		gPad.btnPump_d.visible = true;
		gPad.btnJackhammer_d.visible = true;
		gPad.btnDynamite_d.visible = true;
		toolsEnabled == false;
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
		toolsEnabled == false;
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

function setSelected(e, btn) {
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
		if(key == 38) { makeMove(e, 'up'); }
		if(key == 39) { makeMove(e, 'right'); }
		if(key == 40) { makeMove(e, 'down'); }
		if(key == 37) { makeMove(e, 'left'); }
		if(key == 32) { stopButton = true; }
		
		if(key == 80 && toolsEnabled == true) { setSelected(e, 'pickaxe'); }
		if(key == 87 && toolsEnabled == true) { setSelected(e, 'pump'); }
		if(key == 74 && toolsEnabled == true) { setSelected(e, 'jackhammer'); }
		if(key == 68 && toolsEnabled == true) { setSelected(e, 'dynamite'); }
		if([80, 87, 74, 68].indexOf(key) > 0 && toolsEnabled == false) {
			showMessage('A tool cannot be selected at this time!', 'error');
		}
	});
}
