import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';


import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Register />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/list" element={<List />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
