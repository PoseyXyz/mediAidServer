const express = require('express')
const { MongoClient } = require("mongodb");
const router = express.Router()

const url = 'mongodb+srv://Posey:posey@123@lessoncluster.pckqe.mongodb.net/medi_database?retryWrites=true&w=majority'



    router.get('/', async (req, res)=>{
        const diagnoses = await loadDiagnosesCollection()
        res.send(await diagnoses.find({tags:{$all:req.query.array}}).toArray())
    
        })

    async function loadDiagnosesCollection(){
        const client = await MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
        return client.db('medi_database').collection('diagnoses')
    }

   /* function logMe(){
        let string = ''
        const array = ["cold", "lethargy", "fever"]
        array.map((arr,index)=>{string+=`${index ? '&':''}array=${arr}`})
        console.log(`http://localhost:3000/tags?${string}`);
    }
    logMe()*/
    module.exports = router