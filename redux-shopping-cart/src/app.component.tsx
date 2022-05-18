import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CartComponent from "./pages/cart/cart.component";
import ProductComponent from "./pages/product/product.component";
import styles from "./app.module.css";
import { useTypedSelecter } from "@/hooks/store";
import { getProductsCount } from "@/pages/cart/cart.slice";

function AppComponent() {
  const numItems = useTypedSelecter(getProductsCount);
  return (
    <BrowserRouter>
      <div className={styles.header}>
        <header className="container">
          <nav>
            <Link className={styles.navLink} to="/">
              商品
            </Link>
            <Link className={styles.navLink} to="/cart">
              购物车 <span className="tag is-link is-small">{numItems}</span>
            </Link>
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<ProductComponent />} />
        <Route path="/cart" element={<CartComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppComponent;
