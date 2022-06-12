/* eslint no-unused-vars: 0 no-undef: 0*/

var miner, board, gPad, gBoard, stopButton;										// Global Variables
var lUp, lRight, lDown, lLeft, lStop, lPick, lPump, lJack, lDyn;	// Listeners

function gameInit() {
	gPad = exportRoot.gamepad_mc;
	gBoard = exportRoot.mineBoard_mc;
	
	eventHandlers();
	animationInit();
	boardInit();
	
	exportRoot.gotoAndStop('game');
	startGame();
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

function disableButtons() {
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
	lUp = gPad.btnUp.on('click', updateText, null, false, 'Button Up');
	lRight = gPad.btnRight.on('click', updateText, null, false, 'Button Right');
	lDown = gPad.btnDown.on('click', buttonDown);
	lLeft = gPad.btnLeft.on('click', updateText, null, false, 'Button Left');
	lStop = gPad.btnStop.on('click', function() { 
		stopButton = true; 
	});
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
