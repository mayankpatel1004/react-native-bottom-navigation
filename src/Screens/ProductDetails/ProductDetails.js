//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';

// create a component
const ProductDetails = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderComp goBack={() => navigation.goBack()} />
            <Text>ProductDetails</Text>
            </SafeAreaView>
            
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

//make this component available to the app
export default ProductDetails;
