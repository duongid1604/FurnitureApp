import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {fetchProducts} from '../../redux/reducers/productSlice';
import {useAppDispatch, useAppSelector} from '../../hooks';

const CartScreen = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(state => state.products.products);

  console.log(products, 'products');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <View>
      <Text>CartScreen</Text>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
