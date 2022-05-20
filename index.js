const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get(express.json());

app.get('/', (req, res) => {
    res.send('warehouse is running')
})

app.listen(port, () => {
    console.log('warehouse management system is running on port',port);
})