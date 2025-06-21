let estado = 'inicio';
let imgCampo, imgCidade, somCampo, somCidade;

function preload() {
  imgCampo = loadImage('campo.jpg');
  imgCidade = loadImage('cidade.jpg');
  somCampo = loadSound('som_campo.mp3');
  somCidade = loadSound('som_cidade.mp3');
}

function setup() {
  createCanvas(800, 400);
  textSize(18);
}

function draw() {
  background(220);

  if (estado === 'inicio') {
    fill(0);
    textSize(24);
    text('Projeto Agrinho 2025 - Festejando do Campo à Cidade', 80, 50);
    textSize(18);
    text('Neste projeto, vamos refletir sobre a importância de dois grandes ambientes:', 50, 90);
    text('- O CAMPO: Onde nascem os alimentos, onde começa a inovação rural.', 70, 130);
    text('- A CIDADE: Onde os produtos chegam e a tecnologia conecta tudo.', 70, 160);
    text('Escolha por onde começar a sua experiência:', 70, 210);
    text('Pressione 1 para explorar o CAMPO', 100, 250);
    text('Pressione 2 para explorar a CIDADE', 100, 280);
  }

  else if (estado === 'campo') {
    image(imgCampo, 0, 0, width, height);
    fill(255);
    rect(0, 0, width, 50);
    fill(0);
    text('Você está no CAMPO - Onde a natureza e a produção acontecem.', 20, 30);
    text('Pressione C para ir para a CIDADE', 20, 60);
  }

  else if (estado === 'cidade') {
    image(imgCidade, 0, 0, width, height);
    fill(255);
    rect(0, 0, width, 50);
    fill(0);
    text('Você está na CIDADE - Onde os produtos chegam e as ideias se encontram.', 20, 30);
    text('Pressione V para voltar ao CAMPO', 20, 60);
  }
}

function keyPressed() {
  if (estado === 'inicio') {
    if (key === '1') {
      estado = 'campo';
      somCampo.loop();
    }
    if (key === '2') {
      estado = 'cidade';
      somCidade.loop();
    }
  } else {
    if (key === 'C' && estado === 'campo') {
      estado = 'cidade';
      somCampo.stop();
      somCidade.loop();
    }
    if (key === 'V' && estado === 'cidade') {
      estado = 'campo';
      somCidade.stop();
      somCampo.loop();
    }
  }
}
