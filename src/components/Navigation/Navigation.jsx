import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll';

const Navigation = () => {
  const categories = useSelector(rootReducer => rootReducer.products.categories);

  const refNavigation = useRef();

  useEffect(() => {
    const nav = refNavigation.current;
    const fixed = nav.offsetTop;

    window.addEventListener(`scroll`, () => {
      window.pageYOffset > fixed ? nav.classList.add('fixed') : nav.classList.remove('fixed')
    });
  });

  return (
    <nav ref={refNavigation} className="nav" >
      <ul className="categories" >
        {
          categories && categories.map(category => (
            <li key={category.id} className="categories__item" >
              <Link 
                activeClass="active" 
                to={category.name} 
                spy={true} 
                offset={-10}
                smooth={true} >
                {category.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navigation;
