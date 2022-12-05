import {OrderTabType} from './constant.types';

export type ProductType = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isFavourite: boolean;
  popular: number;
  rate: number;
  review: number;
  qty: number;
};

export type PaymentCardType = {
  id: string;
  cardHolderName: string;
  cardNumber: number;
  cvv: number;
  expirationDate: string;
};

export type ShippingAddressType = {
  id: string;
  fullName: string;
  address: string;
  zipcode: number;
  country: string;
  city: string;
  district: string;
};

export type OrderType = {
  id: string;
  orderCode: number;
  totalQty: number;
  totalPrice: number;
  status: OrderTabType;
  date: string;
};

export type OrderItemProps = {
  id: string;
  orderCode: number;
  totalQty: number;
  totalPrice: number;
  status: OrderTabType;
  date: string;
  currentTab: OrderTabType;
};

export type ReviewType = {
  name: string;
};

export type CartType = {
  products: ProductType[];
  totalQty: number;
  totalPrice: number;
};

export type NotiType = {
  content: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  cart: CartType;
  paymentMethods: PaymentCardType[];
  orders: OrderType[];
  reviews: ReviewType[];
  shippingAddresses: ShippingAddressType[];
  avatar: string;
  type: AccountType;
  favourite: ProductType[];
  selectedAddress: ShippingAddressType | undefined;
  selectedPaymentMethod: PaymentCardType | undefined;
  notifications: NotiType[];
};

export type AccountType = 'normal' | 'social';
