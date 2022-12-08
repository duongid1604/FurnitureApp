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
  review: ReviewType[];
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
};

export type OrderType = {
  id: string;
  products: ProductType[];
  orderCode: number;
  totalQty: number;
  totalPrice: number;
  status: OrderTabType;
  date: string;
};

export type ReviewType = {
  comment: string;
  // product: ProductType[];
  name: string;
  rate: number;
  image: string;
  price: number;
  id: string;
  // rating: number;
  // date: string;
};

export type CartType = {
  products: ProductType[];
  totalQty: number;
  totalPrice: number;
};

export type NotiType = {
  orders: OrderType[];
  hasDeliveryNoti: boolean;
  hasSalesNoti: boolean;
  hasNewArrivalsNoti: boolean;
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
  selectedAddress: ShippingAddressType | null;
  selectedPaymentMethod: PaymentCardType | null;
  notification: NotiType;
};

export type AccountType = 'normal' | 'social';

export type Location = {
  place_id: string;
  osm_id: string;
  osm_type: string;
  lat: string;
  lon: string;
  boundingbox: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
  class: 'place' | string;
  type: 'city' | 'state' | 'country' | string;
  display_name: string;
  display_place: string;
  display_address: string;
  address: {
    name: string;
    country: string;
    country_code: string;
    state?: string;
    city?: string;
    postcode?: string;
  };
};
