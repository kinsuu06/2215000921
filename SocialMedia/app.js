const express = require('express');

const app = express();
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.listen(8080,()=>{
    console.log("Server is running on port 8080")
})