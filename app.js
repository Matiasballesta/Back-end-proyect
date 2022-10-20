require("dotenv").config()
const express = require('express');
const cors = require('cors');
const app = express()
const dbConnect = require('./config/mongo')

app.use(cors());
app.use(express.json());
app.use(express.static("storage"))
//Permite evitar error de origen cruzado entre navegadores

const port = process.env.PORT || 3000;


app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
})

dbConnect();