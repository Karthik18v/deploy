const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());


app.listen(4000, () => console.log(`Server Running At http://localhost:4000`));

app.get("/",async(request,response)=>{
    response.send("Hello");
})

app.get("/hello",async(request,respose)=>{
    respose.send("New");
})

module.exports = app;
