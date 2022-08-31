import logo from './logo.svg';
import Login from './components/Login'
import Register from './components/Register'
import List from './components/List'

import { Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <main>
        <Route exact path="/">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/list">
          <List/>
        </Route>
      </main>
    </div>
  );
}

export default App;
