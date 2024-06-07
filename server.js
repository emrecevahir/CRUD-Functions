const express = require("express")
const mongoose = require('mongoose');
const PersonelRouter = require('./router/PersonelRouter');

//mongodb conenction stringi
mongoose.connect("mongodb+srv://emreckorkmaz:1234@cluster0.lkdgsw5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch((err)=>console.log(err))





const app = express()

app.use(express.json())


//router yapısını tanımladık
//http://localhost:1907/personel/<kullanılcak CRUD işleminin router ı
app.use("/personel",PersonelRouter)



//çalışcağımız portu verdik

app.listen(1907,()=>{
    console.log("Nodemon 1907 Portunda Çalıştı")
})