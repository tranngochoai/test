function Mouse (name) {
	this.name = name;
	this.dead = false;
}
Mouse.prototype.die = function() {
	this.dead = true;
	console.log('check');
}
module.exports = Mouse;