
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var score=0;
var backgroundImage;

function preload()
{
	polygonImage = loadImage("polygon.png");
	getbackgroundImage();
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,255,20);

	box1 = new Box(300,625,30,30);
	box2 = new Box(335,625,30,30);
	box3 = new Box(370,625,30,30);
	box4 = new Box(405,625,30,30);
	box5 = new Box(440,625,30,30);
	box6 = new Box(475,625,30,30);
	box7 = new Box(510,625,30,30);
	box8 = new Box(320,590,30,30);
	box9 = new Box(355,590,30,30);
	box10 = new Box(390,590,30,30);
	box11 = new Box(425,590,30,30);
	box12 = new Box(460,590,30,30);
	box13 = new Box(495,590,30,30);
	box14 = new Box(360,555,30,30);
	box15 = new Box(395,555,30,30);
	box16 = new Box(430,555,30,30);
	box17 = new Box(465,555,30,30);
	box18 = new Box(395,520,30,30);
	box19 = new Box(430,520,30,30);
	box20 = new Box(415,485,30,30);

	

	polygon = new Polygon(150,625,20,20);
	sling = new SlingShot(polygon.body,{x:100,y:575});

	
	Engine.run(engine);
  
}


function draw() {

	if(backgroundImage)
	background(backgroundImage);
  rectMode(CENTER);
  
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();

  polygon.display();

  sling.display();



  drawSprites();

  noStroke();
  fill("white")
  text("Score: "+score,650,50);
 
}

function mouseDragged(){
	Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	sling.fly();
}

function keyPressed(){
    if(keyCode === 32){
       sling.attach(polygon.body);
    }
}

async function getbackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
    console.log(response);
   var responseJSON = await response.json();
    console.log(responseJSON);
   var datetime = responseJSON.datetime;
    var Hour = datetime.slice(11,13);



if(Hour>=06&& Hour<=18){
 bg = "bg.png";

} else {
    bg = "bg2.jpg";
}
backgroundImage = loadImage(bg);
}


