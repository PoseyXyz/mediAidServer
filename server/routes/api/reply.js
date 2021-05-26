const express = require('express')
const { MongoClient } = require("mongodb");
const router = express.Router()

const url = 'mongodb+srv://Posey:posey@123@lessoncluster.pckqe.mongodb.net/medi_database?retryWrites=true&w=majority'


router.get('/', async (req, res)=>{
    const diagnoses = await loadDiagnosesCollection()
    res.send(await diagnoses.find({}).toArray())

    })


    async function loadDiagnosesCollection(){
        const client = await MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
        return client.db('medi_database').collection('diagnoses')
    }



/*const client = new MongoClient(url);

const dbName = "medi_database";

async function addResults(){
    try{
        await client.connect()
        const db = client.db(dbName);

        const col = db.collection('diagnoses')

        let diagnoses = [
            {
                "name":"Covid-19",
                "tags": [ "sore-throat", "headache", "cold", "fever", "lethargy"]
            },
            {
                "name":"Fever",
                "tags": [ "headache", "cold", "fever", "lethargy" ]
            },
            {
                "name":"Diabetes",
                "tags": [ "lethargy", "weight-loss", "numbness" ]   
            }
        ]

        const p = await col.insertMany(diagnoses);

        const myDoc = await col.findOne();
         
         console.log(myDoc);

    }catch (err){
        console.log(err.stack);
    }
    finally{
        await client.close
    }
}

addResults().catch(console.dir)*/

module.exports = router