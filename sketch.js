function setup() {
  // put setup code here

  //2 conjuntos de mínimo 3 círculos por conjunto
  //Visualización chula
  createCanvas(windowWidth,windowHeight);
  let two_thirds = 2 * (width/3);
  //primer conjunto
  muCir = new MuCirculo(12,60,width/4,0.2);
  muCir_1 = new MuCirculo(6,80,width/4,0.2);
  muCir_2 = new MuCirculo(3,90,width/4,0.2);
  //segundo conjunto
  muCir2 = new MuCirculo(8,40,width/2,0.4);
  muCir2_1 = new MuCirculo(4,50,width/2,0.4);
  muCir2_2 = new MuCirculo(2,60,width/2,0.4);

  //tercer conjunto
  muCir3 = new MuCirculo(10,100,width/2+width/4,0.6);
  muCir3_1 = new MuCirculo(5,120,width/2+width/4,0.6);
  muCir3_2 = new MuCirculo(6,130,width/2+width/4,0.6);
}

function draw() {
  // put drawing code here
  background(0);
  muCir.update();
  muCir_1.update();
  muCir_2.update();

  muCir2.update();
  muCir2_1.update();
  muCir2_2.update();

  muCir3.update();
  muCir3_1.update();
  muCir3_2.update();
}

function mouseClicked(){
  muCir.clicked();
  muCir_1.update();

  muCir2.clicked();
  muCir3.clicked();
}
