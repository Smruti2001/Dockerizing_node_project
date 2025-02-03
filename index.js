const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();


app.get('/home', (req, res) => {
    res.json({message: 'Welcome!'})
})

app.listen(process.env.PORT, () => console.log("Server listening on PORT 3000"));