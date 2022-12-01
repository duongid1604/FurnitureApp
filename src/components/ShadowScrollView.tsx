import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const ShadowScrollView = ({children}: Props) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContainer}>
      {children}
    </ScrollView>
  );
};

export default ShadowScrollView;

const styles = StyleSheet.create({
  scrollView: {
    margin: -20,
  },
  scrollViewContainer: {
    padding: 20,
  },
});
