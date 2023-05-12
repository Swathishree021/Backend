import  "./App.css";


// states are variables that trigers rerenders in the page
import {useState} from "react";

//axios is a library helps connecting to api to api
import Axios from "axios";


function App() {

const [password, setPassword] = useState('');
const [title, setTitle] = useState('');

//calling a function
const addPassword = () => {
  Axios.post('http://localhost:3001/addpassword',{
    password: password,
    title: title,
  });
};

  return (
    <div className="App">
   {/* Adding form for new passwords */}
   <div className="Adding Password">
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
    <button onClick={addPassword}>Add password</button>
   </div>
    </div>
  );
}

export default App;

