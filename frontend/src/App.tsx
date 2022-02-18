import Categories from "./components/Categories";
import "./App.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Navigation from "./components/Navigation";
import AddProduct from "./components/AddProduct";


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <div className="Content">
        <Routes>
          <Route path="/" element={<Navigate to="/categories" />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<Product />} />
          <Route path="categories" element={<Categories />} />
          <Route path="add-product" element={<AddProduct />} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
