const pizzaJson = [
  {
    id: 1,
    name: "Pizza Calabresa",
    img: require("../../assets/images/pizzas/pizza_calabresa.png"),
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
    img: require("../../assets/images/pizzas/Hawaiian_Pizzaa.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 21.9 },
      { sigla: "M", label: "MÉDIA", price: 31.9 },
      { sigla: "G", label: "GRANDE", price: 41.9 },
    ],
    description:
      "Pizza com molho de tomate, queijo mussarela, e pedaços de presunto e abacaxi doce.",
  },
  {
    id: 3,
    name: "Peperoni",
    img: require("../../assets/images/pizzas/Pizza_Peperoni.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 19.9 },
      { sigla: "M", label: "MÉDIA", price: 29.9 },
      { sigla: "G", label: "GRANDE", price: 39.9 },
    ],
    description:
      "Pizza com molho de tomate, queijo mussarela derretido e generosas fatias de peperoni picante",
  },
  {
    id: 4,
    name: "Margherita",
    img: require("../../assets/images/pizzas/Pizza_Margarita.png"),
    price: 10.5, // Esse "price" aqui deixa por enquanto, para mostrar o subtotal e desconto da compra (ISSO SERÁ REMOVIDO POSTERIORMENTE)
    sizes: [
      { sigla: "P", label: "PEQUENA", price: 17.9 },
      { sigla: "M", label: "MÉDIA", price: 27.9 },
      { sigla: "G", label: "GRANDE", price: 37.9 },
    ],
    description: "Abacaxi, Queijo, Presunto e Bacon, uma opção bem tropical",
  },
];

export default pizzaJson;
