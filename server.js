const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());
app.use(cors());
//db config
const db = require('./config/keys').mongoURI;

const port = process.env.PORT || 5000;

//connect to mongo db
mongoose
    .connect(db, { useUnifiedTopology: true ,useNewUrlParser: true })
    .then(() => console.log('Mongodb connected'))
    .catch((err) => console.log(err));

// use routes
app.use('/api/items', items);

app.listen(port, () => console.log(`Server started on ${port}`));