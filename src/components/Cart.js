import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

 const Cart = () => {
const cartItems = useSelector((store) => store.cart.items)

const dispatch = useDispatch();

const handleClearCart =() => {
      dispatch(clearCart());
}
console.log(cartItems);
//const store = useSelector((store) => store);

  return (
    <div>
        <h1 className="cart">Cart Items - ({cartItems.length}) </h1>
        <button className="clear-btn"
          onClick={() => handleClearCart()}>
            Clear Cart
        </button>
        <div className="cart-display">{cartItems.map((item) => (
            <FoodItem key={item.id} {...item} /> 
        ))}
        </div>
    </div>



  );
};

 export default Cart;