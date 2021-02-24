/*
Format:
  {
    name
    image
    url
    ucs: Boolean // TRUE if at 'USA check shop'
  }
 */

import { stdArrShuffle, stdRandomArrInDiap } from '../../utils/stdutils';

const shopsData = [
  {
    name: '6PM.com',
    image: 'shop-logo-6pm.png',
    url: 'https://www.6pm.com/',
    ucs: true
  }, {
    name: 'Calvin Klein',
    image: 'shop-logo-calvin-klein.png',
    url: 'https://www.calvinklein.co.uk',
    ucs: true
  },
  {
    name: 'Coach',
    image: 'shop-logo-coach.png',
    url: 'https://www.coachoutlet.com/',
    ucs: true
  },
  {
    name: 'Legerfeld',
    image: 'shop-logo-karl-legerfeld.png',
    url: 'https://www.karllagerfeldparis.com/'
  },
  {
    name: 'Lacoste',
    image: 'shop-logo-lacoste.png',
    url: 'https://www.lacoste.com/us/'
  },
  {
    name: 'Ralph Lauren',
    image: 'shop-logo-ralph-lauren.jpg',
    url: 'https://www.ralphlauren.com/',
    ucs: true
  },
  {
    name: 'Timberland',
    image: 'shop-logo-timberland.png',
    url: 'https://timberland.ru/'
  },
  {
    name: 'SleekHair',
    image: 'shop-logo-sleekhair.png',
    url: 'https://www.sleekshop.com/'
  },
  {
    name: 'Abercrombie & Fetch',
    image: 'shop-logo-abercrombie-fech.png',
    url: 'https://www.abercrombie.com/'
  },
  {
    name: 'Amazone',
    image: 'shop-logo-amazon.png',
    url: 'https://www.amazon.com/'
  },
  {
    name: 'Armani Exchange',
    image: 'shop-logo-armani-exchange.jpg',
    url: 'https://www.armaniexchange.com/ru',
    ucs: true
  },
  {
    name: 'Bath Body Works',
    image: 'shop-logo-bath-body-works.png',
    url: 'https://www.bathandbodyworks.com/'
  },
  {
    name: 'Bebe',
    image: 'shop-logo-bebe.jpg',
    url: 'https://www.bebe.com/'
  },
  {
    name: 'Beach Bunny',
    image: 'shop-logo-beach-bunny.jpg',
    url: 'https://www.beachbunnyswimwear.com/'
  },
  {
    name: 'Donna Karan',
    image: 'shop-logo-dkny.jpg',
    url: 'https://www.donnakaran.com',
    ucs: true
  },
  {
    name: 'J.CREW',
    image: 'shop-logo-jcrew.jpg',
    url: 'https://www.jcrew.com/ru/'
  },
  {
    name: 'TRIANGL',
    image: 'shop-logo-triangl.jpg',
    url: 'https://triangl.com/'
  },
  {
    name: 'Saks Off 5th',
    image: 'shop-logo-saks-off-5th.png',
    url: 'https://www.saksoff5th.com/content/privacy-policy',
    ucs: true
  },
  {
    name: 'Sephora',
    image: 'shop-logo-sephora.jpg',
    url: 'https://www.sephora.com/'
  },
  {
    name: 'Carters',
    image: 'shop-logo-carters.png',
    url: 'https://www.carters.com/',
    ucs: true
  },
  {
    name: 'COS',
    image: 'shop-logo-cos.png',
    url: 'https://www.cosstores.com/'
  },
  {
    name: 'Crazy8',
    image: 'shop-logo-crazy8.png',
    url: 'https://crazy8.com'
  },
  {
    name: 'Disney Store',
    image: 'shop-logo-disney-store.png',
    url: 'https://www.shopdisney.com/',
    ucs: true
  },
  {
    name: 'A Pea In The Pod',
    image: 'shop-logo-pea-in-the-pod.jpg',
    url: 'https://www.apeainthepod.com/'
  },
  {
    name: 'Motherhood',
    image: 'shop-logo-motherhood.png',
    url: 'https://www.motherhood.com/'
  },
  {
    name: 'Foot Locker',
    image: 'shop-logo-foot-locker.png',
    url: 'https://www.footlocker.com'
  },
  {
    name: 'Forever 21',
    image: 'shop-logo-forever-21.png',
    url: 'https://www.forever21.com/'
  },
  {
    name: 'GAP',
    image: 'shop-logo-gap.jpg',
    url: 'https://www.gap.com/',
    ucs: true
  },
  {
    name: 'GAP Factory',
    image: 'shop-logo-gap-factory.png',
    url: 'https://www.gapfactory.com/',
    ucs: true
  },
  {
    name: 'Guess',
    image: 'shop-logo-guess.jpg',
    url: 'https://www.guess.com',
    ucs: true
  },
  {
    name: 'Guess Marciano',
    image: 'shop-logo-guess-marciano.png',
    url: 'https://guessbymarciano.com/',
    ucs: true
  },
  {
    name: 'Gymboree',
    image: 'shop-logo-gymboree.png',
    url: 'http://www.gymboree.com/'
  },
  {
    name: 'Hollister',
    image: 'shop-logo-hollister.jpg',
    url: 'https://www.hollisterco.com/'
  },
  {
    name: 'Ulta Beauty',
    image: 'shop-logo-ulta.jpg',
    url: 'http://www.ulta.com/'
  },
  {
    name: 'Nordstrom',
    image: 'shop-logo-nordstrom.jpg',
    url: 'https://www.nordstrom.com/',
    ucs: true
  },
  {
    name: 'Levis',
    image: 'shop-logo-levis.png',
    url: 'https://www.levi.com/',
    ucs: true
  },
  {
    name: 'Hot Miami Styles',
    image: 'shop-logo-hot-miami-styles.jpg',
    url: 'https://www.hotmiamistyles.com/'
  },
  {
    name: 'Too Faced',
    image: 'shop-logo-too-faced.png',
    url: 'https://www.toofaced.com/'
  },
  {
    name: 'Blanknyc',
    image: 'shop-logo-blanknyc.jpg',
    url: 'https://www.blanknyc.com/'
  },
  {
    name: 'MAC',
    image: 'shop-logo-mac.png',
    url: 'https://www.maccosmetics.com/'
  },
  {
    name: 'Macys',
    image: 'shop-logo-macys.jpg',
    url: 'https://www.macys.com',
    ucs: true
  },
  {
    name: 'Janie and Jack',
    image: 'shop-logo-janie-and-jack.jpg',
    url: ''
  },
  {
    name: 'Michael Kors',
    image: 'shop-logo-michael-kors.png',
    url: 'https://www.michaelkors.global/',
    ucs: true
  },
  {
    name: 'Missguided',
    image: 'shop-logo-missguided.jpg',
    url: 'https://www.missguidedus.com/'
  },
  {
    name: 'New Balance',
    image: 'shop-logo-new-balance.png',
    url: 'https://www.newbalance.com',
    ucs: true
  },
  {
    name: 'Joe`s New Balance',
    image: 'shop-logo-joe-new-balance.png',
    url: 'https://www.joesnewbalanceoutlet.com/',
    ucs: true
  },
  {
    name: 'Osh Kosh',
    image: 'shop-logo-osh-kosh.jpg',
    url: 'https://www.oshkosh.com/'
  },
  {
    name: 'ONETEASPOON',
    image: 'shop-logo-one-teaspoon.png',
    url: 'https://www.oneteaspoon.com/'
  },
  {
    name: 'See Kai Run',
    image: 'shop-logo-see-kai-run.png',
    url: 'https://seekairun.com/'
  },
  {
    name: 'Neiman Marcus Lastcall',
    image: 'shop-logo-neiman-marcus-lastcall.png',
    url: 'https://www.lastcall.com/'
  },
  {
    name: 'Steve Madden',
    image: 'shop-logo-stevemadden.png',
    url: 'https://www.stevemadden.com/',
    ucs: true
  },
  {
    name: 'Dillards',
    image: 'shop-logo-dillards.png',
    url: 'https://www.dillards.com/'
  },
  {
    name: 'The Childrens Place',
    image: 'shop-logo-the-childrens-place.png',
    url: 'https://www.childrensplace.com/',
    ucs: true
  },
  {
    name: 'Tiffany & Co',
    image: 'shop-logo-tifany-co.png',
    url: 'https://www.tiffany.com/'
  },
  {
    name: 'Toysrus',
    image: 'shop-logo-toysrus.png',
    url: 'https://www.toysrus.com/'
  },
  {
    name: 'UGG',
    image: 'shop-logo-ugg.png',
    url: 'https://www.ugg.com/',
    ucs: true
  },
  {
    name: 'Victoria`s Secret',
    image: 'shop-logo-victorias-secret.png',
    url: 'https://www.victoriassecret.com/',
    ucs: true
  },
  {
    name: 'Zappos',
    image: 'shop-logo-zappos.png',
    url: 'https://www.zappos.com/'
  },
  {
    name: 'U.S. POLO ASSN',
    image: 'shop-logo-us-polo-assn.png',
    url: 'https://uspoloassn.com/',
    ucs: true
  },
  {
    name: 'Kate Spade',
    image: 'shop-logo-kate-spade.png',
    url: 'https://www.katespade.com/',
    ucs: true
  },
  {
    name: 'Tommy Hilfiger',
    image: 'shop-logo-tommy-hilfiger.png',
    url: 'https://usa.tommy.com/en/',
    ucs: true
  },
];

function mtShops(mode = true) {
  const nx = shopsData.filter(o => !!o.ucs)
  if (mode) {
    // --- // temp
    const ret = nx;
    nx.forEach(el => ret.push(el))
    nx.forEach(el => ret.push(el))
    nx.forEach(el => ret.push(el))
    nx.forEach(el => ret.push(el))
    nx.forEach(el => ret.push(el))
  }
  // ---
  return nx;
}

export function shopsAllCount(mode = true) {
  return mtShops(mode).length;
}

export function shopsGet(isRandom, limit = 0, mode = true) {
  const shopsFiltered = mtShops(mode);
  let ret = [];
  if (isRandom) {
    ret = stdArrShuffle(shopsFiltered)
  } else {
    ret = shopsFiltered
  }
  if (limit > 0) {
    ret.slice(0, limit)
  }
  return ret;
}

function mtBrands(mode = true) {
  const brands = shopsData.filter(o => !!o.ucs)
  if (mode) {
    const ret = brands;
    brands.forEach(el => ret.push(el))
    brands.forEach(el => ret.push(el))
  }

  // const brand = shopsData[0];
  // const brands = [];
  // for(let ix = 0; ix < 45; ix++){
  //     brands.push(brand)
  // }

  // ---
  return brands;
}

export function brandsAllCount(mode = true) {
  return mtBrands(mode).length;
}

export function brandsGet(isRandom, limit = 0, mode = true) {
  const brands = mtBrands(mode);
  let ret = [];
  if (isRandom) {
    ret = stdArrShuffle(brands)
  } else {
    ret = brands
  }
  if (limit > 0) {
    ret.slice(0, limit)
  }
  return ret;
}
