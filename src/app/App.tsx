import { Route, Routes } from 'react-router-dom';
import './App.css';

import Catalog from '../pages/Catalog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Catalog />} />
    </Routes>
  );
}

export default App;
