/* eslint no-unused-vars: 0 */

class Piece {
	constructor(id, row, col, x, y, type) {
		this.ID = id;
		this.row = row;
		this.col = col;
		this.x = x;
		this.y = y;
		this.minerX = 0;
		this.minerY = 0;
		this.type = type;
		this.isDug = false;
		this.edge = 'none';
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
		
		// locations
		this.bank = { X: 1350, Y: 170, S: -1 };
		this.tunnelEnd = { X: 292, Y: 170, S: 1 };
		this.tunnelLeave = { X: 292, Y: 170, S: -1 };
		this.pumpPos = { X: 0, Y: 0, S: 1 };
		this.dynamitePos = { X: 0, Y: 0, S: 1 };
		
		// elevator town
		this.townBelow = { X: 1760, Y: 390, S: 1 };
		this.townOut = { X: 1660, Y: 180, S: -1 };
		this.townIn = { X: 1800, Y: 183, S: 1 };
		
		// elevator tunnel
		this.tunnelAbove = { X: 938, Y: -115, S: 1 };
		this.tunnelBelow = { X: 938, Y: 430, S: 1 };
		this.tunnelOut = { X: 0, Y: 0, S: -1 };
		this.tunnelIn = { X: 938, Y: 170, S: 1 };
		
		// elevator shaft
		this.elevY = [-150, -130, -101, -72, -43, -14, 15, 44, 73, 102, 131, 160, 189, 218, 247, 276, 305, 334, 363]
		this.elevAboveShaft = { X: 438, Y: -188, S: 0.1985 };
	}
	
	setPosition(sym, loc) {
		this.pos = loc;
		sym.x = this[loc].X;
		sym.y = this[loc].Y;
		
		// facing 1=left, -1=right
		sym.scaleX = this[loc].S;
	}
}

class Elev{
	constructor() {
		// locations
		this.pos = 'inTown';
		this.elevDir = '';
		this.elevLevel = 0;
		
		// elevator town
		this.belowTown = { X: 1781, Y: 120 };
		this.inTown = { X: 1781, Y: -103 };
		
		// elevator tunnel
		this.aboveTunnel = { X: 918, Y: -382 };
		this.belowTunnel = { X: 918, Y: 130 };
		this.inTunnel = { X: 918, Y: -120 };
		
		// elevator shaft
		this.elevY = [-150, -130, -101, -72, -43, -14, 15, 44, 73, 102, 131, 160, 189, 218, 247, 276, 305, 334, 363]
		this.aboveShaft = { X: 446, Y: -188 };
	}
	
	setPosition(sym, loc) {
		sym.x = this[loc].X;
		sym.y = this[loc].Y;
		this.pos = loc;
	}
}
