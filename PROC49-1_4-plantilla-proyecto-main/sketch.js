var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("guarida.png");
  bg2 = loadImage("treasure2.png");
}

//PARA CANVAS Y AÑADIR LOS NUEVOS MUNDOS (PREGUNTA PQ NO SE AÑADE CODE.JS)
function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  //NO OLVIDEMOS CÓMO PONER UNA PUNTUACIÓN
  text("Puntuación: " + score, 450, 50);

  //3 SIGNOS DE IGUAL PARA COMPARAR
  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TESORO DESBLOQUEADO",250, 200);
  }

  drawSprites()
}