const express = require("express");
const { default: mongoose } = require("mongoose");
const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const nocache = require("nocache");
const cookieParser = require("cookie-parser");
const app = express();

const userRouter = require("./routes/userRouter");

app.use(nocache());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(
    session({
      secret: uuidv4(),
      resave: false,
      saveUninitialised: false,
    })
  );


const PORT = 3000;
const LOCAL_STR = "mongodb://127.0.0.01:27017/onlyuser";

app.set("view engine", "ejs");

// const db = mongoose.connect(LOCAL_STR);

app.get("/", (req,res) =>{
    res.render("login");  
    }
);

app.listen(PORT, () => { 
    console.log('server has started');
})