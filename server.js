const express = require("express");
const app = express();
const path = require("path");
require("./db/db");
const usersModel = require("./model/model");
const cors=require("cors")
const port =8000;

//jmc1bEeNN1B85p6r
//4f6lTsEezJETN2Ku

// refernces
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const htmlpath=path.join(__dirname,"./dist/index.html")

const insertdata=async ()=>{
  const res=await usersModel({
    name:"rana sahil",
    phone:5123652314,
    age:20
  })
  res.save().then(ans=>{
    console.log("data is added")
  })
}
insertdata()

//routes
app.get("/", (req, res) => {
  res.sendFile(htmlpath)
});

app.get("/users", async (req, res) => {
  const result = await usersModel.find();
  res.json(result);
});

app.post("/users", async (req, res) => {
  const Rowdata = usersModel(req.body);
  Rowdata.save()
    .then((res) => console.log("data are added succesfull"))
    .catch((err) => console.log(err));
});




// app listen
app.listen(port, () => {
  console.log("serever is running...");
});
