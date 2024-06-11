import './App.css';
import Home from './pages/home.js'
import './index.css';
import Upload from './components/upload.js';
import Form from './components/form.js'
import Navbar from './components/navbar.js';
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
    
  );
}

export default App;
