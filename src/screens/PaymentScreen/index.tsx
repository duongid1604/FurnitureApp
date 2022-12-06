import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
// import ActiveCreditCard from '../../components/ActiveCreditCard';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  ICON,
  LINE_HEIGHT,
} from '../../constants';
import {PaymentCardType, PaymentScreenProps} from '../../types';
import {scaleUI} from '../../utils';
import {useAppSelector} from '../../hooks';
import {CustomScreenContainer} from '../../components';
import usePaymentScreen from '../../hooks/screens/usePaymentScreen';
import EmptyStateScreen from '../EmptyStateScreen';
import LoadingScreen from '../LoadingScreen';
import { PaymentItem } from './components';

const PaymentScreen = ({navigation}: PaymentScreenProps) => {
  const {user, onGotoAddPaymentScreen, onSelectCard, selectedPaymentMethod} =
    usePaymentScreen();

  if (!user) {
    return <LoadingScreen />;
  }
  if (user.paymentMethods.length === 0) {
    return (
      <EmptyStateScreen
        title="No PaymentMethod yet"
        content="You dont have any PaymentMethod yet"
        buttonText=""
      />
    );
  }

  const renderItem =({item}:{item: PaymentCardType})=>(
    <PaymentItem 
      onToggleCheckBox={onSelectCard}
      Payment={item}
      isActive={item.id === selectedPaymentMethod?id}
    />
  )
  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.container}>
        <FlatList
          data={[...user.paymentMethod].reverse()}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          // ListFooterComponent={renderBottom()}
        />
      </View>
      <View style={styles.add}>
        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => navigation.navigate('AddPayment')}>
          <Image source={ICON.PLUS} style={styles.plus} />
        </TouchableOpacity>
      </View>
    </CustomScreenContainer>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  checkDefault: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 15,
  },
  checkbox: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  titleCheck: {
    color: COLORS.MAIN,
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.BODY,
  },
  titleUncheck: {
    color: COLORS.SUB,
    fontSize: FONT_SIZE.BODY,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.BODY,
  },
  active: {
    marginVertical: 20,
    width: scaleUI(333, false),
    height: scaleUI(180, false),
    backgroundColor: COLORS.MAIN,
    borderRadius: 10,
  },
  infoView: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  mastercard: {
    width: 30,
    height: 24,
    marginBottom: 20,
  },
  cardnum: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.H5,
    fontWeight: FONT_WEIGHT.REGULAR,
    fontFamily: FONTS.POPPINS,
    lineHeight: LINE_HEIGHT.H5,
  },
  detail: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  username: {
    marginRight: 29,
  },
  smalltitle: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SMALL,
    lineHeight: LINE_HEIGHT.SMALL,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  labeltitle: {
    marginVertical: 5,
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    fontFamily: FONTS.POPPINS,
    fontWeight: FONT_WEIGHT.REGULAR,
  },
  add: {
    width: scaleUI(330, false),
    alignItems: 'flex-end',
    bottom: 100,
  },
  addbutton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleUI(50, true),
    height: scaleUI(50, true),
    borderRadius: 100,
    backgroundColor: COLORS.WHITE,
  },
  plus: {
    width: 24,
    height: 24,
  },
});
