function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
  if(name === 'normal'){
    this.tick = function(){
      this.sellin -= 1;
      this.quality -= 1;
      if(this.sellin === -1){
        this.quality -= 1;
      }
  }
}

GildedRose.prototype.tick = function () {};

GildedRose.prototype.tick = function () {
// all items sellin dates will be deincremented by 1
  this.sellin -= 1;

  if(this.name === 'normal'){

    this.quality -= 1;
    if(this.sellin === -1)
      this.quality -= 1;
  }
};

export { GildedRose };
