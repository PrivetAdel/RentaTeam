import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MenuList from './components/MenuList';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="app">
      <Header />
      <Navigation />
      <MenuList />
      <Footer />
    </div>
  );
}

export default App;
