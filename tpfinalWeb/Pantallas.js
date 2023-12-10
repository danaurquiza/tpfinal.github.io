class Pantallas {
  constructor() {
    this.botones = new Botones();
    this.estado = "menu";
    this.textoArray = texto;
    this.imgArray = fondo;
    this.imgMinijuego = fondoMinijuego;

    this.Minijuego = new Minijuego(this.estado);
  }

  dibujar() {
    if (this.estado=="menu") {
      //this.Minijuego.dibujar();


      image(this.imgArray[8], -200, 0, 800, 600);
      textFont(titulo);
      textSize(40);
      textAlign(CENTER);
      fill(0);
      text("La Ratita Presumida", 300, 100);

      textFont(regular);
      this.botones.botonCircular(300, 500, 75, color('rgb(0,250,0)'), color('rgb(0,200,0)') );
      text("Creditos", 300, 505);
      this.botones.botonCuadradoPuerta(350, 350+30, 284, 284+65, 30, 65);
      text("Inicio", 370, 272);
    }

    //CREDITOS
    else if (this.estado=="creditos") {
      image(this.imgArray[16], 0, 0, 600, 600);

      this.botones.botonCircular(70, 70, 70, color('rgb(0,250,0)'), color('rgb(0,200,0)') );
      text("Volver", 70, 75);

      this.cuadradoDeTexto(200, 250, 220, 150, 35, 210, 280, 190, 200);
    }

    //EMPIEZA HISTORIA, ETSTA BARRIENDO
    else if (this.estado=="P01") {
      image(this.imgArray[9], 0, 0, 600, 600);
      this.cuadradoDeTexto(15, 385, 230, 190, 0, 35, 410, 200, 200);
      this.botones.botonCircular(520, 530, 75, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 520, 535);
    }

    //ENCUENTRTA MONEDA
    else if (this.estado=="P02") {
      image(this.imgArray[17], 0, 0, 600, 600);
      this.cuadradoDeTexto( 350, 485, 230, 70, 1, 355, 515, 220, 200);
      this.botones.botonCircularTransparente(145, 505, 90);
    }

    //QUE PUEDE HACER CON LA MONEDA? COMPRAR CARAMELOS, COMPRAR MOÑO O REGALAR MONEDA
    else if (this.estado=="P03") {
      image(this.imgArray[10], 0, 0, 600, 600);
      this.botones.botonCircularTransparente(160, 135, 190);
      this.botones.botonCircularTransparente(320, 180, 140);
      this.botones.botonCircularTransparente(155, 320, 145);
    }

    //SI COMPRO LOS CARAMELOS - LE DUELE LA BOCA
    else if (this.estado=="P04") {
      image(this.imgArray[0], 0, 0, 600, 600);
      this.textoFlotando(2, 100, 265, 220, 200 );
      this.botones.botonCircular(500, 100, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      this.botones.botonCircular(100, 500, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Ir al\n dentista", 500, 95);
      text("No ir", 100, 505);
    }

    //SI COMPR0 EL MOÑO
    else if (this.estado=="P05") {
      image(this.imgArray[18], 0, 0, 600, 600);
      this.textoFlotando(6, 117, 250, 230, 200 );
      this.botones.botonCircular(340, 515, 80, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 340, 520);
    }

    //SI REGALA LA MONEDA
    else if (this.estado=="P06") {
      image(this.imgArray[1], 0, 0, 600, 600);
      this.botones.botonCircular(100, 70, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));

      this.textoFlotando(13, 230, 250, 250, 200);
      text("Seguir", 70, 75);
    }

    //NO VA AL DENTISTA-SE PONE MAL SU BOCA
    else if (this.estado=="P07") {
      image(this.imgArray[4], 0, 0, 600, 600);
      this.textoFlotando(4, 290, 190, 220, 200 );
      this.botones.botonCircular(100, 100, 100, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      this.botones.botonCircular(500, 500, 100, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Atenderse", 100, 105);
      text("No\n atenderse", 500, 495);
    }

    //VA AL DENTISTA-LE SACAN LAS MUELAS
    else if (this.estado=="P08") {
      image(this.imgArray[3], 0, 0, 600, 600);
      this.cuadradoDeTexto( 15, 410, 240, 160, 3, 25, 435, 220, 200);
      this.botones.botonCircular(500, 540, 90, color('rgb(250,93,135)'), color('rgb(250,40,96)'));
      text("FIN", 500, 545);
    }

    //SE MUERE
    else if (this.estado=="P09") {
      image(this.imgArray[5], 0, 0, 600, 600);
      this.cuadradoDeTexto(180, 20, 240, 70, 5, 200, 50, 200, 100);
      this.botones.botonCircular(430, 520, 90, color('rgb(250,93,135)'), color('rgb(250,40,96)'));
      text("FIN", 430, 525);
    }

    //LLEGA EL RATON
    else if (this.estado=="P10") {
      image(this.imgArray[14], 0, 0, 600, 600);
      this.cuadradoDeTexto( 150, 418, 280, 165, 7, 170, 445, 250, 200 );
      this.botones.botonCircular(520, 530, 80, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 520, 535);
    }

    //LLEGA GATO
    else if (this.estado=="P11") {
      image(this.imgArray[12], 0, 0, 600, 600);
      this.cuadradoDeTexto(300, 30, 280, 100, 37, 305, 60, 270, 100 );
      this.cuadradoDeTexto(150, 458, 280, 125, 8, 170, 488, 250, 200 );
      this.botones.botonCircular (70, 70, 80, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 70, 75);
    }

    //GATO ATACA
    else if (this.estado=="P12") {
      image(this.imgArray[6], 0, 0, 600, 600);
      this.cuadradoDeTexto(150, 438, 280, 145, 9, 170, 465, 250, 200 );
      this.botones.botonCircular (490, 70, 80, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 490, 75);
    }

    //RATON ESCUCHA GRITOS
    else if (this.estado=="P13") {
      image(this.imgArray[15], 0, 0, 600, 600);
      this.cuadradoDeTexto(15, 405, 230, 170, 10, 30, 435, 200, 200);
      this.botones.botonCircular (470, 475, 80, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 470, 480);
    }

    //RATON LA RESCATA
    else if (this.estado=="P14") {
      image(this.imgArray[14], 0, 0, 600, 600);
      this.cuadradoDeTexto(15, 470, 270, 115, 11, 25, 497, 250, 100 );
      this.botones.botonCircular (490, 70, 80,color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 490, 75);
    }

    //RATITA SE CASA FIN
    else if (this.estado=="P15") {
      image(this.imgArray[11], 0, 0, 600, 600);
      this.cuadradoDeTexto(225, 27, 160, 60, 12, 205, 50, 200, 50 );
      this.botones.botonCircular(310, 530, 90, color('rgb(250,93,135)'), color('rgb(250,40,96)'));
      text("FIN", 310, 535);
    }

    //RATITA SALE EN LAS NOTICIAS
    else if (this.estado=="P16") {
      //HAY QUE CAMBIAR LA IMAGEN
      image(this.imgArray[19], 0, 0, 600, 600);
      this.textoFlotando(14, 310, 180, 260, 160);
      this.botones.botonCircular(300, 500, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      this.botones.botonCircular(100, 500, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Plot Twist\n  Malo", 100, 500);
      text("Plot Twist\n  Bueno", 300, 500);
    }

    //RATITA DESCUBRE Q SON RE TURBIOS
    else if (this.estado=="P17") {
      image(this.imgArray[7], 0, 0, 600, 600);
      this.cuadradoDeTexto(350, 23, 215, 120, 15, 360, 50, 200, 150 );
      this.botones.botonCircular(225, 530, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 225, 535);
    }

    //RATITA DESCUBRE Q SON RE HUMILDES
    else if (this.estado=="P18") {
      image(this.imgArray[20], 0, 0, 600, 600);
      this.cuadradoDeTexto(300, 23, 255, 165, 18, 308, 50, 240, 180);
      this.botones.botonCircular(225, 530, 90, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 225, 530);
    }

    //RATITA REFLECCIONA
    else if (this.estado=="P19") {
      image(this.imgArray[9], 0, 0, 600, 600);
      this.cuadradoDeTexto(85, 450, 430, 140, 16, 95, 477, 410, 200 );
      this.botones.botonCircular(520, 75, 100, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Sigue", 520, 83);
      this.botones.botonCircular(70, 75, 100, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Deprimirse", 71, 83);
    }

    //RATITA SE DEPRIME
    else if (this.estado=="P20") {
      image(this.imgArray[16], 0, 0, 600, 600);
      this.cuadradoDeTexto(85, 460, 430, 120, 17, 98, 490, 400, 200);
      this.botones.botonCircular(305, 400, 90, color('rgb(250,93,135)'), color('rgb(250,40,96)'));
      text("FIN", 305, 408);
    }

    //RATITA SIGUE ADELANTE
    else if (this.estado=="P21") {
      image(this.imgArray[14], 0, 0, 600, 600);
      this.cuadradoDeTexto(15, 440, 280, 150, 19, 30, 470, 250, 200);
      this.botones.botonCircular (500, 500, 80, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Seguir", 500, 505);
      //falta texto cuadrado boton
    }


    //  EMPIEZA EL MINIJUEGOOOOOO instrucciones
    else if (this.estado=="P22") {
      image(this.imgMinijuego[1], 0, 0, 600, 600);
      this.cuadradoDeTexto(width/5, height/3+30, 350, 150, 20, width/4, height/2-25, 300, 200);
      this.botones.botonCircular(width/2, height-100, 200/2, color('rgb(232,129,203)'), color('rgb(232,164,213)'));
      text("Jugar", width/2, height-95);
      this.Minijuego.reiniciarVariables();
    }

    //MINIJUEGO
    else if (this.estado=="P23") {

      this.Minijuego.dibujar();
      this.Minijuego.actualizar();

      if ( this.Minijuego.tiempoActual >= 20*1000) { //pierde a los 20 segundos.
        this.estado = "P11";
      }
      if ( this.Minijuego.contador >= 20) { //gana
        this.estado = "P24";
      }
    }

    //GANASTE JUEGO
    else if (this.estado=="P24") {
      image(this.imgArray[21], 0, 0, 600, 600);
      this.cuadradoDeTexto(200, 27, 210, 60, 36, 205, 50, 200, 50 );
      this.botones.botonCircular(310, 530, 90, color('rgb(250,93,135)'), color('rgb(250,40,96)'));
      text("FIN", 310, 535);
    }


    //  cuadradoDeTexto(x1, y1, ancho, alto, i, x, y, xT, yT) {
    //  fill(255, 201, 246, 120);
    //  stroke(4);
    //  rect(x1, y1, ancho, alto);
    //  textFont(regular);
    //  textAlign(CENTER);
    //  noStroke();
    //  fill(0);
    //  textSize(20);
    //  text(this.textoArray[i], x, y, xT, yT);
    //}
  }

  botonPresionado(mousePressed) {

    //SIEMEPRE PONER LOS PARAMETROS!!!!!!!!!!!!!!!!!

    //PASA DE MENU A CREDITOS
    if (this.estado == "menu" && this.botones.estoyDentrodeBotonCircular (300, 500, 75/2) ) {
      this.estado = "creditos"; //CREDITOS
    }
    if (this.estado == "creditos" && this.botones.estoyDentrodeBotonCircular (70, 70, 70/2) ) {
      this.estado = "menu"; //CREDITOS
    }

    //PASA DE MENU A BARRER
    if (this.estado == "menu" && this.botones.estoyDentrodeBotonCuadrado(350, 350+30, 284, 284+65) ) {
      this.estado = "P01"; //
    }

    //PASA DE BARRER A ENCONTRAR MONEDA
    if (this.estado == "P01" && this.botones.estoyDentrodeBotonCircular (520, 530, 75/2) ) {
      this.estado = "P02"; //
    }

    //PASA DE ENCONTRAR MONEDA A PENSAR QUE PUEDE HACER CON LA MONEDA,
    if (this.estado == "P02" && this.botones.estoyDentrodeBotonCircular (145, 505, 90/2) ) {
      this.estado = "P03"; //
    }

    //PASA DE PENSAR A ELEGIR CARAMELOS
    if (this.estado == "P03" && this.botones.estoyDentrodeBotonCircular ( 160, 135, 190/2) ) {
      this.estado = "P04"; //
    }

    //PASA DE PENSAR A ELEGIR REGALAR LA MONEDA
    if (this.estado == "P03" && this.botones.estoyDentrodeBotonCircular ( 155, 320, 145/2) ) {
      this.estado = "P06"; //
    }

    //PASA DE PENSAR A ELEGIR EL MONO
    if (this.estado == "P03" && this.botones.estoyDentrodeBotonCircular ( 320, 180, 140/2) ) {
      this.estado = "P05"; //
    }

    //
    if (this.estado == "P05" && this.botones.estoyDentrodeBotonCircular(340, 515, 80/2) ) {
      this.estado = "P10"; //
    }

    //PASA DE QUE LE DUELE LA BOCA A QUE LE DUELA LA BOCA
    if (this.estado == "P04" && this.botones.estoyDentrodeBotonCircular (100, 500, 90/2) ) {
      this. estado = "P07";
    }

    //PASA DE QUE LE DUELE LA BOCA A ATENDERSE EN EL DENTISTA
    if (this.estado == "P04" && this.botones.estoyDentrodeBotonCircular (500, 90, 90/2) ) {
      this. estado = "P08";
    }

    //pasa de ayudar a ratones a aparecer en el noticiero
    else if (this.estado == "P06" && this.botones.estoyDentrodeBotonCircular ( 100, 70, 100/2 ) ) {
      this.estado = "P16";
    }

    //PASA DE COMPRAR CAARAMELO A QUE LE DUELE LA BOCA
    if (this.estado == "P07" && this.botones.estoyDentrodeBotonCircular (500, 500, 90/2) ) {
      this. estado = "P09";
    }

    //PASA DE COMPRAR CAARAMELO A QUE LE DUELE LA BOCA
    if (this.estado == "P07" && this.botones.estoyDentrodeBotonCircular (100, 100, 90/2) ) {
      this. estado = "P08";
    }

    //PASA DE SACARSE LAS MUELAS AL MENU
    if (this.estado == "P08" && this.botones.estoyDentrodeBotonCircular(500, 540, 90/2) ) {
      this.estado = "menu"; //
    }

    //PASA DE MORIR A MENU
    if (this.estado == "P09" && this.botones.estoyDentrodeBotonCircular(430, 520, 90/2) ) {
      this.estado = "menu"; //
    }


    //PASA DE MORIR A MENU
    if (this.estado == "P10" && this.botones.estoyDentrodeBotonCircular(520, 530, 80/2) ) {
      this.estado = "P22"; //
    }

    //PASA DE LLEGAR EL GATO A ATACAR
    if (this.estado == "P11" && this.botones.estoyDentrodeBotonCircular(70, 70, 80/2) ) {
      this.estado = "P12"; //
    }

    //PASA DE EL GATO ATACARLA A EL RATON ESCUCHAR LOS GRITOS
    if (this.estado == "P12" && this.botones.estoyDentrodeBotonCircular(490, 70, 80/2) ) {
      this.estado = "P13"; //
    }

    //PASA DE EL RATON ESCUCHAR LOS GRITOS A RESCATAR A RATITA
    if (this.estado == "P13" && this.botones.estoyDentrodeBotonCircular(470, 475, 80/2) ) {
      this.estado = "P14"; //
    }

    //PASA DE RESCATAR GATITA A CASARSE
    if (this.estado == "P14" && this.botones.estoyDentrodeBotonCircular(490, 70, 80/2) ) {
      this.estado = "P15"; //
    }

    if (this.estado == "P15" && this.botones.estoyDentrodeBotonCircular (310, 530, 90/2) ) {
      this. estado = "menu";
    }

    if (this.estado == "P16" && this.botones.estoyDentrodeBotonCircular (100, 500, 90/2) ) {
      this.estado = "P17";
    }

    if (this.estado == "P16" && this.botones.estoyDentrodeBotonCircular (300, 500, 90/2) ) {
      this.estado = "P18";
    }

    if (this.estado == "P18" && this.botones.estoyDentrodeBotonCircular (225, 530, 90/2) ) {
      this.estado = "P19";
    }

    if (this.estado == "P17" && this.botones.estoyDentrodeBotonCircular (225, 530, 90/2) ) {
      this.estado = "P19";
    }

    if (this.estado == "P19" && this.botones.estoyDentrodeBotonCircular ( 520, 75, 100/2) ) {
      this.estado = "P21";
    }

    if (this.estado == "P19" && this.botones.estoyDentrodeBotonCircular ( 90, 75, 100/2) ) {
      this.estado = "P20";
    }

    if (this.estado == "P21" && this.botones.estoyDentrodeBotonCircular(500, 500, 80/2) ) {
      this.estado = "P15"; //
    }

    if (this.estado == "P20" && this.botones.estoyDentrodeBotonCircular ( 305, 400, 90/2) ) {
      this.estado = "menu";
    }
    if (this.estado == "P22" && this.botones.estoyDentrodeBotonCircular ( width/2, height-100, 100/2) ) {
      this.estado = "P23";
    }
    if (this.estado == "P24" && this.botones.estoyDentrodeBotonCircular ( 310, 530, 90/2) ) {
      this.estado = "menu";
    }

    console.log(this.estado);
  }




  cuadradoDeTexto(x1, y1, ancho, alto, i, x, y, xT, yT) {
    fill(255, 201, 246, 170);
    stroke(4);
    rect(x1, y1, ancho, alto);
    textFont(regular);
    textAlign(CENTER);
    noStroke();
    fill(0);
    textSize(20);
    text(this.textoArray[i], x, y, xT, yT);
  }



  textoFlotando( i, x, y, xT, yT) {
    textFont(regular)
      textAlign(LEFT);
    fill(0);
    textSize(20);
    text(this.textoArray[i], x, y, xT, yT);
  }
}
