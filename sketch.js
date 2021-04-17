const Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;

  var particle;
var plinkos = [];
var divisions =[];
var divisionHeight=300
var gameState = "PLAY";
var score =0;
var count = 0;




function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(240,800,480,10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 15; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

}

function draw() {
  background(0);  

  Engine.update(engine)

  textSize(35)
  stroke("black");
  fill("biege");
  text("Score : "+score,20,40);

  textSize(35);
  fill(255);
 
  text(" 500 ",5,550);
  text(" 500 ",80,550);
  text(" 200 ",160,550);
  text(" 200 ",240,550);
  text(" 100 ",320,550);
  text(" 100 ",400,550);

  if(gameState==="END"){
    fill("red")
    textSize(30)
    text("GAME OVER",200,400)
  }
  


  ground.display();

  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
  }

  

  if(particle!=null){
    particle.display();

    if(particle.body.position.y>700){

     if(particle.body.position.x<160){

     score = score+500;
     particle=null;
     if(count>=5)gameState ="END";
     }

     else if(particle.body.position.x<320 && particle.body.position.x>160){
       score = score+200;
       particle = null;
       if(count>=5) gameState="END";
     }
     else if(particle.body.position.x<480 && particle.body.position.x>320){
       score = score+100;
       particle = null;
       if(count>=5) gameState="END";
     }
    }
  }

  /*if(frameCount%60===0){
    particle.push(new Particle(random(width/2-60, width/2+60), 10,10));
   
  }*/

  

 // drawSprites();
}



function mousePressed(){
  if(gameState !=="END"){
count++;
particle = new Particle(mouseX, 50,10,10)
  }
}
