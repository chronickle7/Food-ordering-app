import classes from './mealItems.module.css';
import MealAdding from './mealAdding.component';

const mealItems = (props) =>{
    const item= props.items
    return(
        <li className={classes.meal}>
            <div>
                <h3>{item.name}</h3>
                <div className={classes.description}>{item.description}</div>
                <div className={classes.price}>{`$${item.price}`}</div>
            </div>
            <div><MealAdding /></div>
    
        </li>   
)

}


export default mealItems;