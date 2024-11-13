class Lettuce {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
    textSize(r);
  }
  
  move() {
    if (this.x - t <= 50) {
      this.x = this.x * 4;
    }
    text("🥬", this.x - t, this.y);
  }
}