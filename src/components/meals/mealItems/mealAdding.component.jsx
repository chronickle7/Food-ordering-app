import { Fragment } from "react";
import classes from "./mealAdding.module.css";
import Input from "../../UI/input.component";

const MealAdding = () => {
  return (
    <Fragment>
      <form className={classes.form}>
        <Input
          label="Amount"
          input={{ type: "number", min: "1", max: "5", defaultValue: "1" }}
        />
        <button className={classes.button}>+ Add</button>
      </form>
    </Fragment>
  );
};

export default MealAdding;
