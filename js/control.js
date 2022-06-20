/* eslint no-unused-vars: 0 no-undef: 0*/

var miner, elev, board, gPad, gBoard, stopButton, cButton, toolsEnabled			// Global Variables
var lUp, lRight, lDown, lLeft, lStop, lPick, lPump, lJack, lDyn;				// Listeners

function gameInit() {
	gPad = exportRoot.gamepad_mc;
	gBoard = exportRoot.mineBoard_mc;
	
	eventHandlers();
	
//	startGame();	// debugging
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

function makeMove(e, btn) {
	stopButton = false;
	cButton = btn;

	// in the elevator at town level
	if(miner.pos == 'townIn') {
		if(btn == 'down') { exitTown(); }
		else if(btn == 'left') { enterBank(); }
		else { gBoard.info_text.text = 'You cannot move in that direction!'; }
	}

	// in the elevator at tunnel level
	if(miner.pos == 'tunnelIn') {
		if(btn == 'up' || btn == 'down') { exitTunnel(btn); }
		else if(btn == 'left') { exitElevator(); }
		else { gBoard.info_text.text = 'You cannot move in that direction!'; }
	}

	// in the elevator shaft
	if(miner.pos == 'elev') {
		if(btn == 'up' || btn == 'down') { elevLevel(btn); }
		else if(btn == 'left') { gBoard.info_text.text = 'You must stop the elevator before you can exit!'; }
		else { gBoard.info_text.text = 'You cannot move in that direction!'; }
	}
	
	// inside the mine
	if(miner.pos == 'tunnelEnd') { moveInMine(btn); }
}

function moveInMine(btn) {
	var piece = getPiece(miner.piece);
	var newPiece;
	
	if(btn == 'left') {
		if(piece.idLeft == 'p00000') { gBoard.info_text.text = 'You cannot move in that direction!'; }
		else {
			newPiece = getPiece(piece.idLeft);
			miner.piece = newPiece.ID;
			miner.setBoardPosition(boardMiner, newPiece.minerX, newPiece.minerY, 'left');
		}
	}
	
	if(btn == 'right') {
		if(piece.idRight == 'p00000') { gBoard.info_text.text = 'You cannot move in that direction!'; }
		else if(piece.idRight == 'p99999') { gBoard.info_text.text = 'At elevator!'; }
		else {
			newPiece = getPiece(piece.idRight);
			miner.piece = newPiece.ID;
			miner.setBoardPosition(boardMiner, newPiece.minerX, newPiece.minerY, 'right');
		}
	}
	
	if(btn == 'up') {
		if(piece.idUp == 'p00000') { gBoard.info_text.text = 'You cannot move in that direction!'; }
		else {
			newPiece = getPiece(piece.idUp);
			miner.piece = newPiece.ID;
			miner.setBoardPosition(boardMiner, newPiece.minerX, newPiece.minerY, '');
		}
	}
	
	if(btn == 'down') {
		if(piece.idDown == 'p00000') { gBoard.info_text.text = 'You cannot move in that direction!'; }
		else {
			newPiece = getPiece(piece.idDown);
			miner.piece = newPiece.ID;
			miner.setBoardPosition(boardMiner, newPiece.minerX, newPiece.minerY, '');
		}
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
	
	if(btn == 'pickaxe') { gPad.selectedPickaxe.visible = true; }
	if(btn == 'pump') { gPad.selectedPump.visible = true; }
	if(btn == 'jackhammer') { gPad.selectedJackhammer.visible = true; }
	if(btn == 'dynamite') { gPad.selectedDynamite.visible = true; }
}

function eventHandlers() {
	// start button
	exportRoot.intro_mc.btnStart.on('click', function() { startGame(); });
	
	// tool buttons
	lPick = gPad.btnPickaxe.on('click', setSelected, null, false, 'pickaxe');
	lPump = gPad.btnPump.on('click', setSelected, null, false, 'pump');
	lJack = gPad.btnJackhammer.on('click', setSelected, null, false, 'jackhammer');
	lDyn = gPad.btnDynamite.on('click', setSelected, null, false, 'dynamite');
	toolsEnabled == true;

	// gamepad buttons
	lUp = gPad.btnUp.on('click', makeMove, null, false, 'up');
	lRight = gPad.btnRight.on('click', makeMove, null, false, 'right');
	lDown = gPad.btnDown.on('click', makeMove, null, false, 'down');
	lLeft = gPad.btnLeft.on('click', makeMove, null, false, 'left');
	lStop = gPad.btnStop.on('click', function() { stopButton = true; });

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
			gBoard.info_text.text = 'A tool cannot be selected at this time!';
		}
	});
}
