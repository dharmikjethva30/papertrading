const mongoose = require('mongoose');
// const fetch_data = require('./utils/fetch-data');
const express = require('express');
const dotenv = require("dotenv")
const app = express();
const order = require("./routes/order")
dotenv.config()
const PORT = process.env.PORT || 3000;


const connect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Connected to database");
        })
        .catch((err) => {
            console.log("[ERROR]")
            console.log(err);
            throw new Error
        })
}
app.use(express.json())
app.use("/order", order)



app.listen(PORT, () => {
    connect()
    console.log("Server Started!");
})