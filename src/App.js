import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter , Switch , Route} from 'react-router-dom'
import { GlobalStyle} from "./components/globalStyle"
import Home from './pages/Home'
import Services from './pages/Services'
import Products from './pages/Products'
import SignUp from './pages/SignUp'

function App() {
  return (
    <div>
      <BrowserRouter>
      <GlobalStyle />
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
