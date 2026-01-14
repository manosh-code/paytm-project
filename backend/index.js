const express = require("express");
const app = express();

const  cors = require("cors");
app.use(cors());

app.use(express.json());


const mainRouter = require("./routes/index");





app.use("/api/v1", mainRouter);
//app.use("/api/v1/account", mainRouter);

app.use("/api/v2", v2Router);





app.listen(3000);










//  /api/v1/user/signup
//.  /api/v1/user/signin
//.   /api/v1/user/ changePassword .....

//.   /api/v1/account/transferMoney
//.    /api/v1/account/balance