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
  PaymentNavigator: undefined;
};
export type PaymentMethodStackParamList = {
  PaymentMethod: undefined;
  AddPayment: undefined;
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

export type ProfileScreenProps = StackScreenProps<
  ProfileStackParamList,
  'Profile'
>;

export type ProductScreenProps = StackScreenProps<
  RootStackParamList,
  'Product'
>;

export type ProductNavigationProp = ProductScreenProps['navigation'];

export type ProductRouteProp = ProductScreenProps['route'];

export type PaymentScreenProps = StackScreenProps<
  PaymentMethodStackParamList,
  'PaymentMethod'
>;

export type AddPaymentProps = StackScreenProps<
  PaymentMethodStackParamList,
  'AddPayment'
>;

export type SignupScreenProps = StackScreenProps<RootStackParamList, 'Signup'>;

export type SignupNavigationProp = SignupScreenProps['navigation'];

export type SignupRouteProp = SignupScreenProps['route'];

export type LoginScreenProps = StackScreenProps<RootStackParamList, 'Login'>;

export type LoginNavigationProp = LoginScreenProps['navigation'];

export type LoginRouteProp = LoginScreenProps['route'];
