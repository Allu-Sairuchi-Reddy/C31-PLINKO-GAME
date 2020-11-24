const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
Events = Matter.Events;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionh=300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,770,480,8);
  
  for(var t=0; t<=width;t=t+80){
   divisions.push(new Division(t,625,10,divisionh))
}

for (var j = 15; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,75));
}

for (var j = 35; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,175));
}

 for (var j = 18; j <=width; j=j+50) 
{

   plinkos.push(new Plinko(j,275));
}

 for (var j = 40; j <=width-10; j=j+50) 
{

   plinkos.push(new Plinko(j,375));
}
}


function draw() {
  background("green"); 
  Engine.update(engine);
   
  ground.display();
  
  for (var t = 0; t < divisions.length; t++) {
     
   divisions[t].display();
 }
 for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
}
if(frameCount%60===0){
  particles.push(new Particle(random(100, 700), 10,10));
}

for (var j = 0; j < particles.length; j++) {

  particles[j].display();
}
 
  drawSprites();
}