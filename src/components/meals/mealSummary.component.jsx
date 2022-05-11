import classes from './mealSummary.module.css';

const MealSummary = ()=>{
    return(
        <div className={classes.summary}>
            <h2>Summary of our web App</h2>
        <p>Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.</p>
        <p>All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!</p>
        </div>
        
)
}

export default MealSummary;