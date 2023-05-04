import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Explore,Home,ProductDetails,Profile, Search} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

function ExploreStack() {
    return (
      <Stack.Navigator screenOptions={{ 
        headerShown: false}}>
        <Stack.Screen name={navigationStrings.EXPLORE} component={Explore} />
        <Stack.Screen name={navigationStrings.SEARCH} component={Search} />
      </Stack.Navigator>
    );
  }
  export default ExploreStack;