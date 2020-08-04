//develop the login restapi (POST)
let mongodb = require("mongodb");

let nareshit = mongodb.MongoClient;
//where nareshit is the clinet

//import token.js file
let obj = require("../Config/token");

//generate token
let generateToken = require("../Config/generateToken");

//create and export the module

let login = require("express")
  .Router()
  .post("/", (req, res) => {
    nareshit.connect("mongodb://localhost:27017/authproject", (err, db) => {
      if (err) {
        throw err;
      } else {
        db.collection("login_details")
          .find({ uname: req.body.uname, upwd: req.body.upwd })
          .toArray((err, array) => {
            if (err) throw err;
            else {
              if (array.length > 0) {
                let token = generateToken(
                  { uname: req.body.uname, upwd: req.body.upwd },
                  "narayana@gmail.com"
                );

                obj.token = token;
                res.send({ login: "success", token: token });
              } else {
                res.send({ login: "fail" });
              }
            }
          });
      }
    });
  });

module.exports = login;
