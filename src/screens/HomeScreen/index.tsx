import React from 'react';

import {CustomScreenContainer} from '../../components';
import Category from './components/Category';
import Header from './components/Header';
import ProductList from './components/ProductList';

const HomeScreen = () => {
  return (
    <CustomScreenContainer>
      <Header />
      <Category />
      <ProductList />
    </CustomScreenContainer>
  );
};

export default HomeScreen;
