import React from 'react'
import Grid from "@material-ui/core/Grid";
import "./Basketcar.css";
import { useStateValue } from "./StateProvider";

function Basketcar({ model, image, price, city, type, hideButton}) {
  const[{basket}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        model: model,
    })
}


    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{model}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <br></br>
                    <strong>{city}</strong>
                    <br></br>
                    <strong>{type}</strong>
                </p>
               
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
                
               
            </div>
        </div>
    )
}

export default Basketcar
