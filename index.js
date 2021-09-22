
const mongoose=require('mongoose');

const express=require('express')

const app=express()

let cors = require("cors");
app.use(cors());


const dbURI = `mongodb+srv://Kamesh:12345@cluster0.tszyo.mongodb.net/player?retryWrites=true&w=majority`;

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(dbURI,options).then(() => {
    console.log("Dtabase Connection Established")
})

const playerSchema = new mongoose.Schema({},{strict:false})

var player = mongoose.model('playerData',playerSchema);

app.post("/player", async (req,res) => {
    var data = await player.insertMany([{
            pid:"1",
            pName:"Dawid Malan",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c180927/dawid-malan.jpg",
            icciRank:"1",
            country:"England"

        }, {
            pid:"2",
            pName:"Babar Azam",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c170768/babar-azam.jpg",
            icciRank:"2",
            country:"PAKISTAN"

        }, {
            pid:"3",
            pName:"Aaron Finch",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c170630/aaron-finch.jpg",
            icciRank:"3",
            country:"AUSTRALIA"

        }, {
            pid:"4",
            pName:"Virat Kohli",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg",
            icciRank:"4",
            country:"INDIA"

        }, {
            pid:"5",
            pName:"Devon Conway",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c207888/devon-conway.jpg",
            icciRank:"5",
            country:"NEW ZEALAND"

        }, {
            pid:"6",
            pName:"KL Rahul",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c170673/kl-rahul.jpg",
            icciRank:"6",
            country:"INDIA"

        }, {
            pid:"7",
            pName:"Mohammad Rizwan",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c202222/mohammad-rizwan.jpg",
            icciRank:"7",
            country:"PAKISTAN"

        }, {
            pid:"8",
            pName:"Quinton De Kock",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c170698/quinton-de-kock.jpg",
            icciRank:"8",
            country:"SOUTH AFRICA"

        }, {
            pid:"9",
            pName:"Evin Lewis",
            pImg:"https://www.cricbuzz.com/a/img/v1/50x50/i1/c170785/evin-lewis.jpg",
            icciRank:"9",
            country:"WEST INDIES"

        }])
    console.log('data entered')
    res.send(data)
})

app.get('/player',cors(),async (req,res) => {

    var data = await player.find()
    res.send(data)
})

// app.get('/player/:id',cors(),async (req,res) => {
//     var id=req.params.id
//     var data = await player.find({pid:id},{_id:0},{__v:0})
//     res.send(data)
// })

app.listen(3000,()=>{
    console.log('server staterd')
})