//compare client side and server side token

let obj = require("./token");

//create function

let auth = (req, res, next) => {
  let allheaders = req.headers;
  let c_token = allheaders.token;
  if (c_token == obj.token) {
    next();
  } else {
    res.send({ msg: "Unauthorized server...!" });
  }
};
module.exports = auth;
