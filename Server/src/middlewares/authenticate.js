require("dotenv").config();
var jwt = require("jsonwebtoken");

// Doc defination veryfy token
// jwt.verify(token, 'wrong-secret', function(err, decoded) {
//     // err
//     // decoded undefined
//   });
const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.TOKEN_SALT, function (err, decoded) {
      // err
      if (err) {
        reject(err);
      }
      // decoded undefined
      else {
        resolve(decoded);
      }
    });
  });
};

// router.post(route Path("/todo"),middlewear(authenticate(req,res,next)),next Function(async (req,res)=>{}))

const authenticate = async (req, res, next) => {
  //cheaking if there is inthe headers are any berrer token or not
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect 1" });

  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect 2" });

  // collecting the token from the brrere token
  const token = req.headers.authorization.trim().split(" ")[1];

  // can anybody give any token so we veryfy the token

  let decoded;
  try {
    decoded = await verifyToken(token);
    console.log(decoded);
  } catch (err) {
    console.log(err);

    return res
      .status(400)
      .send({ message: "Authorization token not found or incorrect 3" });
  }
  //    console.log("here is the decode")

  // here can Perform any extra activity according to the require ment
  // exp :- for relation bellow inside request object we are putting the user id so that we may know who is making the chenges or who is the user.

  //    req.userID= decoded.user._id;

  return next();
};

module.exports = authenticate;
