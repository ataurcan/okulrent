import React from 'react';
import "./Total.css";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Total() {
   
    const[{basket}, dispatch] = useStateValue();
    
    return (
        
        <div className="total">
            

            
                
            <p>
                Total: {basket.length} car: <strong>{getBasketTotal(basket)}</strong>
            </p>
                

           
         
        <button className="button_total">
            Rent
        </button>
        </div>
    )
}

export default Total
