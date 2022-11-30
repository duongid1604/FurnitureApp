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
};

export type PaymentCardType = {
  cardHolderName: string;
  cardNumber: string;
  cvv: number;
  expirationDate: string;
};

export type ShippingAddressType = {
  fullName: string;
  address: string;
  zipcode: string;
  country: string;
  city: string;
  district: string;
};

export type OrderType = {
  name: string;
};

export type ReviewType = {
  name: string;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  password: string;
  cart: ProductType[];
  paymentMethods: PaymentCardType[];
  orders: OrderType[];
  reviews: ReviewType[];
  shippingAddress: ShippingAddressType[];
};
