var paperIMG, paperSprite;
var paperBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paperBody= ellipse(56,46,55,55); 

	paperBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paperBody.shapeColor= color(255,0,0);
	World.add(world, paperBody);
	boxPosition=width/2-100 
	boxY=610;
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 boxleftSprite=createSprite(boxPosition, boxY, 20,100); 
	 boxleftSprite.shapeColor=color(255,0,0);
	 boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} ); 
	 World.add(world, boxLeftBody);
	 boxRightSprite=createSprite(boxPosition+200, boxY, 20,100); 
	 boxRightSprite.shapeColor=color(255,0,0);
	 boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} ); 
	 World.add(world, boxRightBody);
	 boxBase=createSprite(boxPosition+100, boxY+40, 200,20); 
	 boxBase.shapeColor=color(255,0,0); 
	 boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
	 World.add(world, boxBottomBody);
	 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



