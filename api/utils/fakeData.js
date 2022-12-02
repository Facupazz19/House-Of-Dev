const Property = require("../models/Propertys");
const db = require("../config/db");

const fakeData = [
  {
    title: "Departamento 2 ambientes",
    city: "San Fernando",
    country: "Argentina",
    state: "Buenos Aires",
    description: "casita",
    available: true,
    environments: 2,
    category: "Departamento",
    price: "300",
    image: "https://i.pinimg.com/originals/2b/d4/07/2bd40719708a19ece21aca146b43b00d.jpg",
  },
  {
    title: "Casa 4 ambientes",
    city: "Buenos Aires",
    country: "Argentina",
    state: "Capital Federal",
    description: "casa de locos",
    available: true,
    environments: 4,
    category: "Casa",
    price: "250000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2C0hJR5cLbgQPLE4Q80IX9tr3iuahSn8uGgkSpywxL2kxIH9VpcdCyfhSrAI8Ye_GKtg&usqp=CAU",
  },
  {
    title: "Departamento 3 ambientes",
    city: "Tigre",
    country: "Argentina",
    state: "Buenos Aires",
    description: "casaca",
    available: true,
    environments: 3,
    category: "Departamento",
    price: "120000",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5fCCht78sqK1t7MciroDcKPYBk-OaNs6vKw&usqp=CAU",
  },
  {
    title: "Ph 2 ambientes",
    city: "San Isidro",
    country: "Argentina",
    state: "Buenos Aires",
    description: "linda casa",
    available: true,
    environments: 2,
    category: "PH",
    price: "250",
    image:
      "https://www.mapropiedades.com.ar/resources/original/propiedades/7899449/countrygolf-205_small.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "Tigre",
    country: "Argentina",
    state: "Buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "Departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
];

const seed = () => {
  Property.bulkCreate(fakeData).then((propertys) => {
    console.log("SEED TERMINADO");
    return propertys;
  });
};

db.sync()
  .then(seed)
  .then(() => console.log("Todo salio bien"))
  .catch((error) => console.log("TODO SALIO MAL", error));

//cd api/utils
//node fakeData.js
