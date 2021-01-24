const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Maze (230,130,20,70);
    box2 = new Maze (350,230,80,10);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
}