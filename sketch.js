
let estado = 'campo';
let imgCampo, imgCidade, somCampo, somCidade;

function preload() {
  imgCampo = loadImage('campo.jpg');
  imgCidade = loadImage('cidade.jpg');
  somCampo = loadSound('som_campo.mp3');
  somCidade = loadSound('som_cidade.mp3');
}

function setup() {
  createCanvas(800, 400);
  textSize(20);
  somCampo.loop();
}

function draw() {
  if (estado === 'campo') {
    image(imgCampo, 0, 0, width, height);
    fill(255);
    text('CAMPO - Pressione C para ir para a CIDADE', 20, 30);
  } else {
    image(imgCidade, 0, 0, width, height);
    fill(0);
    text('CIDADE - Pressione V para voltar ao CAMPO', 20, 30);
  }
}

function keyPressed() {
  if (key === 'C' && estado === 'campo') {
    estado = 'cidade';
    somCampo.stop();
    somCidade.loop();
  } else if (key === 'V' && estado === 'cidade') {
    estado = 'campo';
    somCidade.stop();
    somCampo.loop();
  }
}
