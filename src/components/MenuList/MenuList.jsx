import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, fetchProducts } from '../../redux/actions';
import { Element } from 'react-scroll';
import MenuItem from '../MenuItem';

const MenuList = () => {
  const dispatch = useDispatch();
  const categories = useSelector(rootReducer => rootReducer.products.categories);
  const products = useSelector(rootReducer => rootReducer.products.products);
  const deliveryOption = useSelector(rootReducer => rootReducer.delivery.deliveryOption);

  useEffect(() => {
    if (deliveryOption === "delivery") {
      dispatch(setProducts(Object.entries(products).reduce((newObj, product) => {
            if (product[1].delivery === true) {
              newObj[product[0]] = product[1]
            }
            return newObj;
          }, {})))
    } else { dispatch(fetchProducts()) }
  }, [deliveryOption]);

  return (
    <section className="menu__container">
      {
        categories && categories.map(category => (
          <Element className="category" name={category.name} key={category.id}>
            <h2>{category.name}</h2>
            <div className="category__list">
              {
                category.products
                  .map(item => <MenuItem key={item} product={products[item]} />)
              }
            </div>
          </Element>
        ))
      }
    </section>
  );
};

export default MenuList;
