import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="Navigation">
      <ul>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/add-product">Add product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;