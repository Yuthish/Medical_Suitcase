var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var cors = require('cors')

var primaryroutes=require('./routes/primary')

const app = express();
app.use(cors());

const dbURI = 'mongodb+srv://jonode:jonode2001@cluster0.e29hp.mongodb.net/med-sui'
mongoose.connect(dbURI, { useNewUrlParser:true, useUnifiedTopology:true })
 .then((result)=> app.listen(3000,function(){console.log('Server has started.')}))
 .catch((err)=> console.log(err))

 

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(primaryroutes);



app.use((req, res)=>{
    res.status(404).send('<h1>o_O OOPS!</h1>');
});