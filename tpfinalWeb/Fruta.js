class Fruta {

  constructor( posX) {

    this.posXfruta= posX;
    this.posYfruta =int (random (-100, -50) ); //caen todas al mismo tiempo
    this.tam=90;
    this.vel=random(2, 3);
    this.colisiono = false;
  }

  actualizar() {
    this.posYfruta = this.posYfruta + this.vel;
    //reciclar los obstaculos
    if ( this.posYfruta >= height+this.tam ) {
      // reinicio la posicion en y
      this.posYfruta = int (random (-100, -50) );
      this.vel=random(2, 3);
      moverFruta();
    }
  }

  dibujar() {
    push();
    imageMode(CENTER);
    image (plata, this.posXfruta, this.posYfruta, this.tam, this.tam);
    pop();

    this.moverFruta();
    // this.actualizar();
  }

  moverFruta() {

    //this.posYfruta+=5; //cae fruta

    if ( this.posYfruta > height ) {

      this.posYfruta = int (random (-100, -50) ); //tocan base y vuelven todas xq tienen misma y

      //le da una posX random a cada una de las X
      this.posXfruta = random(width);
      this.colisiono = false;
    }
  }

  reiniciar() {
    this.posXfruta= posX;
    this.posYfruta =int (random (-100, -50) ); //caen todas al mismo tiempo
    this.tam=50;
    this.vel=random(2, 3);
    this.colisiono = false;
  }
}
