import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {LoadingSpinner} from '../components';
import {useAppDispatch, useAppSelector} from '../hooks';
import {
  addUid,
  disableLoading,
  enableLoading,
} from '../redux/reducers/authSlice';
import {
  BoardingScreen,
  CartScreen,
  CheckoutScreen,
  CongratsScreen,
  LoginScreen,
  ProductScreen,
  SignupScreen,
} from '../screens';
import {RootStackParamList} from '../types';
import HomeNavigator from './HomeNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();

  const {isSignedIn, isLoading} = useAppSelector(state => state.auth);

  useEffect(() => {
    const getUid = async () => {
      try {
        dispatch(enableLoading());
        const data = await AsyncStorage.getItem('userUid');
        dispatch(disableLoading());
        if (!data) {
          return;
        }
        dispatch(addUid(data));
      } catch (error) {}
    };
    getUid();
  }, [dispatch]);

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="Boarding">
        {isSignedIn ? (
          <>
            <RootStack.Screen
              name="HomeNavigator"
              component={HomeNavigator}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Product"
              component={ProductScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen name="Cart" component={CartScreen} />
            <RootStack.Screen name="Checkout" component={CheckoutScreen} />
            <RootStack.Screen name="Congrats" component={CongratsScreen} />
          </>
        ) : (
          <>
            <RootStack.Screen
              name="Boarding"
              component={BoardingScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Signup"
              component={SignupScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
