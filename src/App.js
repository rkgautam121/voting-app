import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Component/Home';
import Verification from './Component/Verification';
import Evm from './Component/Evm';


function App() {
  return (
    <Router>
    <div className="App">
     <Route exact path="/" component={Home} />
     <Route exact path="/" component={ Verification} />
     <Route exact path="/"component={Evm}/>
    </div>
    </Router>
  );
}

export default App;
