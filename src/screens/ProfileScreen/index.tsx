import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  BigCustomButton,
  CustomInfoButton,
  CustomScreenContainer,
} from '../../components';
import {COLORS, FONTS, FONT_SIZE, IMAGES, LINE_HEIGHT} from '../../constants';
import {useProfileScreen} from '../../hooks';
import {ProfileScreenProps} from '../../types';
import LoadingScreen from '../LoadingScreen';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const {
    user,
    orderQty,
    addressQty,
    reviewQty,
    paymentQty,
    onSignout,
    onGotoMyReviews,
    onGotoShippingAddress,
    onGotoSetting,
    onGoToPaymentMethod,
    onGoToOrders,
  } = useProfileScreen(navigation);

  if (!user) {
    return <LoadingScreen />;
  }

  return (
    <CustomScreenContainer smallPadding hasScrollView>
      <View style={styles.infoContainer}>
        <Image source={{uri: IMAGES.DEFAULT_AVATAR}} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{user.name ? user.name : 'No name'}</Text>
          <Text numberOfLines={2} style={styles.email}>
            {user.email ? user.email : 'No email'}
          </Text>
        </View>
      </View>
      <View style={styles.sections}>
        <CustomInfoButton
          title="My orders"
          info={
            orderQty && orderQty > 0
              ? `Already have ${orderQty} ${orderQty > 1 ? 'orders' : 'order'}`
              : 'No order'
          }
          onPress={onGoToOrders}
        />
        <CustomInfoButton
          title="Shipping Addresses"
          info={
            addressQty && addressQty > 0
              ? `${addressQty} ${addressQty > 1 ? 'addresses' : 'address'}`
              : 'No address'
          }
          onPress={onGotoShippingAddress}
        />
        <CustomInfoButton
          title="Payment Method"
          info={
            paymentQty && paymentQty > 0
              ? `You have ${paymentQty} ${paymentQty > 1 ? 'cards' : 'card'}`
              : 'No card'
          }
          onPress={onGoToPaymentMethod}
        />
        <CustomInfoButton
          title="My reviews"
          info={
            reviewQty && reviewQty > 0
              ? `Reviews for ${reviewQty} ${reviewQty > 1 ? 'items' : 'item'}`
              : 'No review'
          }
          onPress={onGotoMyReviews}
        />
        <CustomInfoButton
          title="Setting"
          info="Notification, Password, FAQ, Contact"
          onPress={onGotoSetting}
        />
        <BigCustomButton onPress={onSignout}>Sign out</BigCustomButton>
      </View>
    </CustomScreenContainer>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  name: {
    fontSize: FONT_SIZE.H5,
    lineHeight: LINE_HEIGHT.H5,
    fontFamily: FONTS.POPPINS_BOLD,
    color: COLORS.MAIN,
  },
  email: {
    fontSize: FONT_SIZE.LABEL,
    lineHeight: LINE_HEIGHT.LABEL,
    fontFamily: FONTS.POPPINS,
    color: COLORS.SUB,
  },
  sections: {
    marginTop: 26,
  },
  center: {
    alignSelf: 'center',
  },
});
