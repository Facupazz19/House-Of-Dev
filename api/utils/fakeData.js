const Property = require("../models/Propertys");
const db = require("../config/db");

const fakeData = [
  {
    title: "Departamento 2 ambientes",
    city: "san fernando",
    country: "argentina",
    state: "buenos aires",
    description:
      "La inmobiliaria 101 pisos presenta en exclusiva este maravilloso piso de diseño en frente de la estación de fcc con parada vullpelleres listo para entrar a vivir.",
    available: true,
    environments: 2,
    category: "departamento",
    price: "300",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/128286/32684598/535284921.jpg?rule=web_948x542",
  },
  {
    title: "Casa 4 ambientes",
    city: "buenos aires",
    country: "argentina",
    state: "Capital Federal",
    description:
      "ESPECTACULAR ÁTICO DÚPLEX ÚNICO EN LA ZONA. REFORMA INTEGRAL CON MATERIALES DE MÁXIMA CALIDAD.",
    available: true,
    environments: 4,
    category: "casa",
    price: "250000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/99202/32080851/530881831.jpg?rule=web_948x542",
  },
  {
    title: "departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos aires",
    description:
      "IMAGINA TU NUEVA VIDA!!!VIVIENDAS EXCLUSIVAS EN MURCIA NORTE.!",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://static.inmofactory.com/images/inmofactory/documents/1/102490/29556180/444717742.jpg?rule=web_948x542",
  },
  {
    title: "Ph 2 Ambientes",
    city: "san isidro",
    country: "argentina",
    state: "buenos aires",
    description: "linda casa",
    available: true,
    environments: 2,
    category: "ph",
    price: "250",
    image:
      "https://www.mapropiedades.com.ar/resources/original/propiedades/7899449/countrygolf-205_small.jpg",
  },
  //aca
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
    price: "120000",
    image:
      "https://ingenieriacivilyarquitectura.com/wp-content/uploads/2022/04/ideas-de-casas-pequenas-pero-bonitas-1.jpg",
  },
  {
    title: "Departamento 3 ambientes",
    city: "tigre",
    country: "argentina",
    state: "buenos Aires",
    description: "epic casa",
    available: true,
    environments: 3,
    category: "departamento",
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
