import { Fragment } from "react";
import Header from "./components/header/header.component";
import Meals from "./components/meals/meals.component";
import Cart from "./components/Cart/cart.component";
import { useState } from "react";
import { CartProvider } from "./store/cart-context";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
  const showCartHandler = () => {
    setDisplayCart(true);
  };
  const hideCartHandler = () => {
    setDisplayCart(false);
  };

  return (
    <CartProvider>
      <Fragment>
        {displayCart && <Cart close={hideCartHandler} />}
        <Header show={showCartHandler} hide={hideCartHandler} />
        <Meals />
      </Fragment>
    </CartProvider>
  );
}

export default App;
