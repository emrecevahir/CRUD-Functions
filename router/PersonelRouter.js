const express = require ("express")
const Personel = require("../model/PersonelModel")
const PersonelRouter = express.Router()

//Create işlemi personel oluşturmak için

PersonelRouter.post("/addPersonel",async(req,res)=>{
    try {
        let newPersonel = await Personel.create(req.body)
        
        res.send({
            status:true,
            data : newPersonel,
            message : `${newPersonel.name} Created`
        })
    }
    catch (error) {
        res.status(404).send({status:false, message : error.message})
        console.log(error.message)
    }
})
//Read işlemi
//Tüm datayı read ediyoruz herhangi bir kontrol olmadan
PersonelRouter.get("/allPersonel",async(req,res)=>{
    try {
        const allPersonel = await Personel.find({})
        res.status(200).send({status : true , message:"All Personel",data : allPersonel
        })
        
    } catch (error) {
        res.status(404).send({status:false , message : error.message})
        console.log(error.message)
    }
})

//Update işlemi

PersonelRouter.put("/personel",async(req,res)=>{
    try {
        let{_id} =req.body
        if (!_id) 
        {
            res.status(404).send({status:false,message:"Update Edilecek Id yok"})
        } 
        else {
            const updatedPersonel = await Personel.findByIdAndUpdate(_id,req.body)
            res.send({
            status : true,
            data : updatedPersonel ,
            message : `${_id} : ID - Personel Data Updated`
            })
        }
        } 
    catch (error) {
        res.status(404).send({status:false, message : error.message})
        console.log(error.message) 
    }
})

//delete işlemi

PersonelRouter.delete("/personel",async(req,res)=>{
    try {
        let {_id} = req.body
        const deletePersonel = await Personel.findByIdAndDelete(_id)
        if(!deletePersonel){
            return res.status(404).send({status : false, message : "Personel not Deleted"})
        }
        res.status(200).send({status : true,message :'Personel Deleted'})

    } catch (error) {
    res.status(404).send({status:false, message : error.message})
    console.log(error.message)  

    }
})










module.exports = PersonelRouter