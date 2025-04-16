import { Route, Routes } from 'react-router-dom';
import './App.css';

import Catalog from '../pages/Catalog';
import Cart from '../pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
