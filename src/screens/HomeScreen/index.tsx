import React from 'react';
import {StatusBar} from 'react-native';

import {CustomScreenContainer} from '../../components';
import Category from './components/Category';
import Header from './components/Header';
import ProductList from './components/ProductList';

const HomeScreen = () => {
  return (
    <CustomScreenContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <Category />
      <ProductList />
    </CustomScreenContainer>
  );
};

export default HomeScreen;
