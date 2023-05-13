import  "./App.css";


// states are variables that trigers rerenders in the page
// add a fun "useEffect" make the api call every time the page rerenders
import {useState, useEffect} from "react";

//axios is a library helps connecting to api to api
import Axios from "axios";


function App() {

const [password, setPassword] = useState("");
const [title, setTitle] = useState("");
//create state which represents all the passwords
const [passwordList,setPasswordList] = useState([]);


useEffect(()=>{
  //pass url for the Api, axios get request recieves the data,data would be recieved by a variable called response
    Axios.get('http://localhost:3001/showpasswords').then((response) => {
    // console.log(response.data);
    //basically we have state which contain the value all the data we have in database
    setPasswordList(response.data)
});
},[])

//calling a function
const addPassword = () => {
  Axios.post('http://localhost:3001/addpassword',{
    password: password,
    title: title,
  });
};

//Decrypt Password function
const decryptPassword =(encryption) => {
 //passing the iv & encryption using post request axios to backend to decrypt 
 Axios.post("http://localhost:3001/decryptpassword", 
 {password: encryption.password, iv: encryption.iv,
}).then((response) => {
  setPasswordList(
    passwordList.map((val) => {
      return val.id === encryption.id ? {
        id: val.id,
        password: val.password,
        title: response.data,
        iv: val.iv,
      }
      :val;
    })
  );
});
};


  return (
    <div className="App">
   {/* Adding form for new passwords */}
   <div className="AddingPassword">
    <input type="text"
     placeholder="Ex.password123" 
     onChange={(event)=>{setPassword(event.target.value);
    }}
    />
    <input 
    type="text" 
    placeholder="Ex.vapt"
    onChange={(event)=>{setTitle(event.target.value);
    }}
    />
    {/* api request on clicking add password button  */}
    <button onClick={addPassword}>Add Password</button>
   </div>


   {/* Displaying all the passwords */}
   <div className="Passwords">
    {/* render all the passwords  */}
    {passwordList.map((val, key) => {
      //for render title
      // return <h1> {Val.title} </h1>;
    // for rendering passwords
     //return <h1> {Val.password} </h1>;
     return (
     <div className="password" 
     onClick={() => {
      decryptPassword({password: val.password, 
        iv: val.iv,
        id: val.id,
      });
     }}
     key ={key}
     >  
     <h4>{val.title}</h4>
     </div>
     );
    })}


   </div>
    </div>
  );
}

export default App;

