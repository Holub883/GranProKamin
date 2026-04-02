export interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    img: string;
    material?: string;
}

export const categories = [
    'Всі',
    'Одинарні',
    'Подвійні',
    'Ексклюзив',
    'Для військових',
];

export const projects: Project[] = [
    {
        id: 1,
        category: 'Одинарні',
        title: '001',
        description: 'Класичний одинарний пам’ятник з об’ємним хрестом та квітником.',
        img: '/img/1.jpg',
        material: '43000'
    },
    {
        id: 2,
        category: 'Одинарні',
        title: '002',
        description: 'Елегантне поєднання світлого та темного каменю.',
        img: '/img/6.jpg',
        material: '125000'
    },
    {
        id: 3,
        category: 'Одинарні',
        title: '003',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/9.jpg',
        material: '48400'
    },
    {
        id: 4,
        category: 'Одинарні',
        title: '004',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/11.jpg',
        material: '39000'
    },
    {
        id: 5,
        category: 'Одинарні',
        title: '005',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/12.jpg',
        material: '79000'
    },
    {
        id: 6,
        category: 'Одинарні',
        title: '006',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/16.jpg',
        material: '99000'
    },
    {
        id: 7,
        category: 'Одинарні',
        title: '007',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/17.jpg',
        material: '140000'
    },
    {
        id: 8,
        category: 'Одинарні',
        title: '008',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/21.jpg',
        material: '30000'
    },
    {
        id: 9,
        category: 'Одинарні',
        title: '009',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/22.jpg',
        material: '46400'
    },
    {
        id: 10,
        category: 'Одинарні',
        title: '010',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/23.jpg',
        material: '75000'
    },
    {
        id: 11,
        category: 'Одинарні',
        title: '011',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/24.jpg',
        material: '55000'
    },
    {
        id: 12,
        category: 'Одинарні',
        title: '012',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/25.jpg',
        material: '34000'
    },
    {
        id: 13,
        category: 'Одинарні',
        title: '013',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/27.jpg',
        material: '27000'
    },
       {
        id: 14,
        category: 'Одинарні',
        title: '014',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/29.jpg',
        material: '28000'
    },
    {
        id: 15,
        category: 'Одинарні',
        title: '015',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/33.jpg',

    },
    {
        id: 16,
        category: 'Одинарні',
        title: '016',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/35.jpg',
        material: '130000'
    },
    {
        id: 17,
        category: 'Одинарні',
        title: '017',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/36.jpg',
        material: '55000'
    },
    {
        id: 18,
        category: 'Одинарні',
        title: '018',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/38.jpg',
        material: '43000'
    },
    {
        id: 19,
        category: 'Одинарні',
        title: '019',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/39.jpg',
        material: '39000'
    },
    {
        id: 20,
        category: 'Одинарні',
        title: '020',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/40.jpg',
        material: '49000'
    },
    {
        id: 21,
        category: 'Одинарні',
        title: '021',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/41.jpg',
        material: '49500'
    },
    {
        id: 22,
        category: 'Одинарні',
        title: '022',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/42.jpg',
        material: '98000'
    },
    {
        id: 23,
        category: 'Одинарні',
        title: '023',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/44.jpg',
        material: '118000'
    },
    {
        id: 24,
        category: 'Одинарні',
        title: '024',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/46.jpg',
        material: '49000'
    },
    {
        id: 25,
        category: 'Одинарні',
        title: '025',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/48.jpg',
        material: '75000'
    },
    {
        id: 26,
        category: 'Одинарні',
        title: '026',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/49.jpg',
        material: '61000'
    },
    {
        id: 27,
        category: 'Одинарні',
        title: '027',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/50.jpg',
        material: '87000'
    },
    {
        id: 28,
        category: 'Одинарні',
        title: '028',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/51.jpg',
        material: '70000'
    },
    {
        id: 29,
        category: 'Одинарні',
        title: '029',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/52.jpg',
        material: '51000'
    },
    {
        id: 30,
        category: 'Одинарні',
        title: '030',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/53.jpg',
        material: '68000'
    },
    {
        id: 31,
        category: 'Одинарні',
        title: '031',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/54.jpg',
        material: '180000'
    },
    {
        id: 32,
        category: 'Одинарні',
        title: '032',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/55.jpg',
        material: '110000'
    },
    {
        id: 33,
        category: 'Одинарні',
        title: '033',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/56.jpg',
        material: '46000'
    },
    {
        id: 34,
        category: 'Одинарні',
        title: '034',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/57.jpg',
        material: '52000'
    },
    {
        id: 35,
        category: 'Одинарні',
        title: '035',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/58.jpg',
        material: '54000'
    },
    {
        id: 36,
        category: 'Одинарні',
        title: '036',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/60.jpg',
        material: '70000'
    },
    {
        id: 37,
        category: 'Одинарні',
        title: '037',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/61.jpg',
        material: '59000'
    },    {
        id: 38,
        category: 'Одинарні',
        title: '038',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/62.jpg',
        material: '45000'
    },    {
        id: 39,
        category: 'Одинарні',
        title: '039',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/63.jpg',
        material: '85000'
    },        {
        id: 40,
        category: 'Одинарні',
        title: '040',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/67.jpg',
        material: '57000'
    },    {
        id: 41,
        category: 'Одинарні',
        title: '041',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/68.jpg',
        material: '70000'
    },
    {
        id: 42,
        category: 'Подвійні',
        title: '045',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/69.jpg',
        material: '120000'
    },
    {
        id: 43,
        category: 'Одинарні',
        title: '042',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/70.jpg',
        material: '121000'
    },
    {
        id: 44,
        category: 'Одинарні',
        title: '043',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/71.jpg',
        material: '118000'
    },
    {
        id: 45,
        category: 'Одинарні',
        title: '044',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/72.jpg',
        material: '25000'
    },
    {
        id: 46,
        category: 'Подвійні',
        title: '046',
        description: 'Сучасне оформлення з місцем під живі квіти та комбінацією кольорів.',
        img: '/img/3.jpg',
        material: '160000'
    },
    {
        id: 47,
        category: 'Подвійні',
        title: '047',
        description: 'Високохудожнє гравіювання ікони на чорному граніті.',
        img: '/img/4.jpg',
        material: '100000'
    },
    {
        id: 48,
        category: 'Подвійні',
        title: '048',
        description: 'Подвійна стела у формі розгорнутої книги з центральним хрестом.',
        img: '/img/5.jpg',
        material: '100000'
    },
    {
        id: 49,
        category: 'Подвійні',
        title: '049',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/10.jpg',
        material: '87000'
    },
    {
        id: 50,
        category: 'Подвійні',
        title: '050',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/13.jpg',
        material: '137000'
    },
    {
        id: 51,
        category: 'Подвійні',
        title: '051',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/14.jpg',
        material: '168000'
    },
    {
        id: 52,
        category: 'Подвійні',
        title: '052',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/19.jpg',
        material: '157000'
    },
    {
        id: 53,
        category: 'Подвійні',
        title: '053',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/20.jpg',
        material: '75000'
    },
    {
        id: 54,
        category: 'Подвійні',
        title: '054',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/26.jpg',
        material: '99000'
    },
    {
        id: 55,
        category: 'Подвійні',
        title: '055',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/28.jpg',
        material: '250000'
    },
    {
        id: 56,
        category: 'Подвійні',
        title: '056',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/43.jpg',
        material: '90000'
    },
    {
        id: 57,
        category: 'Подвійні',
        title: '057',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/7.jpg',
        material: '140000'
    },
    {
        id: 58,
        category: 'Подвійні',
        title: '058',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/59.jpg',
        material: '76000'
    },
    {
        id: 59,
        category: 'Подвійні',
        title: '059',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/64.jpg',
        material: '65000'
    },
    {
        id: 60,
        category: 'Подвійні',
        title: '060',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/73.jpg',
        material: '600000'
    },
    {
        id: 61,
        category: 'Ексклюзив',
        title: '061',
        description: 'Вишуканий дизайн з декоративними елементами та фасками.',
        img: '/img/2.jpg',
    },
    {
        id: 62,
        category: 'Ексклюзив',
        title: '062',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/30.jpg',
    },
    {
        id: 63,
        category: 'Ексклюзив',
        title: '063',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/32.jpg',
        material: '90000'
    },
    {
        id: 64,
        category: 'Для військових',
        title: '064',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/34.jpg',
    },
    {
        id: 65,
        category: 'Для військових',
        title: '065',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/37.jpg',
    },
    {
        id: 66,
        category: 'Для військових',
        title: '066',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/45.jpg',
    },
    {
        id: 67,
        category: 'Для військових',
        title: '067',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/8.jpg',
    },
    {
        id: 68,
        category: 'Для військових',
        title: '068',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/47.jpg',
    },
    {
        id: 69,
        category: 'Для військових',
        title: '069',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/65.jpg',
    },    {
        id: 70,
        category: 'Для військових',
        title: '070',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/66.jpg',
    },
    {
        id: 71,
        category:'Для військових',
        title: '071',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/15.jpg',
    },
    {
        id: 72,
        category: 'Для військових',
        title: '072',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/18.jpg',
    },
    {
        id: 73,
        category: 'Для військових',
        title: '073',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/31.jpg',
    },
];