const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var manImg, lightningImg;
var man, lightning, ground;
var dropLimit = 100;
var drops= []

function preload(){
}

function setup(){
    createCanvas(400, 800);
    engine = Engine.create();
    world = engine.world;

    man = new UmbreMan(width/2, 630);
    lightning = new Thunder(random(100, 300), 10, random(300, 400), 15)
}

function draw(){
    background(0,0,0);
    Engine.update(engine);

    if(frameCount % 5 === 0) {
        for(var i = 0; i < dropLimit; i++) {
            drops.push(new Drop(random(0,400), random(0,10), 5));
            dropLimit = dropLimit - 1;
        }
    }

    if(frameCount > 5) {
        drops.map((drop)=>{
            drop.display()
            drop.update()
        })
    }

    if(frameCount % 150 === 0 || frameCount % 151 === 0 || frameCount % 152 === 0 ||frameCount % 153 === 0 || frameCount % 154 === 0 || frameCount % 155 === 0 || frameCount % 156 === 0 || frameCount % 157 === 0 || frameCount % 158 === 0 || frameCount % 159 === 0 || frameCount % 160 === 0 ) {
        lightning.display();
        console.log('display')
    }
    man.display();

    /*if(frameCount % 100 > 90) {
        lightning = new Thunder(random(100,300), 0, 500, 280)
        lightning.display();
    }

    if(frameCount % 120 === 0) {
        lightning.remove();
        console.log('removed')
    }

    

    /*if(frameCount > 200) {
        for(var i = 0; i < dropLimit; i++) {
            drops.push(new Drop(random(0,400), random(0,10), 5));
            drops[i].display();
        }
    }*/
    
}   

