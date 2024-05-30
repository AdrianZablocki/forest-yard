import map1 from '../../public/images/geomap1.webp'
import map2 from '../../public/images/geomap2.webp'
import map3 from '../../public/images/geomap3.webp'
import map4 from '../../public/images/geomap4.webp'
import map5 from '../../public/images/geomap5.webp'
import map6 from '../../public/images/geomap6.webp'
import map7 from '../../public/images/geomap7.webp'
import map8 from '../../public/images/geomap8.webp'
import map9 from '../../public/images/geomap9.webp'
import map10 from '../../public/images/geomap10.webp'

const imgMap = new Map([
  [1, map1],
  [2, map2],
  [3, map3],
  [4, map4],
  [5, map5],
  [6, map6],
  [7, map7],
  [8, map8],
  [9, map9],
  [10, map10],
]);

export const offers = [
  {
    number: 1,
    area: '956',
    circuit: '128',
    price: '86 000 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(1)
  },



  {
    number: 2,
    area: '899',
    circuit: '124',
    price: '80 910 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(2)
  },
  {
    number: 3,
    area: '900',
    circuit: '124',
    price: '81 000 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(3)
  },
  {
    number: 4,
    area: '900',
    circuit: '124',
    price: '81 000 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(4)
  },
  {
    number: 5,
    area: '914',
    circuit: '125',
    price: '82 260 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(5)
  },
  {
    number: 6,
    area: '913',
    circuit: '124',
    price: '82 170 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(6)
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
  },
  {
    number: 10,
    area: '1397',
    circuit: '150',
    price: '125 730 zł',
    status: 'Dostępna',
    isFree: true,
    img: imgMap.get(10)
  }
];
