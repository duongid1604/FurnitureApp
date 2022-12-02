import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, FONT_SIZE} from '../constants';
import {useAppDispatch, useAppSelector} from '../hooks';
import {loginThunk} from '../redux/thunks/auth.thunks';
import {
  BoardingScreen,
  CartScreen,
  CheckoutScreen,
  CongratsScreen,
  ForgotPasswordScreen,
  LoadingScreen,
  LoginScreen,
  OrderScreen,
  ProductScreen,
  SettingScreen,
  SignupScreen,
} from '../screens';
import SearchScreen from '../screens/SearchScreen';

import {RootStackParamList} from '../types';
import HomeNavigator from './HomeNavigator';
import PaymentMethodNavigator from './PaymentMethodNavigator';
import ReviewNavigator from './ReviewNavigator';
import ShippingNavigator from './ShippingNavigator';

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const dispatch = useAppDispatch();
  const [initializing, setInitializing] = useState(true);

  const {isSignedIn, isLoading} = useAppSelector(state => state.auth);

  useEffect(() => {
    const getUid = async () => {
      try {
        const currUserUid = await AsyncStorage.getItem('userUid');
        if (!currUserUid) {
          setInitializing(false);
          return;
        }
        await dispatch(loginThunk({oldUserUid: currUserUid}));
        setInitializing(false);
      } catch (error) {}
    };
    getUid();
  }, [dispatch]);

  let initialRoutename: keyof RootStackParamList = 'Boarding';

  if (isSignedIn && !isLoading) {
    initialRoutename = 'HomeNavigator';
  }

  return (
    <>
      {initializing ? (
        <LoadingScreen />
      ) : (
        <NavigationContainer>
          <RootStack.Navigator
            initialRouteName={initialRoutename}
            screenOptions={{
              headerTitleAlign: 'center',
              headerTitleStyle: styles.headerTitle,
            }}>
            {isSignedIn ? (
              <>
                <RootStack.Screen
                  name="HomeNavigator"
                  component={HomeNavigator}
                  options={{headerShown: false}}
                />
                <RootStack.Screen
                  name="Search"
                  component={SearchScreen}
                  options={{headerTitleAlign: 'center'}}
                />
                <RootStack.Screen
                  name="Product"
                  component={ProductScreen}
                  options={{headerShown: false}}
                />
                <RootStack.Screen
                  name="Cart"
                  component={CartScreen}
                  options={{headerTitleAlign: 'center', title: 'My cart'}}
                />
                <RootStack.Screen name="Checkout" component={CheckoutScreen} />
                <RootStack.Screen name="Congrats" component={CongratsScreen} />
                <RootStack.Screen
                  name="PaymentNavigator"
                  component={PaymentMethodNavigator}
                  options={{
                    headerShown: false,
                  }}
                />
                <RootStack.Screen
                  name="MyOrders"
                  component={OrderScreen}
                  options={{headerTitle: 'My orders'}}
                />
                <RootStack.Screen name="Setting" component={SettingScreen} />
                <RootStack.Screen
                  name="ShippingNavigator"
                  component={ShippingNavigator}
                  options={{
                    headerShown: false,
                  }}
                />
                <RootStack.Screen
                  name="ReviewNavigator"
                  component={ReviewNavigator}
                  options={{
                    headerShown: false,
                  }}
                />
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
                <RootStack.Screen
                  name="ForgotPassword"
                  component={ForgotPasswordScreen}
                  options={{headerShown: false}}
                />
              </>
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY_18,
  },
});
