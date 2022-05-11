import classes from './headerCart.module.css';
import CartIcon from '../Cart/cartIcon.component';

const HeaderCart = (props) => {

  return (
   <button onClick={props.showCart} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>0</span>
    </button>
  );
};

export default HeaderCart;
