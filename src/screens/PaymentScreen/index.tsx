import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ActiveCreditCard from '../../components/ActiveCreditCard';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  FONT_WEIGHT,
  ICON,
  LINE_HEIGHT,
} from '../../constants';
import DefaultCard from '../../components/DefaultCard';
import {PaymentCardType, PaymentScreenProps} from '../../types';
import {scaleUI} from '../../utils';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import GotoAddScreen from '../../components/GotoAddScreen';
import {fetchPayment} from '../../redux/thunks/payment.thunk';

const PaymentScreen = ({navigation}: PaymentScreenProps) => {
  const [isActive, setActive] = useState<Number>(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPayment());
  }, [dispatch]);
  const {paymentMethods} = useAppSelector(
    state => state.auth.user?.paymentMethods,
  );
  const renderProducts = ({item}: {item: PaymentCardType}) => (
    <Pressable>
      <ActiveCreditCard />
      <View style={styles.checkDefault}>
        <Image source={ICON.CHECKBOX} style={styles.checkbox} />
        <Text style={styles.titleCheck}>{item.cardHolderName}</Text>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <ActiveCreditCard />
        <View style={styles.checkDefault}>
          <Image source={ICON.CHECKBOX} style={styles.checkbox} />
          <Text style={styles.titleCheck}>Use as default payment method</Text>
        </View>

        <DefaultCard />
        <View style={styles.checkDefault}>
          <Image source={ICON.UNCHECKBOX} style={styles.checkbox} />
          <Text style={styles.titleUncheck}>Use as default payment method</Text>
        </View>
      </ScrollView>

      <FlatList
        data={paymentMethods}
        keyExtractor={item => item.id}
        // renderItem={renderProducts}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={styles.container}
        // ListFooterComponent={renderBottom()}
      />
      <GotoAddScreen onPress={() => navigation.navigate('AddPayment')} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: scaleUI(375, false),
    height: scaleUI(812, false),
    marginHorizontal: 20,
  },
  checkDefault: {
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
});
