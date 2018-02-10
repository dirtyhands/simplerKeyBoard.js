//configured full octave (3rd)
var freqA = 110;//a
var freqS = 123.47;//b
var freqD = 130.8;//c
var freqF = 146.83;//d
var freqG = 164.8;//e
var freqH = 174.6;//f
var freqJ = 196;//g
var freqK = 220;//a

var oscA, oscS, oscD, oscF, oscG, oscH, oscJ, oscK;

var playing = false;

function setup() {
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
  
	oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();
  
  oscJ = new p5.Oscillator();
  oscJ.setType('triangle');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();
  
  oscK = new p5.Oscillator();
  oscK.setType('triangle');
  oscK.freq(freqK);
  oscK.amp(0);
  oscK.start();
}

function draw() {
  background(backgroundColor)
  text('click here,\nthen press a\n key to play', width / 2, 40);
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  } else if (key == 'G') {
    osc = oscG;
  } else if (key == 'H') {
    osc = oscH;
  } else if (key == 'J') {
    osc = oscJ;
  } else if (key == 'K') {
    osc = oscK;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
    backgroundColor = color(0, 255, 255);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
  } else if (key == 'S') {
    osc = oscS;
  } else if (key == 'D') {
    osc = oscD;
  } else if (key == 'F') {
    osc = oscF;
  } else if (key == 'G') {
    osc = oscG;
  } else if (key == 'H') {
    osc = oscH;
  } else if (key == 'J') {
    osc = oscJ;
  } else if (key == 'Ka') {
    osc = oscK;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
    backgroundColor = color(255, 0, 255);
  }
}
