import { Fragment } from "react";
import classes from './cart.module.css'
import Modal from '../UI/modal.component';


const Cart= (props)=>{
    return(
    <Modal onClose={props.close}>
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{`$0`}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.close} className={classes["button--alt"]}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
       

)
}


export default Cart;