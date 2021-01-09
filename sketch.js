
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;
var dustbin1,dustbin2,dustbin3;
var ground1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1=new paper(50,280,20);
	ground1= new ground(400,670,800,20);
	dustbin1=new dustbin(650,650,200,20);
	
	dustbin2=new dustbin(750,610,20,100);
	dustbin3=new dustbin(550,610,20,100);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  paper1.display();
  dustbin1.display();
  
  ground1.display();

  

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:50,y:-85});
	}
}

