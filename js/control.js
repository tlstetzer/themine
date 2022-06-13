/* eslint no-unused-vars: 0 no-undef: 0*/

var miner, board, gPad, gBoard, stopButton, btnClicked				// Global Variables
var lUp, lRight, lDown, lLeft, lStop, lPick, lPump, lJack, lDyn;	// Listeners

function gameInit() {
	gPad = exportRoot.gamepad_mc;
	gBoard = exportRoot.mineBoard_mc;
	
	eventHandlers();
	animationInit();
	boardInit();
	
//	exportRoot.gotoAndStop('game');
//	startGame();
}

function buttonDown() {
	exitTown();
}

function eventHandlers() {
	exportRoot.intro_mc.btnStart.on('click', function() { startGame(); });
}

function startGame() {
	disableButtons();
	miner = new Miner();
	gBoard.info_text.text = 'Please wait while mine is scanned for gold!';
	exportRoot.gotoAndStop('game');
	drawBoard();
	setSelected();
}

function buttonClick(e, btn) {
	btnClicked = true;
	if(miner.pos.startsWith('elev')) {
		// inside elevator
		stopButton = false;
		if(miner.pos == 'elevTown' && btn == 'down') { exitTown(''); } 
		if(miner.pos == 'elevTown' && btn != 'down') { gBoard.info_text.text = 'Cannot move in that direction!'; } 
		
		else if(miner.pos == 'elev' && btn == 'up') { elevLevel('up'); }
		else if(miner.pos == 'elev' && btn == 'down') { elevLevel('down'); }
		
		else if(miner.pos == 'elevTunnel' && btn == 'up') { exitTunnel('up'); }
		else if(miner.pos == 'elevTunnel' && btn == 'down') { exitTunnel('down'); }
		
		else if(btn == 'right') { gBoard.info_text.text = 'Cannot move in that direction!'; }
		else if(btn == 'left') { gBoard.info_text.text = 'You must stop the elevator before you can exit!'; }
		
		else { mineMove(btn); }
	} else { mineMove(); }  // outside the elevator
}

function mineMove(btn) {
	gBoard.info_text.text = 'Move inside mine!';
}

function disableButtons() {
	btnClicked = false;
	gPad.btnUp.off('click', lUp);
	gPad.btnRight.off('click', lRight);
	gPad.btnDown.off('click', lDown);
	gPad.btnLeft.off('click', lLeft);
	gPad.btnStop.off('click', lStop);
	gPad.btnPickaxe.off('click', lPick);
	gPad.btnPump.off('click', lPump);
	gPad.btnJackhammer.off('click', lJack);
	gPad.btnDynamite.off('click', lDyn);
}

function enableButtons() {
	btnClicked = false;
	lUp = gPad.btnUp.on('click', buttonClick, null, false, 'up');
	lRight = gPad.btnRight.on('click', buttonClick, null, false, 'right');
	lDown = gPad.btnDown.on('click', buttonClick, null, false, 'down');
	lLeft = gPad.btnLeft.on('click', buttonClick, null, false, 'left');
	lStop = gPad.btnStop.on('click', function() { stopButton = true; });
	lPick = gPad.btnPickaxe.on('click', setSelected, null, false, 'pickaxe');
	lPump = gPad.btnPump.on('click', setSelected, null, false, 'pump');
	lJack = gPad.btnJackhammer.on('click', setSelected, null, false, 'jackhammer');
	lDyn = gPad.btnDynamite.on('click', setSelected, null, false, 'dynamite');
}

function setSelected(e, btn) {
	gPad.selectedPickaxe.visible = false;
	gPad.selectedPump.visible = false;
	gPad.selectedJackhammer.visible = false;
	gPad.selectedDynamite.visible = false;
	
	if(btn == 'pickaxe') { gPad.selectedPickaxe.visible = true; }
	if(btn == 'pump') { gPad.selectedPump.visible = true; }
	if(btn == 'jackhammer') { gPad.selectedJackhammer.visible = true; }
	if(btn == 'dynamite') { gPad.selectedDynamite.visible = true; }
}

function updateText(e, text) {
	gBoard.info_text.text = text;
}
