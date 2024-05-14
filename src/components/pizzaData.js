const pizzaJson = [
  {
    id: 1,
    name: "Calabresa",
    img: require("../../assets/images/pizzas/pizza.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 18.9 },
      { sigla: "M", label: "MÉDIA", price: 28.9 },
      { sigla: "G", label: "GRANDE", price: 38.9 },
    ],
    description: "Pizza com calabresa fatiada, cebola, mussarela e azeitonas.",
  },
  {
    id: 2,
    name: "Frango com Catupiry",
    img: require("../../assets/images/pizzas/pizza2.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 21.9 },
      { sigla: "M", label: "MÉDIA", price: 31.9 },
      { sigla: "G", label: "GRANDE", price: 41.9 },
    ],
    description:
      "Pizza com frango desfiado e catupiry, uma combinação clássica e deliciosa.",
  },
  {
    id: 3,
    name: "Portuguesa",
    img: require("../../assets/images/pizzas/pizza3.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 19.9 },
      { sigla: "M", label: "MÉDIA", price: 29.9 },
      { sigla: "G", label: "GRANDE", price: 39.9 },
    ],
    description:
      "Pizza com presunto, mussarela, ovos, cebola, azeitonas e ervilha.",
  },
  {
    id: 4,
    name: "Margherita",
    img: require("../../assets/images/pizzas/pizza4.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 17.9 },
      { sigla: "M", label: "MÉDIA", price: 27.9 },
      { sigla: "G", label: "GRANDE", price: 37.9 },
    ],
    description:
      "Pizza com molho de tomate, mussarela de búfala, tomate e manjericão fresco.",
  },
  {
    id: 5,
    name: "Vegetariana",
    img: require("../../assets/images/pizzas/pizza5.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 22.9 },
      { sigla: "M", label: "MÉDIA", price: 32.9 },
      { sigla: "G", label: "GRANDE", price: 42.9 },
    ],
    description:
      "Pizza com brócolis, milho, ervilha, tomate, cebola, pimentão e mussarela.",
  },
];

export default pizzaJson;
