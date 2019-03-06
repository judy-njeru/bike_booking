const express = require('express');
const mongoClient = require('mongodb').MongoClient();
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const mongoURL = "mongodb://localhost:27017/bikes_booking";


app.use(bodyParser.json());

app.use(bodyParser.json());
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, cache-control, postman-token, Access-Control-Allow-Origin");
  next();;
})

//.........................................GET USERS...................................
app.get("/api/bikes", (req, res)=>{
    try {
        mongoClient.connect(mongoURL, (err, db)=>{ 
            db.collection("bikes").find({},(err, result)=>{
              if(err) throw err;
              result.toArray().then(result=>{
                res.end(JSON.stringify(result));
              });
            })
        })
    }catch(error){
        console.log(error)
    }
})

app.listen(port, (err)=>{
  if(err){
    console.log("there was a problem with port " + port);
    console.log(err);
  }else{
    console.log("listening to port " + port);
  }
})