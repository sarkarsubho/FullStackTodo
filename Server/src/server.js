const app = require("./index");
const connect=require("./configs/db")
// require("dotenv").config();
let PORT=process.env.PORT || 5000;
app.listen(PORT, async function () {
  try {
    await connect();
    console.log(`server is running on port ${PORT}`);
  } catch (er) {
    console.log(er);
  }
});
