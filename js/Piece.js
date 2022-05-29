/* eslint no-unused-vars: 0 */

// JavaScript Document
class Piece {
	constructor(row, col, type, mineGame) {
		this.ID = 'p' + mineGame.padValue(row) + mineGame.padValue(col);
		this.type = type;
		this.isDug = false;
	}
	
	getID() { return this.ID; }
	getType() { return this.type; }
	getIsDug() { return this.isDug; }
	
	setID(value) { this.ID = value; }
	setType(value) { this.type = value; }
	setIsDug(value) { this.getIsDug = value; }
}
