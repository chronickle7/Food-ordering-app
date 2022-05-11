import { Fragment } from "react";
import HeaderCart from "./headerCart.component";
import classes from "./header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = (props) => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h1 className="title">Food-Order</h1>
        <HeaderCart showCart={props.show} hideCart={props.hide} />
      </div>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="a table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
