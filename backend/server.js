const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require('./routes/userRoutes');
require('./connection');

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use('/users', userRoutes);

app.listen(5000, () =>{
    console.log("server is running...")
})