import { createContext ,useReducer} from "react";


const CartContext= createContext({
    items:[],
    totalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{}
})

const InitialState= {
    item:[],
    totalAmount:0,
}

const cartReducer = (state,action) =>{
    const {type,payload} = action;
    if(type==='ADD'){

}
    else if(type==='REMOVE'){

}
    return{

}
}


export const CartProvider = (props)=>{

    const[cartState,dispatchCartAction]=useReducer(cartReducer,InitialState);
    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:'ADD',payload:item})
}
    const removeItemFromCartHandler= (id)=>{
        dispatchCartAction({type:'REMOVE',payload:id})
}

    const cartContext= {
        items:[],
        totalAmount:0,
        addItem:addItemToCartHandler,
        removeItem: removeItemFromCartHandler
}
    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}


export default CartContext;