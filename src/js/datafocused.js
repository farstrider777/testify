var ITEM_TYPES = {
  'normal': {
    degradationRate: -1,
    minQuality: 0,
    sellbyRate: -1,
  },
  'Aged Brie': {
    degradationRate: 1,
    maxQuality: 50,
    sellbyRate: -1,
  },
  'Sulfuras, Hand of Ragnaros': {
    degradationRate: 0,
    minQuality: 80,
    maxQuality: 80,
    sellbyRate: 0,
  },
  'Backstage passes to a TAFKAL80ETC concert': {
    degradationRate: 1,
    degradationRateMedium: 2,
    degradationRateClose: 3,
    maxQuality: 50,
    sellbyRate: -1,
  },
  'Conjured Mana Cake': {

  }
};

//start trying to get it in the datatype up top then

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

/*
GildedRose.prototype.tick = function () {
  var rules = ITEM_TYPES[this.name]; // ITEM_TYPES.cookies
  this.quality += rules.degradationRate;
  if (this.quality > rules.minQuality) {}
}*/

GildedRose.prototype.tick = function () {
  if(this.name !== 'Backstage passes to a TAFKAL80ETC concert'){
    this.quality += this.degradationRate;
    if(this.sellIn <= 0){
      this.quality += this.degradationRate;
    }
  }else{
    if(this.sellIn > 10){this.quality += this.degradationRate;}
    else if(this.sellIn > 5){this.quality += this.degradationRateMedium;}
    else if(this.sellIn > 0){this.quality += this.degradationRateClose;}
    else{this.quality = 0;}
  }
  if(this.quality > this.maxQuality){this.quality = this.maxQuality;}
  if(this.quality < this.minQuality){this.quality = this.minQuality;}
  this.sellIn += this.sellbyRate;
};

export { GildedRose };
