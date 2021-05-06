import {Link, Store} from './store';

export const Microsoft: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '£',
  labels: {
    captcha: {
      container: 'body',
      text: ['enter the characters you see below'],
    },
    inStock: {
      container: '#availability',
      text: ['in stock'],
    },
    maxPrice: {
      container: '#priceblock_ourprice',
    },
    outOfStock: [
      {
        container: '#availability',
        text: ['out of stock', 'unavailable'],
      },
      {
        container: '#backInStock',
        text: ['unavailable'],
      },
    ],
  },
  links: [
    {
      brand: 'test:brand',
      cartUrl:
        'https://www.microsoft.com/en-gb/store/buy?pid=901JF2ZPTLXQ&sid=0K4M',
      model: 'test:model',
      series: 'test:series',
      url: 'https://www.xbox.com/en-gb/accessories/controllers/daystrike-camo-special-edition',
    },
    {
      brand: 'microsoft',
      cartUrl:
        'https://www.xbox.com/en-gb/configure/8WJ714N3RBTL?ranMID=46128&ranEAID=Tq/089sCJN4&ranSiteID=Tq_089sCJN4-bSKv0iAqE1KWFUT_Nic7Ww&epi=Tq_089sCJN4-bSKv0iAqE1KWFUT_Nic7Ww&irgwc=1&OCID=AID2000142_aff_7794_1243925&tduid=%28ir__ee2asg1kfokfqk0m0ctiwv3kfm2xu3ijl23vw61g00%29%287794%29%281243925%29%28Tq_089sCJN4-bSKv0iAqE1KWFUT_Nic7Ww%29%28%29&irclickid=_ee2asg1kfokfqk0m0ctiwv3kfm2xu3ijl23vw61g00',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/en-gb/configure/8WJ714N3RBTL?ranMID=46128&ranEAID=Tq/089sCJN4&ranSiteID=Tq_089sCJN4-bSKv0iAqE1KWFUT_Nic7Ww&epi=Tq_089sCJN4-bSKv0iAqE1KWFUT_Nic7Ww&irgwc=1&OCID=AID2000142_aff_7794_1243925&tduid=%28ir__ee2asg1kfokfqk0m0ctiwv3kfm2xu3ijl23vw61g00%29%287794%29%281243925%29%28Tq_089sCJN4-bSKv0iAqE1KWFUT_Nic7Ww%29%28%29&irclickid=_ee2asg1kfokfqk0m0ctiwv3kfm2xu3ijl23vw61g00',
 };
