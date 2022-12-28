import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import {ShopContextProvider} from './context/shopContext';

function App() {
  return (
    <div className="App">
     <ShopContextProvider>
       <Router>
         <Navbar />
         <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/shop' exact element={<Shop />} />
          <Route path='/cart' exact element={<Cart />} />
         </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
