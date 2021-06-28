import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryOption, clearCart, setDeliveryAddress, showTooltip } from '../../redux/actions';
import Form from './Form';

const Header = () => {
  const dispatch = useDispatch();
  const deliveryOption = useSelector(rootReducer => rootReducer.delivery.deliveryOption);
  const address = useSelector(rootReducer => rootReducer.delivery.address);
  const totalPrice = useSelector(rootReducer => rootReducer.cart.totalPrice);
  const cart = useSelector(rootReducer => rootReducer.cart);

  const checkedDeliveryHandler = (evt) => {
    dispatch(setDeliveryOption(evt.target.value));
  };

  const cartButtonClickHandler = () => {
    if (totalPrice !== 0) {
      if (deliveryOption === 'delivery' && (!address.street || !address.house)) {
        console.log('!')
        dispatch(showTooltip(true));
        return;
      }
      dispatch(showTooltip(false));
      console.log('Заказ', cart);
      dispatch(clearCart());
      dispatch(setDeliveryAddress({street: '', house: ''}));
    }
  };

  return (
    <header className="header">
      <div className="header__cart">
        <button className="cart__button" onClick={cartButtonClickHandler}>
          <span>{totalPrice} ₽</span>
        </button>
      </div>
      
      <div className="delivery__container">
        <div>
          {
            deliveryOption === "pickup" ? (
              <h1>Самовывоз г.Москва</h1>
            ) : (
              <h1>Доставка г.Москва</h1>
            )
          }
        </div>

        <div className="delivery__option">
          <input 
            type="radio" 
            name="delivery"
            value="delivery"
            id="delivery"
            checked={deliveryOption === "delivery"}
            className="delivery"
            onChange={checkedDeliveryHandler} />
          <label htmlFor="delivery">Доставка</label>

          <input 
            type="radio" 
            name="delivery"
            value="pickup"
            id="pickup"
            checked={deliveryOption === "pickup"}
            onChange={checkedDeliveryHandler} />
          <label htmlFor="pickup">Самовывоз</label>
        </div>
      </div>

      <div>
        {
          deliveryOption === "pickup" ? (
            <div>
              <h2>Наш адрес: г. Москва, ул. Тверская, д. 10</h2>
            </div>
          ) : (
            <Form />
          )
        }
      </div>
    </header>
  )
}

export default Header;
