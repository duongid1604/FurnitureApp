import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {FONTS, FONT_SIZE} from '../constants';
import {MyReviewsScreen, ReviewScreen} from '../screens';
import {ReviewNavigatorProps, ReviewStackParamList} from '../types';

const ReviewStack = createStackNavigator<ReviewStackParamList>();

const ReviewNavigator = ({}: ReviewNavigatorProps) => {
  return (
    <ReviewStack.Navigator
      initialRouteName="Review"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: styles.headerTitle,
      }}>
      <ReviewStack.Screen
        name="MyReview"
        component={MyReviewsScreen}
        options={{headerTitle: 'My reviews'}}
      />
      <ReviewStack.Screen
        name="Review"
        component={ReviewScreen}
        options={{headerTitle: 'Rating & Review'}}
      />
    </ReviewStack.Navigator>
  );
};

export default ReviewNavigator;

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: FONTS.POPPINS_BOLD,
    fontSize: FONT_SIZE.BODY_18,
  },
});
