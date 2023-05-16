import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home, Landing, Detail, Form } from './views';
import NavBar from './components/NavBar/NavBar';
// const URL = 'http://localhost:3001/pokemons';

function App() {

  const location = useLocation();;
  console.log(location);

  return (
    <div className="App">
      {
        location.pathname !== '/' && <NavBar/>
      }
      <Routes>
        <Route exact path='/' element={ <Landing/> } />
        <Route path='/home' element={ <Home/> } />
        <Route exact path='/detail' element={ <Detail/> } />
        <Route exact path='/create' element={ <Form/> } />
      </Routes>
    </div>
  );
}

export default App;