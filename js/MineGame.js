/* global root, Piece */
/* eslint no-unused-vars: 0 */

// global variables
var board = [];
var anim, gb, game;

// JavaScript Document
class MineGame {
	constructor() {
		game = this;
		anim = root.animation_mc;
		gb = root.gameBoard_mc;
		this.eventHandlers();
	}

	eventHandlers() {
		$('#btnStart').on('click', function() { game.buildBoard(); });
		$('#btnExit').on('click', function() { 
			anim.gotoAndPlay('exitBank'); 
		});
		$('#btnDown').on('click', function() { 
			anim.gotoAndPlay('elevatorDown'); 
		});
		$('#btnPickaxe').on('click', function() {
			anim.miner_mc.gotoAndPlay('pickaxe'); 
			anim.miner_mc.gotoAndPlay('raisePickaxe'); 
		});
		$('#btnJackhammer').on('click', function() { 
			anim.miner_mc.gotoAndPlay('jackhammer'); 
			anim.miner_mc.gotoAndPlay('drill'); 
		});
		$('#btnDynamite').on('click', function() { 
			anim.gotoAndPlay('explosive'); 
			anim.gotoAndPlay('plunge'); 
		});
		$('#btnPump').on('click', function() { 
			anim.gotoAndPlay('pump'); 
			anim.gotoAndPlay('pumpOn'); 
		});
		$('#btnBank').on('click', function() { 
			anim.gotoAndPlay('depositGold'); 
		});
		$('#btnCaveIn').on('click', function() { 
			anim.gotoAndPlay('caveIn'); 
		});
		$('#btnSpring').on('click', function() { 
			anim.gotoAndPlay('spring'); 
		});
		gb.btnLevel_01.on('click', function() { game.elevatorDown('level1'); });
		gb.btnLevel_02.on('click', function() { game.elevatorDown('level2'); });
		gb.btnLevel_03.on('click', function() { game.elevatorDown('level3'); });
		gb.btnLevel_04.on('click', function() { game.elevatorDown('level4'); });
		gb.btnLevel_05.on('click', function() { game.elevatorDown('level5'); });
		gb.btnLevel_06.on('click', function() { game.elevatorDown('level6'); });
		gb.btnLevel_07.on('click', function() { game.elevatorDown('level7'); });
		gb.btnLevel_08.on('click', function() { game.elevatorDown('level8'); });
		gb.btnLevel_09.on('click', function() { game.elevatorDown('level9'); });
		gb.btnLevel_10.on('click', function() { game.elevatorDown('level10'); });
	}
	
	elevatorDown(level) {
		gb.gotoAndPlay(level); 
		anim.gotoAndPlay('elevatorDown');
	}
	
	buildBoard() {
		board = [];
		var pieceType = [ 
			'rock', 'rock', 'rock', 'rock', 'rock', 'rock', 'rock', 'rock', 'rock', 'rock', 
			'gold', 'gold', 
			'hard',  
			'water',
			'caveIn'
		];
		
		for(var row=1; row<11; row++) {
			for(var col=1; col<31; col++) {
				var rnd = game.random(15);
				var piece = new Piece(row, col, pieceType[rnd], this);
				var pid = piece.getID();

				board.push(piece);
				if(pieceType[rnd] == 'rock') { gb.getChildByName(pid).gotoAndStop('rock'); }
				else { gb.getChildByName(pid).gotoAndStop('interest'); }
			}
		}
		anim.gotoAndPlay('exitBank'); 
	}

	random(seed) {
		var rnd = Math.floor(Math.random() * seed) + 1;
		return parseInt(rnd);
	}
	
	padValue(value) {
		var pVal = '00' + String(value);
		return pVal.slice(-2);
	}

}
