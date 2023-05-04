//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';

const Search = ({navigation}) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderComp goBack={() => navigation.goBack()} />
            <Text>Search</Text>
            </SafeAreaView>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Search;
