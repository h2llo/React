const express = require("express");
const app = express();
const port = 4000;
const mg = require("mongoose");
//client에서 보내는 정보를 받기 위한 bodyparser
const bodyParser = require("body-parser");

//model파일의 User객체를 가져온다.
const {User} = require('./model/User');
//apllication/x-www-form-unlencoded 와 같은 정보
//app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.urlencoded({extended:true}));
//application/json 정보
//app.use(bodyParser.json());
app.use(express.json());

mg.connect('mongodb+srv://h2llo:toddlf94@h2llo.muaub68.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//회원가입을 위한 route
app.post("/register", (req, res) => {

  //회원 가입 할 때 필요한 정보들을 client에서 가져오면
  //DB에 넣는다.
  const user = new User(req.body);
  //user.save()를 하면 user정보들이 저장이 된다. 이후 callback이 옴
  // user.save((err,userInfo) => {
  //   if(err) return res.json({success:false,message:err})
  //   return res.json({success:true,message:userInfo})
  // })
  // 주석처리한 이유. 지금은 callback이 안된다.
  console.log(user);
  res.json({success:true,message:user});

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});