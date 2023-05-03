
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
    <input type="text" placeholder='Ex.password123'/>
    <input type="text" placeholder='Ex.vapt'/>
    <button> Add password</button>
   </div>
    </div>
  );
}

export default App;
