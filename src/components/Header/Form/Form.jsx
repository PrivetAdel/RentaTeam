import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeliveryAddress, showTooltip } from '../../../redux/actions';

const Form = () => {
  const dispatch = useDispatch();
  const [address, setAddress] = useState({street: '', house: ''});
  const tooltip = useSelector(rootReducer => rootReducer.delivery.showTooltip);

  const changeAddressHandler = (evt) => {
    dispatch(showTooltip(false));
    setAddress({...address, [evt.target.id]: evt.target.value});
    dispatch(setDeliveryAddress({...address, [evt.target.id]: evt.target.value}));
  };
  
  return (
    <form className="delivery__form">
      <div>
        <div>
          <label htmlFor="street">Улица</label>
          <input 
            required
            id="street"
            type="text"
            value={address.street}
            onChange={changeAddressHandler}
            placeholder="Остоженка" />
        </div>
        
        <div>
          <label htmlFor="house">Дом</label>
          <input 
            required
            id="house"
            type="text"
            value={address.house}
            onChange={changeAddressHandler}
            placeholder="10" />
        </div>
      </div>
      

      {
        tooltip && <div className="delivery__tooltip-container"><p className="delivery__form-tooltip">Нужно заполнить для оформления доставки</p></div>
      }

    </form>
  )
}

export default Form;
