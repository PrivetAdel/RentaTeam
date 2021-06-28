import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCard, plusCartItem, minusCartItem, removeCartItem } from '../../redux/actions';

const MenuItem = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector(rootReducer => rootReducer.cart.cart);

  const addToCartHandler = () => {
    dispatch(addToCard(product));
  };

  const onPlusItem = () => {
    dispatch(plusCartItem(product.id));
  };

  const onMinusItem = () => {
    if (cart[product.id].count === 1) {
      dispatch(removeCartItem(product.id));
    } else {
      dispatch(minusCartItem(product.id));
    }
  };

  return (
    <> 
      { product && (
          <div className="card__container">
            <div className="card__img-cotainer" >
              <img src={product.img} alt={product.name} className="card__img" />
              
              {
                cart && cart.hasOwnProperty(product.id) ? (
                  <div className="card__inCart">
                    <button 
                      onClick={onMinusItem}>
                      -
                    </button>
                    <span>{cart[product.id].count}</span>
                    <button onClick={onPlusItem}>+</button>
                  </div>
                ) : <button className="card__addToCart" onClick={addToCartHandler}>+</button>
              }
            </div>
            <div className="card__info-cotainer" >
              <p>{product.name}</p>
              <p><span>{product.price} ₽</span></p>
            </div>
          </div>
        )}
    </>
  )
}

export default MenuItem;
