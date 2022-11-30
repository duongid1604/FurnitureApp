import {yupResolver} from '@hookform/resolvers/yup';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import * as yup from 'yup';
import {BigCustomButton, CustomInput} from '../../components';
import NewCreditCard from '../../components/NewCreditCard';
import {COLORS} from '../../constants';
import usePaymentScreen from '../../hooks/screens/usePaymentScreen';
import {AddPaymentField, AddPaymentProps} from '../../types';
import {scaleUI} from '../../utils';

const schema = yup
  .object({
    cardHolderName: yup.string().required('Card Holder Name is required!'),
    cardNumber: yup
      .string()
      .min(16, 'Your password must be at least 16 characters.')
      .required('Card number is required!'),
    cvv: yup
      .string()
      .min(3, 'Your password must be at least 8 characters.')
      .required('Cvv is required!'),
    expirationDate: yup
      .string()
      .min(5, 'Validate Date')
      .required('Expiration Date is required!'),
  })
  .required();

const AddPaymentScreen = ({}: AddPaymentProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<AddPaymentField>({resolver: yupResolver(schema)});

  const {onUpdate} = usePaymentScreen();
  // const {userUid, user} = useAppSelector(state => state.auth);

  // const updatePayment = (data: PaymentCardType) => {
  //   if (!user) {
  //     return;
  //   }

  //   firestore()
  //     .collection('users')
  //     .doc(userUid)
  //     .update({
  //       paymentMethods: [...user.paymentMethods, data],
  //     })
  //     .then(() => {
  //       console.log('Payment Method Update');
  //     });
  // };
  return (
    <View style={styles.container}>
      {/* <TestButton
        name="back to payment method"
        onPress={() => navigation.navigate('PaymentMethod')}
      /> */}
      <NewCreditCard />
      <View style={styles.viewText}>
        <CustomInput<AddPaymentField>
          label="CardHolder Name"
          field="cardHolderName"
          control={control}
          error={errors}
          textInputProps={{
            maxLength: 16,
            placeholder: 'EX: Bruno Pham',
          }}
        />
      </View>
      <View style={styles.viewText}>
        <CustomInput<AddPaymentField>
          label="Card Number"
          field="cardNumber"
          control={control}
          error={errors}
          textInputProps={{
            maxLength: 16,
            placeholder: '**** **** **** 3456',
          }}
        />
        <View style={styles.cvvdate}>
          <View style={styles.inside}>
            <CustomInput<AddPaymentField>
              label="CVV"
              field="cvv"
              control={control}
              error={errors}
              textInputProps={{
                maxLength: 16,
                placeholder: 'EX: 123',
              }}
            />
          </View>
          <View style={styles.inside}>
            <CustomInput<AddPaymentField>
              label="Experion Date"
              field="expirationDate"
              control={control}
              error={errors}
              textInputProps={{
                maxLength: 16,
                placeholder: '03/22',
              }}
            />
          </View>
        </View>
      </View>
      <View style={styles.btn}>
        <BigCustomButton onPress={handleSubmit(onUpdate)}>
          Add new card
        </BigCustomButton>
      </View>
    </View>
  );
};
export default AddPaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 20,
  },
  autoshow: {
    marginVertical: 20,
    width: scaleUI(333, false),
    height: scaleUI(62, false),
    backgroundColor: COLORS.SECONDARY,
  },
  viewText: {
    width: scaleUI(333, false),
    height: scaleUI(50, false),
    marginVertical: 18,
  },
  cvvdate: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inside: {
    width: scaleUI(157, false),
    height: scaleUI(66, false),
  },
  btn: {
    position: 'absolute',
    width: scaleUI(333, true),
    bottom: 40,
  },
});
