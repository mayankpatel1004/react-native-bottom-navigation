import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {EditProfile, Explore,Home,ProductDetails,Profile} from '../Screens';
import navigationStrings from '../constants/navigationStrings';

const Stack = createNativeStackNavigator();

function ProfileStack() {
    return (
      <Stack.Navigator screenOptions={{ 
        headerShown: false}}>
        <Stack.Screen name={navigationStrings.PROFILE} component={Profile} />
        <Stack.Screen name={navigationStrings.EDIT_PROFILE} component={EditProfile} />
      </Stack.Navigator>
    );
  }
  export default ProfileStack;