import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  LINE_HEIGHT,
} from '../../constants';
import {PaymentCardType} from '../../types';
import {scaleUI} from '../../utils';
import {AddButton, CustomScreenContainer} from '../../components';
import usePaymentScreen from '../../hooks/screens/usePaymentScreen';
import EmptyStateScreen from '../EmptyStateScreen';
import LoadingScreen from '../LoadingScreen';
import {PaymentItem} from './components';
import {useAppSelector} from '../../hooks';

const PaymentScreen = () => {
  const {
    user,
    selectedPaymentMethod,
    paymentState,
    onGotoAddPaymentScreen,
    onDeleteCard,
    onSelectCard,
  } = usePaymentScreen();
  if (!user) {
    return <LoadingScreen />;
  }
  if (paymentState.length === 0) {
    return (
      <EmptyStateScreen
        title="No PaymentMethod yet"
        content="You dont have any PaymentMethod yet"
        buttonText="Add Payment"
        onButtonPress={onGotoAddPaymentScreen}
      />
    );
  }

  const renderItem = ({item}: {item: PaymentCardType}) => (
    <PaymentItem
      onToggleCheckBox={onSelectCard}
      Payment={item}
      isActive={item.id === selectedPaymentMethod?.id}
      onDeleteCard={onDeleteCard}
    />
  );
  return (
    <CustomScreenContainer smallPadding>
      <FlatList
        style={styles.flatList}
        contentContainerStyle={styles.flatListContainer}
        data={[...paymentState]?.reverse()}
        keyExtractor={item => {
          return item.id;
        }}
        renderItem={renderItem}
      />
      <AddButton onPress={onGotoAddPaymentScreen} />
    </CustomScreenContainer>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    margin: -20,
  },
  flatListContainer: {
    padding: 20,
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
