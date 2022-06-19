/* eslint no-unused-vars: 0 no-undef: 0*/

var miner, elev, board, gPad, gBoard, stopButton, cButton, toolsEnabled			// Global Variables
var lUp, lRight, lDown, lLeft, lStop, lPick, lPump, lJack, lDyn;				// Listeners

function gameInit() {
	gPad = exportRoot.gamepad_mc;
	gBoard = exportRoot.mineBoard_mc;
	
	eventHandlers();
	
	startGame();	// debugging
}

function buttonDown() {
	exitTown();
}

function eventHandlers() {
	exportRoot.intro_mc.btnStart.on('click', function() { startGame(); });
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
	var piece = miner.piece;
	var newPiece;
	
	if(btn == 'left') {
		if(piece.left == 'p00000') { gBoard.info_text.text = 'You cannot move in that direction!'; }
		newPiece = nextPiece(piece.left);
	}
	
	if(btn == 'right') {
		
	}
	
	if(btn == 'up') {
		
	}
	
	if(btn == 'down') {
		
	}
/*
	if(btn == piece.edge) { gBoard.info_text.text = 'Cannot move in that direction!'; }
	else if(btn == 'right' && piece.edge == 'elev') {
		if(piece.row == miner.elevLevel) { enterShaft(); }
		else { gBoard.info_text.text = 'Cannot move in that direction!'; }
	}
*/
	// if piece is not an action
	// else what is the action
}

function disableButtons(type) {
	btnClicked = false;

	if(type == 'all' || type == 'tools') {
		gPad.btnPickaxe.off('click', lPick);
		gPad.btnPump.off('click', lPump);
		gPad.btnJackhammer.off('click', lJack);
		gPad.btnDynamite.off('click', lDyn);
		toolsEnabled == false;
	}
	
	if(type == 'all' || type == 'buttons') {
		gPad.btnUp.off('click', lUp);
		gPad.btnRight.off('click', lRight);
		gPad.btnDown.off('click', lDown);
		gPad.btnLeft.off('click', lLeft);
		gPad.btnStop.off('click', lStop);
		$(document).off('keypress');
	}
}

function enableButtons(type) {
	btnClicked = false;
	
	if(type == 'all' || type == 'tools') {
		lPick = gPad.btnPickaxe.on('click', setSelected, null, false, 'pickaxe');
		lPump = gPad.btnPump.on('click', setSelected, null, false, 'pump');
		lJack = gPad.btnJackhammer.on('click', setSelected, null, false, 'jackhammer');
		lDyn = gPad.btnDynamite.on('click', setSelected, null, false, 'dynamite');
		toolsEnabled == true;
	}
	
	if(type == 'all' || type == 'buttons') {
		lUp = gPad.btnUp.on('click', makeMove, null, false, 'up');
		lRight = gPad.btnRight.on('click', makeMove, null, false, 'right');
		lDown = gPad.btnDown.on('click', makeMove, null, false, 'down');
		lLeft = gPad.btnLeft.on('click', makeMove, null, false, 'left');
		lStop = gPad.btnStop.on('click', function() { stopButton = true; });
	}
	
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
