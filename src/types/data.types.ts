export type UserType = {
  name: String;
  email: String;
  password: String;
};

export type ShippingAddressType = {
  fullName: string;
  address: string;
  zipcode: string;
  country: string;
  city: string;
  district: string;
};

export type PaymentCardType = {
  cardHolderName: string;
  cardNumber: string;
  cvv: number;
  expirationDate: string;
};
