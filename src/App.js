import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import SignUp from './pages/SignUp'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/services"  component={Services} />
          <Route path="/products"  component={Products} />
          <Route path="/sign-up"  component={SignUp} />
          <Route path="/"  component={Home} />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
