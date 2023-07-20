const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

//pizzas impares
const pizzasImpares = pizzas.filter((pizza) => pizza.id %2 == 1);

const nombresPizzasImpares = pizzasImpares.map((pizza) => pizza.nombre);

console.log('Las pizzas con id impar son: ' + nombresPizzasImpares)

//pizas menores a $600
const pizzasBaratas = pizzas.filter((pizza) => pizza.precio < 600);

const nombresPizzasBaratas = pizzasBaratas.map((pizza) => pizza.nombre);


console.log('Las pizzas con precio menor a $600 son: ' + nombresPizzasBaratas)

//nombre de la pizza con sus precios
pizzas.forEach((pizza) => {
  console.log( pizza.nombre + '. Precio: ' + pizza.precio)
})

//pizzas e ingredientes
pizzas.forEach((pizza) =>{
  console.log(pizza.nombre + ' Ingredientes: '+  pizza.ingredientes.join('-') )
})

  
