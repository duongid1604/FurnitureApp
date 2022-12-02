import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLORS} from '../constants';

type Props = {
  children: JSX.Element | JSX.Element[];
  style?: ViewStyle;
  smallPadding?: boolean;
  hasScrollView?: boolean;
};

const CustomScreenContainer = ({
  children,
  style,
  smallPadding,
  hasScrollView,
}: Props) => {
  return (
    <>
      {hasScrollView ? (
        <View
          style={
            smallPadding
              ? [styles.screen, styles.screenSmallPadding, style]
              : [styles.screen, style]
          }>
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollViewContainer}>
            {children}
          </ScrollView>
        </View>
      ) : (
        <View
          style={
            smallPadding
              ? [styles.screen, styles.screenSmallPadding, style]
              : [styles.screen, style]
          }>
          {children}
        </View>
      )}
    </>
  );
};

export default CustomScreenContainer;

const styles = StyleSheet.create({
  scrollView: {
    margin: -30,
  },
  scrollViewContainer: {
    padding: 30,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 54,
    backgroundColor: COLORS.WHITE,
  },
  screenSmallPadding: {
    paddingTop: 24,
  },
});
