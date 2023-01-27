const express = require('express')
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(express.json())
app.use(cors())
const Travel = require('./models/Travel.js')


app.get('/travels', (req, res) => {
    Travel.find({}, (err, foundTravel) => {
        res.json(foundTravel) 
    })
})

app.post('/travels', (req, res) => {
    Travel.create(req.body, (err, createdTravel) => {
        res.json(createdTravel)
    })
})

app.delete('/travels/:id', (req, res) => {
    Travel.findByIdAndRemove(req.params.id, (err, deletedTravel) => {
      res.json(deletedTravel)
    })
  })

  app.put('/travels/:id', (req, res) => {
    Travel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedTravel) => {
      res.json(updatedTravel)
    })
  })

  app.listen(3500, ()=> {
    console.log('listening...');
})

mongoose.connect('mongodb://localhost:27017/travel-log')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});