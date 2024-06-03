import React,{useState,createContext} from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Nav from './Components/Navbar/Nav';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import HomePage from './Components/HomePage/HomePage';

export const store = createContext();

function App() {
  const [token,setToken] = useState(null);
  return (
    <div className="">
      <store.Provider value={[token,setToken]}>
        <BrowserRouter>
         <Nav path='/login' element={<Login/>}/>
          <Routes>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
      </store.Provider>
    </div>
  );
}

export default App;
