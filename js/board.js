/* global root, Piece, game, createjs */
/* eslint no-unused-vars: 0 */

var board = [];

class Board {
	constructor(gb, symbolLib) {
		var CRT = 32768;
		this.gb = gb;
		this.symbolLib = symbolLib;
		this.newBoard();
	}
	
	newBoard() {
		var sp = 33009;
		var x = -484;
		var y = -129;
		
		for(var row=1; row<17; row++) {
			for(var col=1; col<36; col++) {
				var id = 'p' + sp;
				var piece = new Piece(id, row, col, 'start');
				if(col < 31) {
					piece.symbol = new this.symbolLib.PieceStart();
				} else {
					piece.symbol = new this.symbolLib.PieceDug();
					piece.type = 'dug';
				}
				
				piece.symbol.parent = this.gb;
				piece.symbol.x = x;
				piece.symbol.y = y;
				this.gb.addChild(piece.symbol);
				board.push(piece);
				x += 27;
				sp++;
			}
			sp = sp + 10;
			y += 27;
			x = -484;
		}
		
	}
}
