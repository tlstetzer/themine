/* global root, Piece, game, gBoard, gPieces, symbolLib, createjs */
/* eslint no-unused-vars: 0 */

var board, aBoard;

class Board {
	constructor() {
		var board = this;
		this.CRT = 32768;
		this.newBoard();
	}
	
	newBoard() {
		aBoard = [];
		var sp = 33009;
		var x = 0;
		var y = 0;
		var pt = 'start';
		
		// Rows
		for(var row=1; row<19; row++) {
			// columns
			for(var col=1; col<34; col++) {
				var id = 'p' + sp;
				var piece = new Piece(id, row, col, x, y, 'start');
				piece.symbol = new symbolLib.piece();
				
				if(col < 29) { piece.symbol.gotoAndStop('start'); } 
				else if(col > 28 && col < 33) {
					// end section
					if([1, 5, 6, 7, 11, 12, 13, 17, 18].includes(row)) { piece.symbol.gotoAndStop('start'); } 
					else { piece.symbol.gotoAndStop('dug'); piece.type = 'dug'; }
				} else { 
					piece.symbol.gotoAndStop('shaft'); 
					piece.type = 'shaft'; 
				}

				// add to board
				piece.symbol.parent = gPieces;
				piece.symbol.x = x;
				piece.symbol.y = y;
				gPieces.addChild(piece.symbol);
				aBoard.push(piece);
				
				// increment column
				x += 29;
				sp++;
			}
			
			// increment row
			piece = new Piece(id, row, 33, x, y, 'shaft');
			sp = sp + 7;
			y += 29;
			x = 0;
		}

		// salt the mine
		for(var i=1; i<252; i++) { this.saltMine(i); }
	}
	
	saltMine(i) {
		setTimeout(function() {
			var pn = board.CRT + 200 + game.random(28) + (40 * game.random(18));
			var pid = 'p' + pn;
			var piece = aBoard.find(p => p.ID == pid);
			piece.symbol.gotoAndStop('action');
			piece.type = 'action';

		}, 500);
	}
}