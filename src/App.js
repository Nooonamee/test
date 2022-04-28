import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import ProductDetails from "./pages/Product-details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-details' element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
