function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
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
  if(name === 'Conjured Mana Cake'){
    this.quality -= 2;
    if(this.sellIn <= 0){
      this.quality -= 2;
    }
  }
};

GildedRose.prototype.sellDegrade = function (){
  if(this.name !== 'Sulfuras, Hand of Ragnaros'){this.sellIn--;}
};

GildedRose.prototype.qualityCheck = function (){
  if(this.name === 'normal'){if(this.quality < 0){this.quality = 0}}
  if(this.name === 'Aged Brie'){if(this.quality > 50){this.quality = 50}}
  if(this.name === 'Backstage passes to a TAFKAL80ETC concert'){if(this.quality > 50){this.quality = 50}}
  if(this.name === 'Conjured Mana Cake'){if(this.quality < 0){this.quality = 0}}
};

GildedRose.prototype.tick = function () {
  this.degrade(this.name);
  this.qualityCheck();
  this.sellDegrade();
};

export { GildedRose };
