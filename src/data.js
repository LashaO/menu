const menu = [
  {
    id: 1,
    title: "აჭარული ხაჭაპური",
    category: "ხაჭაპური",
    price: 15.99,
    img:
      "https://reginfo.ge/media/k2/items/cache/594b8e242468b60bab02e885abfa7fb6_XL.jpg?t=-62169984000",
    desc: `უგემრიელესი ცომგამოცილილი აჭარული ხაჭაპური `,
  },
  {
    id: 2,
    title: "ფენოვანი ხაჭაპური",
    category: "ხაჭაპური",
    price: 13.99,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgTzWP55QRMcxzb_O6GB-a3_K0xAkJLsr0w&usqp=CAU",
    desc: `უგემრიელესი ფენოვანი ხაჭაპური `,
  },
  {
    id: 3,
    title: "იმერული ხაჭაპური",
    category: "ხაჭაპური",
    price: 6.99,
    img: "https://commersant.ge/views/commersant/img/news/20210409121448.jpg",
    desc: `უგემრიელესი იმერული ხაჭაპური`,
  },
  {
    id: 4,
    title: "ლობიანი",
    category: "ლობიანი",
    price: 20.99,
    img:
      "https://georgianjournal.ge/media/_thumb/images/georgianews/2017/December/cuisine/lobianimtavarzee.jpg",
    desc: `გემრიელი ლობიანი`,
  },
  {
    id: 5,
    title: "ფენოვანი ლობიანი",
    category: "ლობიანი",
    price: 22.99,
    img:
      "https://old.digest.ge/img/700/uploaded/funtime/2017-01/20170118004919424022738.jpg",
    desc: `გემრიელი ფენოვანი ლობიანი`,
  },
  {
    id: 6,
    title: "კარტოფილის ღვეზელი",
    category: "ღვეზელი",
    price: 18.99,
    img:
      "https://gemrielia.ge/media/__sized__/images/stories/lela_modeb/kvelisadakartofilisgvezeli-crop-c0-5__0-5-450x301-70.jpg",
    desc: `გემრიელი კარტოფილის ღვეზელი`,
  },
  {
    id: 7,
    title: "ტარხუნის ღვეზელი",
    category: "ღვეზელი",
    price: 8.99,
    img: "https://gastronomia.ge/wp-content/uploads/2019/03/vgdd.jpg",
    desc: `მაგარი ღვეზელი`,
  },
  {
    id: 8,
    title: "ხორცის ღვეზელი",
    category: "ღვეზელი",
    price: 12.99,
    img:
      "https://gemrielia.ge/media/__sized__/images/stories/lela_modeb/xorcisgvezeli-crop-c0-5__0-5-450x301-70.jpg",
    desc: `დაძენძილი ხორცის ღვეზელი`,
  },
  {
    id: 9,
    title: "აჭარული ხაჭაპური",
    category: "ხაჭაპური",
    price: 15.99,
    img:
      "https://reginfo.ge/media/k2/items/cache/594b8e242468b60bab02e885abfa7fb6_XL.jpg?t=-62169984000",
    desc: `უგემრიელესი ცომგამოცილილი აჭარული ხაჭაპური `,
  },
  {
    id: 10,
    title: "ფენოვანი ხაჭაპური",
    category: "ხაჭაპური",
    price: 13.99,
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFgTzWP55QRMcxzb_O6GB-a3_K0xAkJLsr0w&usqp=CAU",
    desc: `უგემრიელესი ფენოვანი ხაჭაპური `,
  },
  {
    id: 11,
    title: "იმერული ხაჭაპური",
    category: "ხაჭაპური",
    price: 6.99,
    img: "https://commersant.ge/views/commersant/img/news/20210409121448.jpg",
    desc: `უგემრიელესი იმერული ხაჭაპური`,
  },
  {
    id: 12,
    title: "ლობიანი",
    category: "ლობიანი",
    price: 20.99,
    img:
      "https://georgianjournal.ge/media/_thumb/images/georgianews/2017/December/cuisine/lobianimtavarzee.jpg",
    desc: `გემრიელი ლობიანი`,
  },
  {
    id: 13,
    title: "ფენოვანი ლობიანი",
    category: "ლობიანი",
    price: 22.99,
    img:
      "https://old.digest.ge/img/700/uploaded/funtime/2017-01/20170118004919424022738.jpg",
    desc: `გემრიელი ფენოვანი ლობიანი`,
  },
  {
    id: 14,
    title: "კარტოფილის ღვეზელი",
    category: "ღვეზელი",
    price: 18.99,
    img:
      "https://gemrielia.ge/media/__sized__/images/stories/lela_modeb/kvelisadakartofilisgvezeli-crop-c0-5__0-5-450x301-70.jpg",
    desc: `გემრიელი კარტოფილის ღვეზელი`,
  },
  {
    id: 15,
    title: "ტარხუნის ღვეზელი",
    category: "ღვეზელი",
    price: 8.99,
    img: "https://gastronomia.ge/wp-content/uploads/2019/03/vgdd.jpg",
    desc: `მაგარი ღვეზელი`,
  },
  {
    id: 16,
    title: "ხორცის ღვეზელი",
    category: "ღვეზელი",
    price: 12.99,
    img:
      "https://gemrielia.ge/media/__sized__/images/stories/lela_modeb/xorcisgvezeli-crop-c0-5__0-5-450x301-70.jpg",
    desc: `დაძენძილი ხორცის ღვეზელი`,
  },
];
export default menu;
