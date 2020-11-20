const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    World.add(world,ground);
    box1=new box(200,300,50,50)
    box2=new box(300,300,50,50)
    box3=new box(200,200,50,50)
    box4=new box(300,200,50,50)
   ground1=new ground(200,400,400,20)
   pig1=new pig(250,300)
   pig2=new pig(250,200)
   log1=new Log(250,250,180,PI/2)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    
box1.display();
box2.display();
box3.display();
box4.display();
 ground1.display(); 
 pig1.display();
 pig2.display(); 
 log1.display();
}