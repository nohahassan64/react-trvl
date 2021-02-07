import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './components/Pages/Home'
import Services from './components/Pages/Services'
import Products from './components/Pages/Products'
import SignUp from './components/Pages/SignUp'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services"  component={Services} />
          <Route path="/products"  component={Products} />
          <Route path="/sign-up"  component={SignUp} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
