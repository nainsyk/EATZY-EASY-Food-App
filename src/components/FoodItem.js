
import { IMG_CDN_URL} from "../constants";

 const FoodItem = ({  name, imageId, category, inStock, price }) => {
   return (
    <div className="cart-container">
       <div className="cart-items">
           <img src={ IMG_CDN_URL + imageId } alt={name} />
           <h3>{name}</h3>
           <h5>{category}</h5>
           <h5>Total Item : {inStock}</h5>
           <h5>Cost : ₹ {price / 100}</h5>
           
       </div>
     </div>
   );
};

export default FoodItem;

