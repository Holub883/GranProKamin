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
    'Комплекси',
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
        material: 'Габро'
    },
    {
        id: 2,
        category: 'Ексклюзив',
        title: '002',
        description: 'Вишуканий дизайн з декоративними елементами та фасками.',
        img: '/img/2.jpg',
        material: 'Чорний граніт'
    },
    {
        id: 3,
        category: 'Комплекси',
        title: '003',
        description: 'Сучасне оформлення з місцем під живі квіти та комбінацією кольорів.',
        img: '/img/3.jpg',
        material: 'Габро / Сірий граніт'
    },
    {
        id: 4,
        category: 'Подвійні',
        title: '004',
        description: 'Високохудожнє гравіювання ікони на чорному граніті.',
        img: '/img/4.jpg',
        material: 'Габро'
    },
    {
        id: 5,
        category: 'Подвійні',
        title: '005',
        description: 'Подвійна стела у формі розгорнутої книги з центральним хрестом.',
        img: '/img/5.jpg',
        material: 'Сірий граніт'
    },
    {
        id: 6,
        category: 'Одинарні',
        title: '006',
        description: 'Елегантне поєднання світлого та темного каменю.',
        img: '/img/6.jpg',
        material: 'Граніт двох видів'
    },
    {
        id: 7,
        category: 'Одинарні',
        title: '007',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/7.jpg',
        material: 'Габро'
    },
    {
        id: 8,
        category: 'Одинарні',
        title: '008',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/8.jpg',
        material: 'Габро'
    },
    {
        id: 9,
        category: 'Одинарні',
        title: '009',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/9.jpg',
        material: 'Габро'
    },
    {
        id: 10,
        category: 'Подвійні',
        title: '010',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/10.jpg',
        material: 'Габро'
    },
    {
        id: 11,
        category: 'Одинарні',
        title: '011',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/11.jpg',
        material: 'Габро'
    },
    {
        id: 12,
        category: 'Одинарні',
        title: '012',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/12.jpg',
        material: 'Габро'
    },
    {
        id: 13,
        category: 'Подвійні',
        title: '013',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/13.jpg',
        material: 'Габро'
    },
    {
        id: 14,
        category: 'Подвійні',
        title: '014',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/14.jpg',
        material: 'Габро'
    },
    {
        id: 15,
        category:'Для військових',
        title: '015',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/15.jpg',
        material: 'Габро'
    },
    {
        id: 16,
        category: 'Одинарні',
        title: '016',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/16.jpg',
        material: 'Габро'
    },
    {
        id: 17,
        category: 'Одинарні',
        title: '017',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/17.jpg',
        material: 'Габро'
    },
    {
        id: 18,
        category: 'Для військових',
        title: '018',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/18.jpg',
        material: 'Габро'
    },
    {
        id: 19,
        category: 'Одинарні',
        title: '019',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/19.jpg',
        material: 'Габро'
    },
    {
        id: 20,
        category: 'Подвійні',
        title: '020',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/20.jpg',
        material: 'Габро'
    },
    {
        id: 21,
        category: 'Одинарні',
        title: '021',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/21.jpg',
        material: 'Габро'
    },
    {
        id: 22,
        category: 'Одинарні',
        title: '022',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/22.jpg',
        material: 'Габро'
    },
    {
        id: 23,
        category: 'Одинарні',
        title: '023',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/23.jpg',
        material: 'Габро'
    },
    {
        id: 24,
        category: 'Одинарні',
        title: '024',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/24.jpg',
        material: 'Габро'
    },
    {
        id: 25,
        category: 'Одинарні',
        title: '025',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/25.jpg',
        material: 'Габро'
    },    {
        id: 26,
        category: 'Подвійні',
        title: '026',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/26.jpg',
        material: 'Габро'
    },    {
        id: 27,
        category: 'Одинарні',
        title: '027',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/27.jpg',
        material: 'Габро'
    },    {
        id: 28,
        category: 'Подвійні',
        title: '028',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/28.jpg',
        material: 'Габро'
    },    {
        id: 29,
        category: 'Одинарні',
        title: '029',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/29.jpg',
        material: 'Габро'
    },    {
        id: 30,
        category: 'Ексклюзив',
        title: '030',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/30.jpg',
        material: 'Габро'
    },
    {
        id: 31,
        category: 'Для військових',
        title: '031',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/31.jpg',
        material: 'Габро'
    },
    {
        id: 32,
        category: 'Ексклюзив',
        title: '032',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/32.jpg',
        material: 'Габро'
    },
    {
        id: 33,
        category: 'Одинарні',
        title: '032',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/33.jpg',
        material: 'Габро'
    },
    {
        id: 34,
        category: 'Для військових',
        title: '034',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/34.jpg',
        material: 'Габро'
    },
    {
        id: 35,
        category: 'Одинарні',
        title: '035',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/35.jpg',
        material: 'Габро'
    },
    {
        id: 36,
        category: 'Одинарні',
        title: '036',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/36.jpg',
        material: 'Габро'
    },
    {
        id: 37,
        category: 'Одинарні',
        title: '037',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/37.jpg',
        material: 'Габро'
    },
    {
        id: 38,
        category: 'Одинарні',
        title: '038',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/38.jpg',
        material: 'Габро'
    },
    {
        id: 39,
        category: 'Одинарні',
        title: '039',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/39.jpg',
        material: 'Габро'
    },
    {
        id: 40,
        category: 'Одинарні',
        title: '040',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/40.jpg',
        material: 'Габро'
    },
    {
        id: 41,
        category: 'Одинарні',
        title: '041',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/41.jpg',
        material: 'Габро'
    },
    {
        id: 42,
        category: 'Одинарні',
        title: '042',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/42.jpg',
        material: 'Габро'
    },
    {
        id: 43,
        category: 'Одинарні',
        title: '043',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/43.jpg',
        material: 'Габро'
    },
    {
        id: 44,
        category: 'Одинарні',
        title: '044',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/44.jpg',
        material: 'Габро'
    },
    {
        id: 45,
        category: 'Одинарні',
        title: '045',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/45.jpg',
        material: 'Габро'
    },
    {
        id: 46,
        category: 'Одинарні',
        title: '046',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/46.jpg',
        material: 'Габро'
    },
    {
        id: 47,
        category: 'Одинарні',
        title: '047',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/47.jpg',
        material: 'Габро'
    },
    {
        id: 48,
        category: 'Одинарні',
        title: '048',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/48.jpg',
        material: 'Габро'
    },
    {
        id: 49,
        category: 'Одинарні',
        title: '049',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/49.jpg',
        material: 'Габро'
    },
    {
        id: 50,
        category: 'Одинарні',
        title: '050',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/50.jpg',
        material: 'Габро'
    },
    {
        id: 51,
        category: 'Одинарні',
        title: '051',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/51.jpg',
        material: 'Габро'
    },
    {
        id: 52,
        category: 'Одинарні',
        title: '052',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/52.jpg',
        material: 'Габро'
    },
    {
        id: 53,
        category: 'Одинарні',
        title: '053',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/53.jpg',
        material: 'Габро'
    },
    {
        id: 54,
        category: 'Одинарні',
        title: '054',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/54.jpg',
        material: 'Габро'
    },
    {
        id: 55,
        category: 'Одинарні',
        title: '055',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/55.jpg',
        material: 'Габро'
    },
    {
        id: 56,
        category: 'Одинарні',
        title: '050',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/50.jpg',
        material: 'Габро'
    },
    {
        id: 57,
        category: 'Одинарні',
        title: '057',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/57.jpg',
        material: 'Габро'
    },
    {
        id: 58,
        category: 'Одинарні',
        title: '058',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/58.jpg',
        material: 'Габро'
    },
    {
        id: 59,
        category: 'Одинарні',
        title: '059',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/59.jpg',
        material: 'Габро'
    },
    {
        id: 60,
        category: 'Одинарні',
        title: '060',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/60.jpg',
        material: 'Габро'
    },
    {
        id: 61,
        category: 'Одинарні',
        title: '061',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/61.jpg',
        material: 'Габро'
    },    {
        id: 62,
        category: 'Одинарні',
        title: '062',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/62.jpg',
        material: 'Габро'
    },    {
        id: 63,
        category: 'Одинарні',
        title: '063',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/63.jpg',
        material: 'Габро'
    },    {
        id: 64,
        category: 'Одинарні',
        title: '064',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/64.jpg',
        material: 'Габро'
    },    {
        id: 65,
        category: 'Одинарні',
        title: '065',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/65.jpg',
        material: 'Габро'
    },    {
        id: 66,
        category: 'Одинарні',
        title: '066',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/66.jpg',
        material: 'Габро'
    },    {
        id: 67,
        category: 'Одинарні',
        title: '067',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/67.jpg',
        material: 'Габро'
    },    {
        id: 68,
        category: 'Одинарні',
        title: '068',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/68.jpg',
        material: 'Габро'
    },
    {
        id: 69,
        category: 'Одинарні',
        title: '069',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/69.jpg',
        material: 'Габро'
    },
    {
        id: 70,
        category: 'Одинарні',
        title: '070',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/70.jpg',
        material: 'Габро'
    },
    {
        id: 71,
        category: 'Одинарні',
        title: '071',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/71.jpg',
        material: 'Габро'
    },
    {
        id: 72,
        category: 'Одинарні',
        title: '072',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/72.jpg',
        material: 'Габро'
    },
    {
        id: 73,
        category: 'Одинарні',
        title: '073',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/73.jpg',
        material: 'Габро'
    },
    {
        id: 74,
        category: 'Одинарні',
        title: '074',
        description: 'Строгий та лаконічний дизайн з акцентом на портрет.',
        img: '/img/74.jpg',
        material: 'Габро'
    },
];