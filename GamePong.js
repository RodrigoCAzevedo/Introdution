//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velXBolinha = 6;
let velYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let CompRaquete = 10;
let AltRaquete = 90;

//Variáveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

let colidiu = false;

//placar do jogo
let meusPontos = 0;
let pontosOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velXBolinha *= -1;
  }
  
  if (yBolinha + raio > height ||
      yBolinha - raio < 0){
    velYBolinha *= -1;
  }
}

function mostraRaquete(x,y){
  rect(x, y, CompRaquete, AltRaquete);
}

function mostraRaqueteOponente(){
  rect(xRaqueteOponente, yRaqueteOponente, CompRaquete, AltRaquete);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + CompRaquete && yBolinha - raio < yRaquete + AltRaquete && yBolinha + raio > yRaquete){
    velXBolinha *= -1;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x, y, CompRaquete, AltRaquete, xBolinha, yBolinha, raio);
  if (colidiu){
    velXBolinha *= -1;
  }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - CompRaquete / 2 - 30;
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill(255)
  text(meusPontos, 278, 26);
  text(pontosOponente, 321, 26);
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}
