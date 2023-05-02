
import './App.css';

function App() {
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
