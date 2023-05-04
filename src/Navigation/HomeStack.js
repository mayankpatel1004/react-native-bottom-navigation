import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Explore,Home,ProductDetails,Profile} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{ 
        headerShown: false}}>
        <Stack.Screen name={navigationStrings.HOME} component={Home} />
        <Stack.Screen name={navigationStrings.PRODUCT_DETAILS} component={ProductDetails} />
      </Stack.Navigator>
    );
  }
  export default HomeStack;