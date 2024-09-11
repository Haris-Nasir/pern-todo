import React from 'react';
import Inputtodo from "./components/Inputtodo";
import Listtodo from "./components/Listtodo";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navig';



function App() {
  return (
 <Router>
  <div className='Container'>
    <Navigation/>
    <Routes>
    <Route path='/' element={<Listtodo/>}/>
    <Route path='/add-todo' element={<Inputtodo/>}/>

    </Routes>
  </div>
 </Router>
  );
}

export default App;
