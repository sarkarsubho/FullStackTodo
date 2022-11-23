const app = require("./index");
const connect=require("./configs/db")
app.listen(8080, async function () {
  try {
    await connect();
    console.log("server is running on port 8080");
  } catch (er) {
    console.log(er);
  }
});
