class Botones {

  constructor(posX, posY, r, x, x1, y, y1, ancho, alto, col1, col2) {
    this.posX = posX;
    this.posY = posY;
    this.r = r;
    this.x = x;
    this.x1 = x1;
    this.y = y;
    this.y1 = y1;
    this.ancho = ancho;
    this.alto = alto;
  }

  dibujar() {
  }

  botonCircular(posX, posY, r, col1, col2) {


    //BOTON CREDITO REDONDO
    if (this.estoyDentrodeBotonCircular(posX, posY, r/2) ) {
      fill(col1);
    } else {
      fill(col2); //verde
    }

    noStroke();
    circle(posX, posY, r);
    this.textoBotones();
  }

 

  botonCuadradoPuerta(x, x1, y, y1, ancho, alto ) {
    //BOTON AVANZAR PUERTA CUADRADO
    if (this.estoyDentrodeBotonCuadrado( x, x1, y, y1 )) {

      fill( 255, 0, 0, 150 );
    } else {
      noStroke();
      noFill();
    }

    rect(x, y, ancho, alto);
    this.textoBotones();
  }

  botonCircularTransparente(posX, posY, r) {


    //BOTON CREDITO REDONDO
    if (this.estoyDentrodeBotonCircular(posX, posY, r/2) ) {
      fill(227, 255, 100, 100);
    } else {
      noFill(); //verde
    }

    noStroke();
    circle(posX, posY, r);
    this.textoBotones();
  }

  textoBotones() {
    fill(0);
    textSize(17);
    textAlign(CENTER);
  }

  estoyDentrodeBotonCircular( posX, posY, r ) {
    return dist(mouseX, mouseY, posX, posY) <= r;
  }

  estoyDentrodeBotonCuadrado(x, x1, y, y1) { //con parametros con return
    return mouseX> x && mouseX< x1 && mouseY> y && mouseY< y1;
  }
}
