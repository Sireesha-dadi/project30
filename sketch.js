const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, block1;


function preload() {
   polygon_img= loadImage("polygon.png"); 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(390,350,280,10);
    

    block1 = new Block(300,330,30,40);
    block2 = new Block(330,330,30,40);
    block3 = new Block(360,330,30,40);
    block4 = new Block(390,330,30,40);
    block5 = new Block(420,330,30,40);
    block6 = new Block(450,330,30,40);
    block7 = new Block(480,330,30,40);

    block8 = new Block(330,280,30,40);
    block9 = new Block(360,280,30,40);
    block10 = new Block(390,280,30,40);
    block11 = new Block(420,280,30,40);
    block12 = new Block(450,280,30,40);

    block13 = new Block(360,240,30,40);
    block14 = new Block(390,240,30,40);
    block15 = new Block(420,240,30,40);
    
    block16 = new Block(390,200,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

   
   slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    
    fill("red");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
 
    fill("blue");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("green");
   block13.display();
   block14.display();
   block15.display();

   fill("pink");
   block16.display();
    
    ground.display();

    imageMode(CENTER);
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);
   

  
   slingshot.display();    
}

 function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
} 

function keyPressed(){
if(keyCode=== 32){
    slingshot.attach(this.polygon);
}

}
