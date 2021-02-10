import React from 'react'
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Details from './components/Details'
import Home from './components/Home';


const App = () => {

  return (
    <BrowserRouter>
    <Route exact path ="/" component ={Home} />
    <Route path="/moviecard/:id" component={Details} />
   </BrowserRouter>
    
  );
}

export default App ;
