function Point(X,Y){
	this.x = X;
	this.y = Y;
}
Point.distance = function (a,b){
	return Math.sqrt( ( a.x - b.x ) * ( a.x - b.x ) + ( a.y - b.y ) * ( a.y - b.y ) );
}
Point.distance_squared = function (a,b){
	return ( a.x - b.x ) * ( a.x - b.x ) + ( a.y - b.y ) * ( a.y - b.y );
}
function Vector(X,Y){
	this.x = X;
	this.y = Y;
}
//PointMass.scale = Math.pow(10,10);<---define this // 1 px = scale meters
//PointMass.kepler_constant = 6.67428 * Math.pow(10,-11);
//PointMass.electric_constant = 8.98755 * Math.pow(10,9);
PointMass.kepler_constant = 1;
PointMass.electric_constant = 1;

function PointMass(){
	this.pos = new Point(0,0);
	this.speed = new Vector(0,0);
	this.mass = 0;
	this.charge = 0;
	this.acc = new Vector(0,0);
	
	this.force = function (Forta){
			this.acc.x += Forta.x / this.mass;
			this.acc.y += Forta.y / this.mass;
		}
	this.time = function (Time){
			this.pos.x += time * ( this.speed.x + time * this.acc.x * 0.5 ) / PointMass.scale;
			this.pos.y += time * ( this.speed.y + time * this.acc.y * 0.5 ) / PointMass.scale;
			this.speed.x += time * this.acc.x;
			this.speed.y += time * this.acc.y;
			this.acc.x = 0;
			this.acc.y = 0;
		}
}



PointMass.gravity = function (a,b){
	var force = new Vector(
			PointMass.kepler_constant / PointMass.scale / PointMass.scale * a.mass * b.mass / Point.distance_squared(a.pos,b.pos) * ( b.pos.x - a.pos.x ) / Point.distance(a.pos,b.pos),
			PointMass.kepler_constant / PointMass.scale / PointMass.scale * a.mass * b.mass / Point.distance_squared(a.pos,b.pos) * ( b.pos.y - a.pos.y ) / Point.distance(a.pos,b.pos)
		)
	a.force(force);
	force.x=-force.x;
	force.y=-force.y;
	b.force(force);
}
PointMass.static_electricity = function (a,b){
	var force = new Vector(
			-PointMass.electric_constant / PointMass.scale / PointMass.scale * a.charge * b.charge / Point.distance_squared(a.pos,b.pos) * ( b.pos.x - a.pos.x ) / Point.distance(a.pos,b.pos),
			-PointMass.electric_constant / PointMass.scale / PointMass.scale * a.charge * b.charge / Point.distance_squared(a.pos,b.pos) * ( b.pos.y - a.pos.y ) / Point.distance(a.pos,b.pos)
		)
	a.force(force);
	force.x=-force.x;
	force.y=-force.y;
	b.force(force);
}
PointMass.elastic_collision = function (a,b){
	alert('elastic_collision has not been implemented yet.');
}
PointMass.plastic_collision = function (a,b){
	var mass = a.mass + b.mass;
	var charge = a.charge + b.charge;
	var pos = new Point(
			( a.pos.x * a.mass + b.pos.x * b.mass ) / mass,
			( a.pos.y * a.mass + b.pos.y * b.mass ) / mass
		)
	var speed = new Vector(
			( a.speed.x * a.mass + b.speed.x * b.mass ) / mass,
			( a.speed.y * a.mass + b.speed.y * b.mass ) / mass
		)
	var acc = new Vector(
			( a.acc.x * a.mass + b.acc.x * b.mass ) / mass,
			( a.acc.y * a.mass + b.acc.y * b.mass ) / mass
		)
	var temp = new PointMass;
	temp.mass = mass;
	temp.charge = charge;
	temp.pos = pos;
	temp.speed = speed;
	temp.acc = acc;
	return temp;
}