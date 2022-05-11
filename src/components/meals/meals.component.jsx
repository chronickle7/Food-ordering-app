import MealSummary from "./mealSummary.component";
import AvailableMeals from "./availableMeals.component";
import { Fragment } from "react";
const Meals = () => {
  return (
    <Fragment>
      <MealSummary />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
