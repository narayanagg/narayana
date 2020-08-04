let mongodb = require("mongodb");
let nareshit = mongodb.MongoClient;

let angular = require("express")
  .Router()
  .get("/", [require("../Config/auth")], (req, res) => {
    nareshit.connect("mongodb://localhost:27017/authproject", (err, db) => {
      if (err) throw err;
      else {
        db.colllection("angular")
          .find()
          .toArray((err, array) => {
            if (err) throw err;
            else {
              res.send(array);
            }
          });
      }
    });
  });
module.exports = angular;
