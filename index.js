const express =require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000 ;

// Middleware//
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bistro is cooking');
})


app.listen(port, () => {
    console.log(`Bistro is cooking on port : ${port}`);
})