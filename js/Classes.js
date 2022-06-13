/* eslint no-unused-vars: 0 */

class Piece {
	constructor(id, row, col, x, y, type) {
		this.ID = id;
		this.row = row;
		this.col = col;
		this.x = x;
		this.y = y;
		this.type = type;
		this.isDug = false;
		this.symbol;
	}
}

class Miner {
	constructor() { 
		this.bankTotal = 1000; 
		this.goldPrice = 600; 
		this.goldOz = 0;
		
		this.piece = 'p0000'; 
		this.tool = 'none';
		this.pos = 'bank';
		this.elevDir = '';
		this.elevLevel = 0;
		
		this.bank = { X: 1350, Y: 170, S: -1 };
		this.elevTown = { X: 1800, Y: 183, S: 1 };
	}
	
	setPosition(sym, loc) {
		sym.x = this[loc].X;
		sym.y = this[loc].Y;
		sym.scaleX = this[loc].S;
		this.pos = loc;
	}
}
