

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require('dotenv').config();
const bodyparser = require("body-parser");
const connectMongo = require("./config/database");
const PORT = process.env.PORT || 5904;
const URL = `http://localhost:${PORT}/`
const userRouter = require("./controller/userController");
const auth = require('./middleware/auth')

connectMongo();
 app.use(cors());
// Other middleware and configurations
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(userRouter); 

app.get("/",auth, (req, res) => {
  res.json({ message: "Hello from this side 😂" })
})


app.listen(PORT, () => {
  console.log(
      ` Server Listening on ${URL}`);
})