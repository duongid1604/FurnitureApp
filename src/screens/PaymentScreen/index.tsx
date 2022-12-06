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
import CheckBox from '@react-native-community/checkbox';

// import DefaultCard from '../../components/DefaultCard';
import {PaymentCardType, PaymentScreenProps} from '../../types';
import {scaleUI} from '../../utils';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import GotoAddScreen from '../../components/GotoAddScreen';
import {CustomScreenContainer} from '../../components';
const PaymentScreen = ({navigation}: PaymentScreenProps) => {
  const [isActive, setActive] = useState(false);
  const {paymentMethods} = useAppSelector(state => state.auth.user);
  console.log(paymentMethods);

  const onChangeValue = (item, newValue) => {
    const isActive = paymentMethods.map(newItem => {
      if (newItem.id === item.id) {
        return {
          ...newItem,
          selected: newValue,
        };
      }
      return newItem;
    });
    setActive(isActive);
  };
  const renderProducts = ({item}: {item: PaymentCardType}) => {
    return (
      <View>
        <View style={styles.active}>
          <View style={styles.infoView}>
            <Image source={ICON.MASTERCARD} style={styles.mastercard} />
            <Text style={styles.cardnum}>{item.cardNumber}</Text>
            <View style={styles.detail}>
              <View style={styles.username}>
                <Text style={styles.smalltitle}>Card Holder Name</Text>
                <Text style={styles.labeltitle}>{item.cardHolderName}</Text>
              </View>
              <View style={styles.username}>
                <Text style={styles.smalltitle}>Expiry Date</Text>
                <Text style={styles.labeltitle}>{item.expirationDate}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.checkDefault}>
          <CheckBox
            disabled={false}
            value={isActive}
            onAnimationType="fill"
            offAnimationType="fade"
            boxType="square"
            onValueChange={newValue => onChangeValue(item, newValue)}
          />

          <Text style={styles.titleUncheck}>Use as default payment method</Text>
        </View>
      </View>
    );
  };
  return (
    <CustomScreenContainer smallPadding>
      <View style={styles.container}>
        <FlatList
          data={paymentMethods}
          keyExtractor={item => item.cardNumber}
          renderItem={renderProducts}
          // ListFooterComponent={renderBottom()}
        />
      </View>
      <GotoAddScreen onPress={() => navigation.navigate('AddPayment')} />
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
