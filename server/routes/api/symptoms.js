const express = require('express')
const { MongoClient } = require("mongodb");
const router = express.Router()

const url = 'mongodb+srv://Posey:posey@123@lessoncluster.pckqe.mongodb.net/medi_database?retryWrites=true&w=majority'


router.get('/', async (req, res)=>{
  


    try{
        const symptoms = await loadSymptomsCollection()
        res.send(await symptoms.find({}).toArray())
    }catch (err){
        console.log(err.stack);
    }

    })


    async function loadSymptomsCollection(){
        const client = await MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology:true});
        return client.db('medi_database').collection('symptoms')
    }



/*const express = require('express')
const { MongoClient } = require("mongodb");
const router = express.Router()

const url = 'mongodb+srv://Posey:posey@123@lessoncluster.pckqe.mongodb.net/medi_database?retryWrites=true&w=majority'

const client = new MongoClient(url);

const dbName = "medi_database";

async function addSymptoms(){
    try{
        await client.connect()
        const db = client.db(dbName);

        const col = db.collection('symptoms')

        let symptoms = [
            {
                "name":"Cough",
                "questions":[
                {
                    "question":"Cough is?",
                    "replies":["dry", "producing phlegm or sputum"]
                },
                {
                    "question":"Problem is?",
                    "replies":["new or recent", "worsening or progressing", "ongoing or recurrent"]
                },
                {
                    "question":"Accompanied by??",
                    "replies":["chest pain", "chest tightness", "chills or sweating", "difficulty swallowing", "fatigue", "fever", "headache", "loss of appetite"]
                },
            ],
            
            },
          
            {
                "name":"Nausea/Vomitting",
                "questions":[
                {
                    "question":"Triggered or worsened by?",
                    "replies":["drinking alcohol", "stress", "eating certain foods", "travel or motion"]
                },
                {
                    "question":"Onset is?",
                    "replies":["intermittent", "recent", "sudden"]
                },
                {
                    "question":"Accompanied by??",
                    "replies":["abdominal bloating", "abdominal pain", "cramps", "black or bloody stools", "chest pain", "constipation", "diarrhea", "dizziness"]
                },
            ],
            
            },
        ]

        const p = await col.insertMany(symptoms);

        const myDoc = await col.findOne();
         
         console.log(myDoc);

    }catch (err){
        console.log(err.stack);
    }
    finally{
        await client.close
    }
}

addSymptoms().catch(console.dir)*/

module.exports = router