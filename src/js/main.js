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
    degradationRate: -2,
    minQuality: 0,
    sellbyRate: -1,
  }
};

function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.tick = function () {
  var rules = ITEM_TYPES[this.name]; // ITEM_TYPES.cookies
  if(this.name !== 'Backstage passes to a TAFKAL80ETC concert'){
    this.quality += rules.degradationRate;
    if(this.sellIn <= 0){this.quality += rules.degradationRate;}
  }else {
    if(this.sellIn > 10){this.quality += rules.degradationRate;}
    else if(this.sellIn >5){this.quality += rules.degradationRateMedium;}
    else if(this.sellIn >0){this.quality += rules.degradationRateClose;}
    else{this.quality = 0;}
  }
  if (this.quality < rules.minQuality) {this.quality = rules.minQuality;}
  if (this.quality > rules.maxQuality) {this.quality = rules.maxQuality;}
  this.sellIn += rules.sellbyRate;
};

export { GildedRose };
