import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonComp = ({
    btnText,
    onPress
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btnStyle} onPress={onPress}>
                <Text style={{ fontSize: 16, color: 'blue' }}>{btnText}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    btnStyle: {
        backgroundColor: "#ADD8E6",
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});

export default ButtonComp;
