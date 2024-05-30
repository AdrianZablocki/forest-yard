import map1 from '../../public/images/geomap1.webp'
import map7 from '../../public/images/geomap7.webp'
import map8 from '../../public/images/geomap8.webp'
import map9 from '../../public/images/geomap9.webp'

const imgMap = new Map([
  [1, map1],
  [7, map7],
  [8, map8],
  [9, map9]
]);

export const offers = [
  {
    number: 1,
    area: '956',
    circuit: '128',
    price: '86 000 zł',
    status: 'Niedostępna',
    isFree: false,
    img: imgMap.get(1)
  },
  {
    number: 7,
    area: '913',
    circuit: '124',
    price: '82 170 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(7)
  },
  {
    number: 8,
    area: '950',
    circuit: '1126',
    price: '85 500 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(8)
  },
  {
    number: 9,
    area: '950',
    circuit: '125',
    price: '85 500 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(9)
  }
];
