import React from 'react';
import {Image, StyleSheet, Text, View, Pressable} from 'react-native';

import {
  BigCustomButton,
  CustomInfoButton,
  CustomScreenContainer,
  LoadingSpinner,
  ShadowScrollView,
} from '../../components';
import {COLORS, FONTS, FONT_SIZE, IMAGES, LINE_HEIGHT} from '../../constants';
import {useProfileScreen} from '../../hooks';
import {ProfileScreenProps} from '../../types';
import LoadingScreen from '../LoadingScreen';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const {
    user,
    avatarLoading,
    isLoading,
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
    <CustomScreenContainer smallPadding>
      <Pressable style={styles.infoContainer} onPress={onGotoSetting}>
        <View style={styles.avatarContainer}>
          {avatarLoading || isLoading ? (
            <LoadingSpinner size="small" color={COLORS.MAIN} />
          ) : (
            <Image
              source={{uri: user.avatar ? user.avatar : IMAGES.DEFAULT_AVATAR}}
              style={styles.avatar}
            />
          )}
        </View>
        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {user.name ? user.name : 'No name'}
          </Text>
          <Text numberOfLines={2} style={styles.email}>
            {user.email ? user.email : 'No email'}
          </Text>
        </View>
      </Pressable>
      <View style={styles.sections}>
        <ShadowScrollView>
          <CustomInfoButton
            title="My orders"
            info={
              orderQty && orderQty > 0
                ? `Already have ${orderQty} ${
                    orderQty > 1 ? 'orders' : 'order'
                  }`
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
        </ShadowScrollView>
        <BigCustomButton extraStyle={styles.button} onPress={onSignout}>
          Sign out
        </BigCustomButton>
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
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
    backgroundColor: COLORS.WHITE,
    shadowColor: COLORS.SUB,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    borderWidth: 1,
    borderColor: COLORS.WHITE,
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
    flex: 1,
  },
  center: {
    alignSelf: 'center',
  },
  button: {
    marginVertical: 20,
  },
});
