//Levantar el servidor y utilizar la comunicación http
const express = require("express");
//Ver los recursos que se consultan, el verbo y la respuesta.
const morgan = require("morgan");
//Nos permite acceder a la información que el cliente nos manda por body en la comunicación http
const bodyParser = require("body-parser");
//Nos permite acceder a las cookies de la request.
const cookieParser = require("cookie-parser");
//Deshabilita el cors para hacer una correcta conexión entre backend y frontend por HTTP.
const cors = require("cors");
//Nos permite acceder al archivo .env donde estarán las variables de entorno.
require("dotenv").config();

const app = express();
//MIDDLEWARES
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(cors({ origin: `${process.env.CLIENT_URL}` }));

//ENDPOINTS
app.get("/api", (req, res) => {
  res.json({ time: Date() });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
