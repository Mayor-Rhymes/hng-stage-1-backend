const express = require('express');
const dotenv = require('dotenv');
const slackRoute = require('./routes/slackRoute');

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));






app.get('/', (req, res) => {

    res.status(200).json({
        message: "Welcome to my backend"
    })
});


app.use('/api', slackRoute);





app.listen(port, () => {

    console.log(`Listening on http://localhost:${port}`);

})