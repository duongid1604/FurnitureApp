import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {EditFieldType} from './constant.types';
import {ProductType} from './data.types';

export type RootStackParamList = {
  Boarding: undefined;
  Signup: undefined;
  Login: undefined;
  ForgotPassword: undefined;
  Product: {data: ProductType};
  Cart: {qty: number} | undefined;
  Checkout: undefined;
  Congrats: undefined;
  Loading: undefined;
  PaymentNavigator: NavigatorScreenParams<PaymentMethodStackParamList>;
  MyOrders: undefined;
  HomeNavigator: NavigatorScreenParams<HomeTabParamList>;
  ShippingNavigator: NavigatorScreenParams<ShippingAddressStackParamList>;
  ReviewNavigator: NavigatorScreenParams<ReviewStackParamList>;
  SettingNavigator: NavigatorScreenParams<SettingStackParamList>;
  Search: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Favorite: undefined;
  Notification: undefined;
  Profile: undefined;
};

export type ShippingAddressStackParamList = {
  ShippingAddress: undefined;
  AddShippingAddress: undefined;
};

export type SettingStackParamList = {
  Setting: undefined;
  EditProfile: {field: EditFieldType};
};

export type PaymentMethodStackParamList = {
  PaymentMethod: undefined;
  AddPayment: undefined;
  Review: undefined;
};

export type ReviewStackParamList = {
  MyReview: undefined;
  Review: undefined;
};

export type ReviewNavigatorProps = StackScreenProps<
  RootStackParamList,
  'ReviewNavigator'
>;

export type BoardingScreenProps = StackScreenProps<
  RootStackParamList,
  'Boarding'
>;

export type CongratsScreenProps = StackScreenProps<
  RootStackParamList,
  'Congrats'
>;

export type ProfileNavigationProp = ProfileScreenProps['navigation'];

export type ProductScreenProps = StackScreenProps<
  RootStackParamList,
  'Product'
>;

export type ProductNavigationProp = ProductScreenProps['navigation'];
export type HomeScreenNavigationProps = HomeScreenProps['navigation'];

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

export type PaymentNavigationProp = PaymentScreenProps['navigation'];

export type PaymentRouteProp = PaymentScreenProps['route'];
export type ForgotPasswordScreenProps = StackScreenProps<
  RootStackParamList,
  'ForgotPassword'
>;

export type ForgotPasswordNavigationProp =
  ForgotPasswordScreenProps['navigation'];

export type SettingScreenProps = StackScreenProps<
  SettingStackParamList,
  'Setting'
>;

export type SettingScreenNavigationProps = SettingScreenProps['navigation'];

export type EditProfileScreenProps = StackScreenProps<
  SettingStackParamList,
  'EditProfile'
>;

export type CartScreenProps = StackScreenProps<RootStackParamList, 'Cart'>;

export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Home'>,
  StackScreenProps<RootStackParamList>
>;
export type ProfileScreenProps = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, 'Profile'>,
  StackScreenProps<RootStackParamList>
>;

export type OrderScreenProps = StackScreenProps<RootStackParamList, 'MyOrders'>;

export type OrderNavigationProp = OrderScreenProps['navigation'];
