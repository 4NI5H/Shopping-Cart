import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route exact path='/cart' element={<Cart />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
