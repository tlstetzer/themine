/* eslint no-unused-vars: 0 */

class Piece {
	constructor(id, row, col, type) {
		this.ID = id;
		this.row = row;
		this.col = col;
		this.type = type;
		this.isDug = false;
		this.symbol;
	}
	
	getID() { return this.ID; }
	getType() { return this.type; }
	getIsDug() { return this.isDug; }
	getRow() { return this.row; }
	getCol() { return this.col; }

	setType(value) { this.type = value; }
	setIsDug(value) { this.getIsDug = value; }
	setSymbol(value) { this.symbol = value; }
}
