class MuCirculo {

  constructor(n,rad,ctx,freq){
    this.doPlay;
    this.posA = [];
    this.phA = [];
    this.phA_p = [];
    this.t1 = 0.1; // attack time in seconds
    this.l1 = 0.5; // attack level 0.0 to 1.0
    this.t2 = 0.8; // decay time in seconds
    this.l2 = 0.4; // decay level  0.0 to 1.0
    this.n = n;
    this.r = 3;
    this.g = 123;
    this.b = 12;
    this.delay = new p5.Delay();

    for (let i = 0; i < n; i++){
      this.posA[i] = createVector(0,0);
    }

    this.t = millis()/1000;
    this.ctx = ctx;
    this.ct = createVector(ctx,height/2);
    this.rad = rad;
    this.freq = freq;

    this.carr = new p5.Oscillator('sine');
    this.modu = new p5.Oscillator('sine');
    this.env = new p5.Envelope(this.t1, this.l1, this.t2, this.l2);
  }
  //------------------------------------------------

  update(){
    this.t = millis()/1000;
    // background(0);
    for (let i = 0 ; i < this.n; i++){

      this.phA_p[i] = this.phA[i];
      this.phA[i] = (TWO_PI*this.freq*this.t+((TWO_PI/this.n)*i));

      this.posA[i].x = this.ct.x + this.rad*cos(this.phA[i]);
      this.posA[i].y = this.ct.y + this.rad*sin(this.phA[i]);

      stroke(255);
      fill(this.r,this.g,this.b);
      ellipse(this.posA[i].x,this.posA[i].y,15);
      line(this.ct.x,this.ct.y,this.posA[i].x,this.posA[i].y);
      stroke(200);
      line(0,height/2,width,height/2);

      this.phA[i] = this.phA[i]%TWO_PI;

      if(i > 0){
        stroke(200);
        line(this.posA[i].x,this.posA[i].y,this.posA[i-1].x,this.posA[i-1].y);
      }

      if (this.phA_p[i] > this.phA[i] ){
        this.r = random(0,255);
        this.g = random(0,255);
        this.b = random(0,255);

        this.modu.freq(110);
        this.modu.amp(50); //deltaF

        this.carr.amp(0.5);
        this.modu.disconnect();
        this.carr.freq((200+this.n)*(2**((i+1)/this.n)));
        this.carr.freq(this.modu);
        this.modu.start();
        this.carr.start();
        this.env.play(this.modu);
        this.env.play(this.carr);
        this.delay.process(this.carr, 0.12, .3, 2300);

      } else {
        this.modu.stop(0.5);
        this.carr.stop(0.5);
      }

    }

    stroke(255);
    line(this.posA[0].x,this.posA[0].y,this.posA[this.n-1].x,this.posA[this.n-1].y);

  }

  clicked(){
    this.doPlay =! this.doPlay;
    if (this.doPlay){
      userStartAudio();
    } else{
      stop();
    }
  }
  }
