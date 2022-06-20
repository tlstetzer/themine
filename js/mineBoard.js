/* eslint no-unused-vars: 0 no-undef: 0*/

var aBoard = [];
var gPieces;
const CRT = 32768;
const random = function(seed) { var rnd = Math.floor(Math.random() * seed) + 1; return parseInt(rnd); }

function boardInit() {
	gPieces = exportRoot.mineBoard_mc.gamePieces_mc;
}

function drawBoard() {
	aBoard = [];
	var sp = 33009;
	var x = 0;
	var y = 0;
	var pt = 'start';

	// Rows
	for(var row=1; row<19; row++) {
		var mx = -490;
		var my = miner.elevY[row];
		
		// columns
		for(var col=1; col<34; col++) {
			var id = 'p' + sp;
			var piece = new Piece(id, row, col, x, y, mx, my, 'start');
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
			
			// set surrounding
			if(row == 1 && col == 1) { 
				// top left
				piece.idLeft = 'p00000';
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p00000';
				piece.idDown = 'p' + (sp + 40);
			} else if(row == 1 && col == 31) { 
				// top right
				piece.idLeft = 'p' + (sp - 1);
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p00000';
				piece.idDown = 'p' + (sp + 40); 
			} else if(row == 18 && col == 1) {
				// bottom left
				piece.idLeft = 'p00000';
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p' + (sp - 40);
				piece.idDown = 'p00000'; 
			} else if(row == 18 && col == 31) {
				// bottom right
				piece.idLeft = 'p' + (sp - 1);
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p' + (sp - 40);
				piece.idDown = 'p00000'; 
			} else if(row == 1) {
				// top row
				piece.idLeft = 'p' + (sp - 1);
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p00000';
				piece.idDown = 'p' + (sp + 40); 
			} else if(row == 18) {
				// bottom row
				piece.idLeft = 'p' + (sp - 1);
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p' + (sp - 40);
				piece.idDown = 'p00000'; 
			} else if(col == 1) {
				// left column
				piece.idLeft = 'p00000';
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p' + (sp - 40);
				piece.idDown = 'p' + (sp + 40); 
			} else if(col == 31) {
				// right column
				piece.idLeft = 'p' + (sp - 1);
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p' + (sp - 40);
				piece.idDown = 'p' + (sp + 40); 
			} else {
				// middle of board
				piece.idLeft = 'p' + (sp - 1);
				piece.idRight = 'p' + (sp + 1);
				piece.idUp = 'p' + (sp - 40);
				piece.idDown = 'p' + (sp + 40); 
			}

			// add to board
			piece.symbol.parent = gPieces;
			piece.symbol.x = x;
			piece.symbol.y = y;
			gPieces.addChild(piece.symbol);
			aBoard.push(piece);

			// increment column
			x += 29;
			mx += 29;
			sp++;
		}

		// increment row
		piece = new Piece(id, row, 33, x, y, 'shaft');
		sp = sp + 7;
		y += 29;
		x = 0;
	}

	// salt the mine
	saltMine(250);
}

function saltMine(loop) {
	setTimeout(function() {
		var pn = CRT + 200 + random(28) + (40 * random(18));
		var pid = 'p' + pn;
		var piece = aBoard.find(p => p.ID == pid);
		piece.symbol.gotoAndStop('action');
		piece.type = 'action';
		if(loop > 0) { saltMine(loop - 1); }
		else {
			gBoard.info_text.text = 'Begin Mining!'; 
			exitBank();
//			exitElevator();		// debugging
		}
	}, 10);
}

function getPiece(id) {
	return aBoard.find((p) => p.ID == id);
}
	
function getByLevel(level) {
	var piece = aBoard.find(p => p.row == level && p.col == 33);
	return piece.ID;
}
