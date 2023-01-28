const Bodyparser=require("body-parser")
const Cors=require("cors")
const Express=require("express")
const Mongoose=require("mongoose")
const friendModel = require("./models/friendModel")


var app=Express()

app.use(Bodyparser.json())
app.use(Bodyparser.urlencoded({extended:true}))

Mongoose.connect("mongodb+srv://athiraanil:athira@cluster0.akmt4eq.mongodb.net/frienddb?retryWrites=true&w=majority",{useNewUrlParser:true})


app.get("/",(req,res)=>{

    res.send("welcome")
    
})

app.post("/add",async(req,res)=>{

    let data=new friendModel(req.body)
    console.log(data)
    await data.save()

    res.send(data)
})

app.get("/viewall",async(req,res)=>{
    let data=await friendModel.find()

    res.send(data)
})

app.listen(3000)