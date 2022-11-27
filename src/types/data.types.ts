export type ProductType = {
  name: string;
  price: number;
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
