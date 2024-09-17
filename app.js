import express from "express"

const app = express()

app.listen(8000, ()=>{
    console.log("Server is listening on port ", 8000);
})

app.use("/", (req, res)=>{
    res.send("Hi, from express app")
})