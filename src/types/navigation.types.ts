import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
  Boarding: undefined;
  Signup: undefined;
  Login: undefined;
  HomeNavigator: undefined;
  Product: undefined;
  Cart: undefined;
  Checkout: undefined;
  Congrats: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Favorite: undefined;
  Notification: undefined;
  ProfileNavigator: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
  Order: undefined;
  ShippingAddress: undefined;
  MyReviews: undefined;
  Setting: undefined;
  PaymentMethod: undefined;
};

export type BoardingScreenProps = StackScreenProps<
  RootStackParamList,
  'Boarding'
>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;

export type CongratsScreenProps = CompositeScreenProps<
  StackScreenProps<RootStackParamList, 'Congrats'>,
  StackScreenProps<ProfileStackParamList>
>;
