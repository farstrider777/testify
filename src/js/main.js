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
    this.degradationRate = 1;
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
    this.degradationRate = 1;
    this.degradationRateMedium = 2;
    this.degradationRateClose = 3;
    this.maxQuality = 50;
    this.sellbyRate = -1;
  }
  if(this.name === 'Conjured Mana Cake'){
    this.degradationRate = -2;
    this.minQuality = 0;
    this.sellbyRate = -1;
  }
}

GildedRose.prototype.degrade = function (name){
  if(name === 'normal'){
    this.quality -= 1;
    if(this.sellIn <= 0){
      this.quality -= 1;
    }
  }
  if(name === 'Aged Brie'){
    this.quality += 1;
    if(this.sellIn <= 0){
      this.quality += 1;
    }
  }
  if(name === 'Backstage passes to a TAFKAL80ETC concert'){
    if(this.sellIn > 10){this.quality += 1;}
    else if(this.sellIn > 5){this.quality += 2;}
    else if(this.sellIn > 0){this.quality += 3;}
    else{this.quality = 0;}
  }


};

GildedRose.prototype.decreaseSellIn = function () {
  this.sellIn += this.sellbyRate;
};

GildedRose.prototype.tick = function () {
  this.degrade(this.name);
  if(this.quality > this.maxQuality){this.quality = this.maxQuality;}
  if(this.quality < this.minQuality){this.quality = this.minQuality;}
  this.decreaseSellIn();
};

export { GildedRose };
