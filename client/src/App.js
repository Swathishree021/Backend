
import './App.css';
// states are variables that trigers rerenders in the page
import {useState} from "react";
function App() {

const [password, setPassword] = useState('')
const [title, setTitle] = useState('')

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
    <button> Add password</button>
   </div>
    </div>
  );
}

export default App;
