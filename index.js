const express = require('express');

const app = express();


app.get('/home', (req, res) => {
    res.json({message: 'Welcome!'})
})

app.listen(3000, () => console.log("Server listening on PORT 3000"));