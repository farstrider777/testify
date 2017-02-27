function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
  if(this.name === 'normal'){
    this.degradationRate = -1;
    this.minQuality = 0;
    this.sellbyRate = -1;
  }
  if(this.name === 'Aged Brie'){
    this.degradationRate = +1;
    this.maxQuality = 50;
    this.sellbyRate = -1;
  }
  if(this.name === 'Sulfuras, Hand of Ragnaros'){
    this.degradationRate = 0;
    this.minQuality = 80;
    this.maxQuality = 80;
    this.sellbyRate = 0;
  }
  if(this.name === 'Backstage passes to a TAFKAL80ETC concert'){
    this.degradationRate = +1;
    this.expiredDegradationValue = 0;
    this.maxQuality = 50;
    this.sellbyRate = -1;
  }
  if(this.name === 'Conjured Mana Cake'){
    this.degradationRate = -2;
    this.minQuality = 0;
    this.sellbyRate = -1;
  }
}

GildedRose.prototype.tick = function () {

  this.quality += this.degradationRate;
  if(this.sellIn <= 0){
    this.quality += this.degradationRate;
  }
  if(this.quality > this.maxQuality){this.quality = this.maxQuality};
  if(this.quality < this.minQuality){this.quality = this.minQuality};
  this.sellIn += this.sellbyRate;


  /*
  if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
    if (this.quality > 0) {
      if (this.name != 'Sulfuras, Hand of Ragnaros') {
        if(this.name === 'Conjured Mana Cake'){
          this.quality -= 2;
        }else{
          this.quality = this.quality - 1;
        }
      }
    }
  } else {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.sellIn < 11) {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
        if (this.sellIn < 6) {
          if (this.quality < 50) {
            this.quality = this.quality + 1;
          }
        }
      }
    }
  }
  if (this.name != 'Sulfuras, Hand of Ragnaros') {
    this.sellIn = this.sellIn - 1;
  }
  if (this.sellIn < 0) {
    if (this.name != 'Aged Brie') {
      if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.quality > 0) {
          if (this.name != 'Sulfuras, Hand of Ragnaros') {
            if (this.name === 'Conjured Mana Cake'){
              this.quality -= 2;
            }else{
              this.quality = this.quality - 1;
            }
          }
        }
      } else {
        this.quality = this.quality - this.quality;
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }*/
};

export { GildedRose };
