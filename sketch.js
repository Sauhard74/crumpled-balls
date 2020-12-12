
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world, boxspriteleft,rect1,boxspritebottom,rect2,boxspriteright,rect3,ground,paper,boxposition,boxY;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boxposition=width/2-100
	boxY=610

	boxspriteleft=createSprite(boxposition,boxY,20,100)
	boxspriteleft.shapeColor=color(255,0,0);

	rect1=Bodies.rectangle(boxposition+20,boxY,20,100,{isStatic:true});
	World.add(world,rect1)

boxspritebottom=createSprite(boxposition+100,boxY+40,200,20)
boxspritebottom.shapeColor=color(255,0,0)

	rect2=Bodies.rectangle(boxposition+100,boxY+25,200,20,{isStatic:true});
	World.add(world,rect2)

	boxspriteright=createSprite(boxposition+200,boxY,20,100)
	boxspriteright.shapeColor=color(255,0,0)

	rect3=Bodies.rectangle(boxposition+180,boxY,20,100,{isStatic:true});
	World.add(world,rect3)

 paper = new Papers	(200,650,10);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(197, 140, 133);
  paper.display();
  Engine.update(engine)

  drawSprites();
}
  function keyPressed(){
  if(keyCode=== UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:boxposition+25,y:boxY+10})
  }
  
 
}


