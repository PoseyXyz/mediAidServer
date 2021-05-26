const express = require('express')
const { MongoClient } = require("mongodb");
const router = express.Router()

const url = 'mongodb+srv://Posey:posey@123@lessoncluster.pckqe.mongodb.net/medi_database?retryWrites=true&w=majority'


router.get('/:name', async (req, res)=>{
  


    try{
        const searchBase = await loadSymptomsCollection()
        res.send(await searchBase.find({name: {$regex : req.params.name}}).toArray())
    }catch (err){
        console.log(err.stack);
    }

    })


    async function loadSymptomsCollection(){
        const client = await MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
        return client.db('medi_database').collection('search-base')
    }
module.exports = router