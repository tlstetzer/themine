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
