import logo from './logo.svg';

import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';


import { Link, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/list" component={List} />
      
    </div>
  );
}

export default App;
