import users from "models/User";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import db from "utils/db";
var bodyParser = require("body-parser");

const handlerUpdate: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  const { method } = req;
  const { id } = req.query;
  console.log(id);
  

  !session && res.status(401).json({ message: "Se requiere authentificacion" });
  await db.connect();
  const user = await users.findById({ _id: id });

  if (user) {
    user.name = req.body.name;
    user.phone = req.body.phone;
    user.email = req.body.email;
    user.address = req.body.address;
    user.city = req.body.city;
    user.state = req.body.state;
    await user.save();
    await db.disconnect();
    res.status(201).json({message:'OK'})
  } else {
    await db.disconnect();
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

export default handlerUpdate;
