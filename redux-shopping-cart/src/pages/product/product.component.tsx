import { useTypedDispatch, useTypedSelecter } from "@/hooks/store";
import { useEffect } from "react";
import { getProducts } from "@/service/api";
import { receivedProducts } from "@/pages/product/product.slice";
import { addToCart } from "@/pages/cart/cart.slice";

function ProductComponent() {
  const dispatch = useTypedDispatch();
  const products = useTypedSelecter((state) => state.products.products);
  useEffect(() => {
    getProducts().then((products) => {
      dispatch(receivedProducts(products));
    });
  }, [dispatch]);
  return (
    <div className="container mt-6">
      <div className="columns">
        {Object.values(products).map((product) => (
          <div className="column" key={product.id}>
            <div className="card">
              <div className="card-image">
                <img src={product.imageURL} alt="Placeholder" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h6 className="subtitle is-6">{product.name}</h6>
                  <p>{product.description}</p>
                  <div className="is-size-4 has-text-danger">
                    ¥{product.price}
                  </div>
                  <button
                    onClick={() => dispatch(addToCart(product.id))}
                    className="button is-success mt-4"
                  >
                    加入购物车
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductComponent;
