import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'luis',
      email: 'luis@gmail.com',
      password: bcrypt.hashSync('123456'),
      phone: '',
      address:'',
      city:'',
      state:''

    },
    {
      name: 'sara',
      email: 'sara@gmail.com',
      password: bcrypt.hashSync('123456'),
      phone: '',
      address:'',
      city:'',
      state:''

    },
  ],
 dataConsultas:[
    {
        id:1,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:2,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:3,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:4,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:5,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:6,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:7,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:8,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:9,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:10,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:1,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:2,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:3,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:4,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:5,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:6,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:7,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:8,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:9,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
    {
        id:10,
        motivo: 'xxxxxxxxxxxxxxxxxx',
        procedimiento: 'xxxxxxxxxxxxxxxxx',
        fecha : 'Junio 20 de 2022',
        precio: 1234567,
    },
],
dataProducts:[
    {
      _id: 1,
      image: 'public/ssd240.webp',
      titleCardProduct: "",
      descriptionCard: "Esto es la descripcion del producto",
      category: "Hardware",
      price: 123456,
      link: "",
    },
    {
      _id: 2,
      image: 'public/ddr4_8.webp',
      titleCardProduct: "Disco sólido SSD2",
      descriptionCard: "Esto es la descripcion del producto",
      category: "Hardware",
      price: 123456,
      link: "",
    },
    {
      _id: 3,
      image: 'public/nv1500.webp',
      titleCardProduct: "Disco sólido SSD interno Kingston NV1 SNVS",
      descriptionCard: "Esto es la descripcion del producto",
      category: "Hardware",
      price: 123456,
      link: "",
    },
    
  ]

};
export default data;