export type FontWeightType =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

export type EditFieldType = 'Name' | 'Password';

export enum OrderTabEnum {
  delivered = 'delivered',
  processing = 'processing',
  canceled = 'canceled',
}

export type OrderTabType =
  | OrderTabEnum.delivered
  | OrderTabEnum.processing
  | OrderTabEnum.canceled;

export type NavigateToAddAddressScreen = 'shippingAddress' | 'checkout';
export type NavigateToAddPaymentScreen = 'paymentMethods';
