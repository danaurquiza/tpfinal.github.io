class Minijuego {

  constructor(aventuraEstado) {
    this.objCanasta= new Canasta(width/2, 550, canasta);
    this.crearObjFruta();

    this.imgMinijuego = fondoMinijuego;
    this.contador=0;
    this.tiempoInicial=millis();
    this.tiempoActual = millis () - this.tiempoInicial;
  }


  crearObjFruta() { //metodo
    this.objFruta= [];


    for (let i = 0; i < 3; i++) {//es un arreglo de 3 frutas hecho objeto y le pasa el valor en parentesis a cada valor x separado
      this.objFruta[i] = new Fruta (i*random(width));
    }
  }

  actualizar(distFrutaCanasta) {


    for (let i = 0; i < 3; i++) {
      this.objFruta[i].actualizar();
    }



    let distColision = 100;
    for ( let i = 0; i < this.objFruta.length; i++ ) {  //recorro cada posicion de la lista
      let distFrutaCanasta =
        //this.objFruta[i].posXfruta  >   this.objCanasta.posXC &&
        //this.objFruta[i].posXfruta  <   this.objCanasta.posXC+this.objCanasta.tamC &&
        //this.objFruta[i].posYfruta  >   this.objCanasta.posYC;


        //frutaX[i] > canastaX &&
        //frutaX[i] < canastaX+200 &&
        //frutaY    > 450

        dist ( this.objCanasta.posXC, this.objCanasta.posYC, this.objFruta[i].posXfruta, this.objFruta[i].posYfruta);

      if ( distFrutaCanasta < distColision && !this.objFruta[i].colisiono ) {

        this.contador= this.contador+1;
        this.objFruta[i].colisiono=true;
      }
      this.tiempoActual = millis () - this.tiempoInicial;
    }
  }
  dibujar() {


    image(this.imgMinijuego[0], 0, 0, 600, 600);

    for (let i = 0; i < 3; i++) {
      this.objFruta[i].dibujar();
      this.objFruta[i].actualizar();
    }

    this.objCanasta.dibujar();

    push();
    fill(0);
    textSize(30);
    stroke(255);
    strokeWeight(5);
    textAlign(CENTER);
    text( "Frutas: "+ this.contador, 70, 30 );
    text( "Tiempo: "+ nf(floor(this.tiempoActual/1000, 0)), 500, 30 );
    pop();

   
  }
  
  reiniciarVariables(){
    
    this.objCanasta= new Canasta(width/2, 550, canasta);
    this.crearObjFruta();

    this.imgMinijuego = fondoMinijuego;
    this.contador=0;
    this.tiempoInicial=millis();
    this.tiempoActual = millis () - this.tiempoInicial;
  }
  
  
  teclaPresionada(keyCode) {
    this.objCanasta.teclaPresionada(keyCode);
  }
}//cierra
