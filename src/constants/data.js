import images from './images';

const wines = [
  {
    title: 'Botmasktop 2020',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Merlot 2015',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Blueprint Syrah 2019',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'African Palm Wine',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Brut Rose NV',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'African Sunrise',
    price: '$36',
    tags: 'Coffee | Vodka | Syrup',
  },
  {
    title: "South African Curry",
    price: '$16',
    tags: 'Cayenne pepper  | Ground coriander | Tumeric',
  },
  {
    title: 'South African Milk Tart',
    price: '$10',
    tags: 'Vodka | Milk | Cinnamon',
  },
  {
    title: 'African Punch',
    price: '$31',
    tags: 'Vodka | Grenadline | Lemonade | Red wine',
  },
  {
    title: 'African Sangria',
    price: '$26',
    tags: 'Lime | Fanta Orange | Vodka | Angostura bitters',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
