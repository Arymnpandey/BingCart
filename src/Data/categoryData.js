const CategoryData = [
  {
    image:
      "https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
    subCategory: "",
    key: "1",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
    title: "Travel",
    subCategory: "",
    key: "2",
  },
  {
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
    title: "Fashion",
    subCategory: [
      {
        subCategoryName: "Men's Top Wear",
        nestedItems: [
          "Men's Kurtas",
          "Men's Ethnic Wear",
          "Shirts",
          "Vest",
          "Hoodies",
        ],
      },
      {
        subCategoryName: "Women's Wear",
        nestedItems: [
          "Women's Kurtas",
          "Ethnic Wear",
          "Lingerie",
          "Bra",
          "Jewellery",
          "Lehenga",
        ],
      },
      {
        subCategoryName: "Footwear",
        nestedItems: ["Women's Footwear", "Formal Footwear"],
      },
    ],
    key: "3",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
    title: "Electronics",
    subCategory: [
      {
        subCategoryName: "Powerbank",
        nestedItems: ["All", "Powerbank"],
      },

      {
        subCategoryName: "Gaming",
        nestedItems: ["Gaming Mouse", "Gaming Keyboard"],
      },
      {
        subCategoryName: "Audio",
        nestedItems: ["Bluetooth Headphones", "Wired headphones"],
      },
    ],
    key: "4",
  },
  {
    image:
      "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
    title: "Home & Furniture",
    subCategory: [
      {
        subCategoryName: "Home Decor",
        nestedItems: ["Clocks", "Wall Decor"],
      },

      {
        subCategoryName: "Kitchen & Dining",
        nestedItems: ["Bakeware", "Cookware"],
      },
    ],
    key: "5",
  },
  {
    image:
      "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
    title: "Two Wheelers",
    subCategory: [
      {
        subCategoryName: "Petrol Vehicles",
        nestedItems: ["Activa", "Jupiter", "Pulsar"],
      },

      {
        subCategoryName: "Electric Vehicles",
        nestedItems: ["Ola", "Nexon"],
      },
    ],
    key: "6",
  },
];

export default CategoryData;
