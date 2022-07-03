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

			if(col < 29) { piece.setType('start'); } 
			else if(col > 28 && col < 33) {
				// end section
				if([1, 5, 6, 7, 11, 12, 13, 17, 18].includes(row)) { piece.setType('start'); } 
				else { piece.setType('dug'); }
			} else { 
				piece.setType('shaft'); 
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
	soundEffect('radar', -1, 0.5);
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
			stopEffect();
			exitBank();
		}
	}, 10);
//	}, 1);
}

function getPiece(id) {
	return aBoard.find((p) => p.ID == id);
}
	
function getByLevel(level) {
	var piece = aBoard.find(p => p.row == level && p.col == 33);
	return piece.ID;
}

function movePiece(piece, btn) {
	var facing = '';
	if(btn == 'left' || btn == 'right') { facing = btn; }
	
	miner.setBoardPosition(boardMiner, piece.minerX, piece.minerY, facing);
	miner.piece = piece.ID;
	goldPrice();
}

function moveAllowed(piece) {
	// elevator shaft
	if(piece.type == 'shaft' && elev.elevLevel != piece.row) {
		showMessage('The elevator is not on this level!', 'error');
		return false;
	} else if (piece.type == 'water' && miner.tool != 'pump') {
		showMessage('You must pump out the water before you can move in that direction!', 'error');
		return false;
	} else if (piece.type != 'water' && miner.tool == 'pump') {
		showMessage("There's no water in that direction!", 'error');
		return false;
	} else if (piece.type == 'cavein' && miner.tool != 'dynamite') {
		showMessage('You can only use dynamite on a cave in!', 'error');
		return false;
	} else if (piece.type == 'rock' && miner.tool != 'jackhammer' && miner.tool != 'dynamite') {
		showMessage('Solid rock, you can only use the Jackhammer or Dynamite!', 'error');
		return false;
	} else { 
		return true; 
	}
}

function checkAction(piece, btn) {
	var rnd = random(15) - 1;

	if(rnd == 3) {
		// spring
		playSpring(piece, btn);
	} else if(rnd == 4 && piece.idDown != 'p00000') {
		// footing
		fallDownHole(piece, btn);
	} else if(rnd == 6) {
		// cave in
		playCaveIn(piece, btn);
	} else if(rnd == 8 || rnd ==9) {
		// gold
		var oz = random(3);
		miner.goldOz += oz;
		showMessage('Found gold nugget - ' + oz + ' oz!', 'gold', vol=.5);
		piece.setType('gold');
		movePiece(piece, btn);
	} else if(rnd > 9) {
		// rock
		piece.setType('rock');
		if(miner.tool == 'jackhammer' || miner.oldTool == 'dynamite') { 
			gBoard.info_text.text = 'Solid rock!';
			piece.setType('dug');
			movePiece(piece, btn);
		} else if(miner.tool == 'pickaxe') { 
			showMessage("Solid rock, pickaxe won't do!", 'error', vol=.5); 
		}
	} else {
		gBoard.info_text.text = 'Sandstone, easy digging!';
		piece.setType('dug');
		movePiece(piece, btn);
	}
}

function waterNearby() {
	var piece = getPiece(miner.piece);
	var pieceLeft = getPiece(piece.idLeft);
	var pieceRight = getPiece(piece.idRight);
	var pieceUp = getPiece(piece.idDown);
	var pieceDown = getPiece(piece.idUp);
	
	if(piece.type == 'water') { return true; }
	else if(pieceLeft.type == 'water') { return true; }
	else if(pieceRight.type == 'water') { return true; }
	else if(pieceUp.type == 'water') { return true; }
	else if(pieceDown.type == 'water') { return true; }
	else { return false; }
}
