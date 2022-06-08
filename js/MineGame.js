/* global createjs, exportRoot, symbolLib, game, Piece, Board */
/* eslint no-unused-vars: 0 */

// global variables

var anim, gBoard, gPad, gPieces, board, miner;

// JavaScript Document
class MineGame {
	constructor() {
		miner = { bank: 1000, gold: 600, piece: 'p0000', tool: 'none', dir: 'left', x: 0, y: 0 };
		anim = exportRoot.animation_mc;
		gBoard = exportRoot.mineBoard_mc;
		gPieces = exportRoot.mineBoard_mc.gamePieces_mc;
		gPad = exportRoot.gamepad_mc;
		board = new Board();
		
		this.eventHandlers();
	}

	eventHandlers() {
/*
		// buttons
		$('#btnStart').on('click', function() { game.buildBoard(); });
		
		//movement
		$('#btnLeft').on('click', function() { game.moveLeft(); });
		$('#btnRight').on('click', function() { game.moveRight(); });
		$('#btnUp').on('click', function() { game.moveUp(); });
		$('#btnDown').on('click', function() { game.moveDown(); });
		
		// tools
		$('#btnPickaxe').on('click', function() { anim.gotoAndPlay('pickaxe'); });
		$('#btnJackhammer').on('click', function() { anim.gotoAndPlay('jackhammer'); });
		$('#btnDynamite').on('click', function() { anim.gotoAndPlay('dynamite'); });
		$('#btnPump').on('click', function() { anim.gotoAndPlay('pump'); });
		
		// level buttons
		gb.btnLevel_1.on('click', function() { game.elevatorDown('level1'); miner.x = 339.5; miner.y = -139.35; miner.piece = 'p0131'; });
		gb.btnLevel_2.on('click', function() { game.elevatorDown('level2'); miner.x = 339.5; miner.y = -111.35; miner.piece = 'p0231'; });
		gb.btnLevel_3.on('click', function() { game.elevatorDown('level3'); miner.x = 339.5; miner.y = -83.35; miner.piece = 'p0331'; });
		gb.btnLevel_4.on('click', function() { game.elevatorDown('level4'); miner.x = 339.5; miner.y = -54.85; miner.piece = 'p0431'; });
		gb.btnLevel_5.on('click', function() { game.elevatorDown('level5'); miner.x = 339.5; miner.y = -27.6; miner.piece = 'p0531'; });
		gb.btnLevel_6.on('click', function() { game.elevatorDown('level6'); miner.x = 339.5; miner.y = 1.15; miner.piece = 'p0631'; });
		gb.btnLevel_7.on('click', function() { game.elevatorDown('level7'); miner.x = 339.5; miner.y = 28.65; miner.piece = 'p0731'; });
		gb.btnLevel_8.on('click', function() { game.elevatorDown('level8'); miner.x = 339.5; miner.y = 56.65; miner.piece = 'p0831'; });
		gb.btnLevel_9.on('click', function() { game.elevatorDown('level9'); miner.x = 339.5; miner.y = 84.65; miner.piece = 'p0931'; });
		gb.btnLevel_10.on('click', function() { game.elevatorDown('level10'); miner.x = 339.5; miner.y = 108.9; miner.piece = 'p1031'; });
*/
	}
	
	moveLeft() {
		var piece = board.find(p => p.getID() == miner.piece);
		if(piece.getCol() == 1) { gBoard.info_text.text = 'Cannot move that direction!'; }
		else {
			var nCol = piece.getCol() - 1;
			var nID = 'p' + game.padValue(piece.getRow()) + game.padValue(nCol);
			var nPiece = board.find(p => p.getID() == miner.piece);
			// has the piece already been dug
			// is the piece an item of interest
			// check tool
			miner.piece = nID;
			nPiece.setIsDug(true);
			miner.x -= 28;
			gBoard.getChildByName(nID).gotoAndStop('dug');
			createjs.Tween.get(gBoard.gameMiner_mc).to({x: miner.x}, 1000);
		}
	}
	
	moveRight() {
		var piece = board.find(p => p.getID() == miner.piece);
		if(piece.getCol() == 30) { gBoard.info_text.text = 'Go to bank!'; }
		else {
			var nCol = piece.getCol() + 1;
			var nID = 'p' + game.padValue(piece.getRow()) + game.padValue(nCol);
			var nPiece = board.find(p => p.getID() == miner.piece);
			// has the piece already been dug
			// is the piece an item of interest
			// check tool
			miner.piece = nID;
			nPiece.setIsDug(true);
			miner.x += 28;
			gBoard.getChildByName(nID).gotoAndStop('dug');
			createjs.Tween.get(gBoard.gameMiner_mc).to({x: miner.x}, 1000);
		}
	}
	
	moveUp() {
		var piece = board.find(p => p.getID() == miner.piece);
		if(piece.getRow() == 10) { gBoard.info_text.text = 'Cannot move that direction!'; }
		else {
			var nRow = piece.getRow() - 1;
			var nID = 'p' + game.padValue(nRow) + game.padValue(piece.getCol());
			var nPiece = board.find(p => p.getID() == miner.piece);
			// has the piece already been dug
			// is the piece an item of interest
			// check tool
			miner.piece = nID;
			nPiece.setIsDug(true);
			miner.y -= 28;
			gBoard.getChildByName(nID).gotoAndStop('dug');
			createjs.Tween.get(gBoard.gameMiner_mc).to({y: miner.y}, 1000);
		}
	}
	
	moveDown() {
		var piece = board.find(p => p.getID() == miner.piece);
		if(piece.getRow() == 10) { gBoard.info_text.text = 'Cannot move that direction!'; }
		else {
			var nRow = piece.getRow() + 1;
			var nID = 'p' + game.padValue(nRow) + game.padValue(piece.getCol());
			var nPiece = board.find(p => p.getID() == miner.piece);
			// has the piece already been dug
			// is the piece an item of interest
			// check tool
			miner.piece = nID;
			nPiece.setIsDug(true);
			miner.y += 28;
			gBoard.getChildByName(nID).gotoAndStop('dug');
			createjs.Tween.get(gBoard.gameMiner_mc).to({y: miner.y}, 1000);
		}
	}
	
	elevatorDown(level) {
		gBoard.gotoAndPlay(level); 
		anim.gotoAndPlay('elevatorDown');
	}
	
	buildBoard() {
		board = [];
		gBoard.info_text.text = 'Please wait while mine is scanned!';
		
		for(var row=1; row<11; row++) {
			for(var col=1; col<32; col++) {
				var piece = new Piece(row, col, 'rock', this);
				var pid = piece.getID();

				board.push(piece);
				if(col < 31) { gBoard.getChildByName(pid).gotoAndStop('rock'); }
			}
		}
		game.placeGold(150); 
	}

	random(seed) {
		var rnd = Math.floor(Math.random() * seed) + 1;
		return parseInt(rnd);
	}
	
	padValue(value) {
		var pVal = '00' + String(value);
		return pVal.slice(-2);
	}
	
	placeGold(seed) {
		if(seed > 0) {
			var row = game.random(10);
			var col = game.random(30);
			var pid = 'p' + game.padValue(row) + game.padValue(col);
			var piece = board.find(p => p.getID() == pid);
			if(piece.getType() == 'rock') {
				piece.setType('interest');
				gBoard.getChildByName(pid).gotoAndStop('interest');
				seed--;
			}
			game.placeGold(seed);
		} else {
			var info = gBoard.info_text;
			gBoard.info_text.text = 'Select your Tunnel!';
			anim.gotoAndPlay('exitBank');
		}
	}

}
