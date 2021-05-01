var canvas;
var music;
var redBox, blueBox, yellowBox, greenBox, box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    redBox = createSprite(100,580,150,20);
    redBox.shapeColor = rgb(255,0,0);

    blueBox = createSprite(275, 580, 150, 20);
    blueBox.shapeColor = rgb(0,0,255);

    yellowBox = createSprite(450,580,150,20);
    yellowBox.shapeColor = rgb(255,255,0);

    greenBox = createSprite(625, 580, 150, 20);
    greenBox.shapeColor = rgb(0,255,0);


    box = createSprite(random(20,750), 20,20);
    box.velocityY = 4;
    box.velocityX = 3;
  
}

function draw() {
    background(rgb(169,169,169));
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if(redBox.isTouching(box) && box.bounceOff(redBox)) {
       box.shapeColor = rgb(255,0,0); 
       music.stop()
       box.velocityX=0;
       box.velocityY=0;
    }

    if(blueBox.isTouching(box) && box.bounceOff(blueBox)) {
        box.shapeColor = rgb(0,0,255); 
     }

     if(yellowBox.isTouching(box) && box.bounceOff(yellowBox)) {
        box.shapeColor = rgb(255,255,0); 
        music.play();
     }

     if(greenBox.isTouching(box) && box.bounceOff(greenBox)) {
        box.shapeColor = rgb(0,255,0); 
     }

    drawSprites();
}
