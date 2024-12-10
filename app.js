const express = require("express");
const app = express();

app.listen(4000, () => console.log(`Server Running At http://localhost:4000`));

app.get("/",async(request,response)=>{
    response.send("Hello");
})

module.exports = app;
