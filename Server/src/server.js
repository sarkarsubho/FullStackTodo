const app = require("./index");
const connect=require("./configs/db")
require("dotenv").config();
app.listen(8080, async function () {
  try {
    await connect();
    console.log("server is running on port 8080",process.env.TOKEN_SALT);
  } catch (er) {
    console.log(er);
  }
});
