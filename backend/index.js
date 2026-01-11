const express = require("express");


const mainRouter = require("./routes/index");

const app = express();

app.use("/api/v1", mainRouter);
//app.use("/api/v1/account", mainRouter);

app.use("/api/v2", v2Router);




//  /api/v1/user/signup
//.  /api/v1/user/signin
//.   /api/v1/user/ changePassword .....

//.   /api/v1/account/transferMoney
//.    /api/v1/account/balance