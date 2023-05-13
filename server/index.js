
const express = require('express');
const app = express();

//connecting express server to mysql db by calling a variable called mysql
const mysql = require('mysql');

// to parser json object recieved from the frontend
const cors =require('cors');
const PORT = 3001;

// Acessed to encrypt function and decrypt function
const {encrypt, decrypt} = require('./EncryptionHandler');


//allows connection b/w to servers in a same computer
app.use(cors());

//able to reiceve json on our backend
app.use(express.json());

//create a variable called db
const db = mysql.createConnection({   
    user: "root",
    host: "localhost",
    password: "password",
    database: "passwordmanager" ,                 
});

//routes are used to directed to different pages 

app.post('/Addpassword',(req,res) => {
  const {password, title} = req.body;
 
// before inserting encrypt the password
const hashedPassword = encrypt(password);
     
  db.query(
"INSERT INTO passwords (password, title, iv) VALUES (?,?,?)",
// passing both iv & hashed password
[hashedPassword.password,title,hashedPassword.iv],
(err,result) => {
    if (err) {
        console.log(err);
    }else {
        res.send("Success");
    }
}
); 
});

//display passwords in frontend
//create get route & a callback function
app.get("/showpasswords", (req,res) => {
db.query("SELECT * FROM passwords;", (err,result) => { 
if (err) {
    console.log(err);
}else { 
//data recieved from db is stored in results
    res.send(result);
}
});
});

//create a Route 
app.post('/decryptpassword', (req,res) => {
res.send(decrypt(req.body));
})


app.listen(PORT,()=> {
    console.log('server is running');
});