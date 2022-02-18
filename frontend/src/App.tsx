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
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
