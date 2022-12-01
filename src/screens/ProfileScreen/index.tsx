import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  CustomInfoButton,
  CustomScreenContainer,
  CustomTextButton,
} from '../../components';
import {COLORS, FONTS, FONT_SIZE, IMAGES, LINE_HEIGHT} from '../../constants';
import {useProfileScreen} from '../../hooks';
import {ProfileScreenProps} from '../../types';
import LoadingScreen from '../LoadingScreen';

const ProfileScreen = ({navigation}: ProfileScreenProps) => {
  const {
    user,
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
      <View style={styles.infoContainer}>
        <Image source={{uri: IMAGES.DEFAULT_AVATAR}} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{user.name ? user.name : 'No name'}</Text>
          <Text numberOfLines={2} style={styles.email}>
            {user.email ? user.email : 'No email'}
          </Text>
        </View>
      </View>
      <View style={styles.sections}>
        <CustomInfoButton
          title="My orders"
          info={`Already have ${
            user.orders ? user.orders.length + ' orders' : 0 + ' order'
          } `}
          onPress={onGoToOrders}
        />
        <CustomInfoButton
          title="Shipping Addresses"
          info={`${user ? user.orders.length + ' Addresses' : 0 + ' Address'} `}
          onPress={onGotoShippingAddress}
        />
        <CustomInfoButton
          title="Payment Method"
          info={`You have ${
            user ? user.orders.length + ' cards' : 0 + ' card'
          }`}
          onPress={onGoToPaymentMethod}
        />
        <CustomInfoButton
          title="My reviews"
          info={`Reviews for ${
            user ? user.orders.length + ' items' : 0 + ' item'
          }`}
          onPress={onGotoMyReviews}
        />
        <CustomInfoButton
          title="Setting"
          info="Notification, Password, FAQ, Contact"
          onPress={onGotoSetting}
        />
        <CustomTextButton
          name="Sign out"
          onPress={onSignout}
          extraStyle={styles.center}
        />
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
