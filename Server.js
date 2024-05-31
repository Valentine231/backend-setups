const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const { use } = require('./routes/goalRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/goals', require('./routes/goalRoutes'));

app.use(errorHandler)


mongoose.connect(process.env.MONGO_URI, {

}).then(() => {
    app.listen(port, () => {
        console.log(`mongo db connected & running on port ${port}`);
    });
}).catch((err) => {
    console.log(err);
});





