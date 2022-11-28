import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MyReviewsScreen, ReviewScreen} from '../screens';
import {ReviewStackParamList} from '../types';

type Props = {};

const ReviewStack = createStackNavigator<ReviewStackParamList>();

const ReviewNavigator = ({}: Props) => {
  return (
    <ReviewStack.Navigator initialRouteName="MyReview">
      <ReviewStack.Screen name="MyReview" component={MyReviewsScreen} />
      <ReviewStack.Screen name="Review" component={ReviewScreen} />
    </ReviewStack.Navigator>
  );
};

export default ReviewNavigator;
