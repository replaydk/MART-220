class ParticleClass {

    constructor(x,y,cull) {
      this.x = x;
      this.y = y;
      this.cull = cull;
     
    }
  
    finished() {
      return this.alpha < 0;
    }
  
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha -= 5;
    }
  
    show() {
      noStroke();
      //stroke(255);
      fill(255, this.alpha);
      ellipse(this.x, this.y, 16);
    }
  
  
  }