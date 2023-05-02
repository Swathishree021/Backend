const express = require('express');
const app = express();
//connecting express server to mysql db by calling a variable called mysql
const mysql = require('mysql');
const PORT = 3001;

//create a variable called db
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    datbase: 'passwordmanager' ,
});


app.get('/',(req,res) => {
     res.send("Hello world");
});

app.listen(PORT,()=> {
    console.log('server is running');
});