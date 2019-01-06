function random_exploded_star1(){
	var radius = 700;
	for(i=0;i<200;i++){
		var planet = new Planet();
		planet.mass = Math.random() * 10;
		var angle = Math.random() * 2 * Math.PI;
		var dist = Math.sqrt(Math.random()) * radius;//uniform
		planet.pos.x = desen.canvas.width / 2 + dist * Math.cos(angle);
		planet.pos.y = desen.canvas.height / 2 + dist * Math.sin(angle);
		planet.speed.x = Math.random() * 1;
		planet.speed.y = Math.random() * 1;
		stuff.push(planet);
	}
	var planet = new Planet();
	planet.name = "Sun";
	planet.mass = 500;
	planet.pos.x = desen.canvas.width / 2;
	planet.pos.y = desen.canvas.height / 2;
	planet.speed.x = 0;
	planet.speed.y = 0;
	stuff.push(planet);
	watched=planet;
}
function random_exploded_star2(){
	var radius = 700;
	for(i=0;i<200;i++){
		var planet = new Planet();
		planet.mass = Math.random() * 10;
		var angle = Math.random() * 2 * Math.PI;
		var dist = Math.random() * radius + 10;//denser in center
		planet.pos.x = desen.canvas.width / 2 + dist * Math.cos(angle);
		planet.pos.y = desen.canvas.height / 2 + dist * Math.sin(angle);
		angle -= Math.PI / 2 + ( Math.random() - 0.5 ) / 70;
		var speed = Math.random() * 100 / Math.sqrt(dist);
		planet.speed.x = speed * Math.cos(angle);
		planet.speed.y = speed * Math.sin(angle);
		stuff.push(planet);
	}
	var planet = new Planet();
	planet.name = "Sun";
	planet.mass = 3000;
	planet.pos.x = desen.canvas.width / 2;
	planet.pos.y = desen.canvas.height / 2;
	planet.speed.x = 0;
	planet.speed.y = 0;
	stuff.push(planet);
	watched=planet;
}
function static_cloud(){
	var radius = 700;
	for(i=0;i<250;i++){
		var planet = new Planet();
		planet.mass = Math.random() * 20 + 30;
		var angle = Math.random() * 2 * Math.PI;
		var dist = Math.random() * radius + 3;//denser in center
		planet.pos.x = desen.canvas.width / 2 + dist * Math.cos(angle);
		planet.pos.y = desen.canvas.height / 2 + dist * Math.sin(angle);
		stuff.push(planet);
	}
}
function sun_and_earth(){
	{
		var planet = new Planet();
		planet.name = "Sun";
		planet.mass = 100;
		planet.pos.x = desen.canvas.width / 2;
		planet.pos.y = desen.canvas.height / 2;
		planet.speed.x = 0;
		planet.speed.y = 0.01;
		stuff.push(planet);
		watched=planet;
	}
	{
		var planet = new Planet();
		planet.name = "Earth";
		planet.mass = 1;
		planet.pos.x = desen.canvas.width / 2 + 100;
		planet.pos.y = desen.canvas.height / 2;
		planet.speed.x = 0;
		planet.speed.y = -1;
		stuff.push(planet);
	}
}
function galaxy(x,y,vx,vy,trigonometric,size,radii,name){
	var radius = radii;
	for(i=0;i<size;i++){
		var planet = new Planet();
		planet.mass = Math.random() * 0.01 + 0.01;
		var angle = Math.random() * 2 * Math.PI;
		var dist = Math.random() * radius + 20;//denser in center
		planet.pos.x = desen.canvas.width / 2 + x + dist * Math.cos(angle);
		planet.pos.y = desen.canvas.height / 2 + y + dist * Math.sin(angle);
		angle -= trigonometric * Math.PI / 2;
		var speed = 10 / Math.sqrt(dist);
		planet.speed.x = speed * Math.cos(angle) + vx;
		planet.speed.y = speed * Math.sin(angle) + vy;
		stuff.push(planet);
	}
	var planet = new Planet();
	planet.name = name;
	planet.mass = 100;
	planet.pos.x = desen.canvas.width / 2 + x;
	planet.pos.y = desen.canvas.height / 2 + y;
	planet.speed.x = vx;
	planet.speed.y = vy;
	stuff.push(planet);
}
	
	
	
	
	
	
	