//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import ButtonComp from '../../Components/ButtonComp';
import navigationString from '../../constants/navigationStrings';

// create a component
const Explore = ({navigation}) => {

    const goToScreen = () => {
        navigation.navigate(navigationString.SEARCH);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{marginHorizontal:24}}>
                <HeaderComp text="Explore" />
                <ButtonComp btnText="GoToSearch" onPress={goToScreen} />
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default Explore;
