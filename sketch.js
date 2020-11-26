const Engine=Matter.Engine; 
const World=Matter.World; 
const Bodies=Matter.Bodies; 
var engine,world; 
var object; 
var ground,box; 
function setup() { 
  createCanvas(400,400); 
  engine=Engine.create(); 
  world=engine.world; 
  /* var object_options={ isStatic:true }*/ 
  var ground_options={ 
    isStatic:true   } /*
  object=Bodies.rectangle(100,100,30,30,object_options); 
  World.add(world,object);*/ 
  ground=Bodies.rectangle(200,390,200,10,ground_options); 
  World.add(world,ground); 
  var box_options={ restitution: 1.0 } 
  box=Bodies.circle(200,200,20,box_options); 
  World.add(world,box); 
  //console.log(ground);
 } 
  function draw() { 
    background(0,0,0); 
    Engine.update(engine); 
    rectMode(CENTER); 
    rect(ground.position.x,ground.position.y,400,20); 
    ellipseMode(RADIUS); 
    ellipse(box.position.x,box.position.y,20,20); 
  }