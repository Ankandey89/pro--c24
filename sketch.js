
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	bin.js=new bin(1200,650);
	ball.js=new ball(200,450,40);
	groound.js=new ground(width/2,670,width,20);

	//Create a Ground


	var render = Render.create({
		element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});



	Engine.run(engine);
  //Render.run(render);



}


function draw() {
  rectMode(CENTER);
  background(0);
  
  binObj.display();
  baObject.display();
  groundObject.display();



  drawSprites();

  function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}
 
}



