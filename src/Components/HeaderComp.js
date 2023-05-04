import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderComp = ({
    goBack,
    text
}) => {
    const navigation = useNavigation();
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', height:42}}>
            {!!goBack ? <TouchableOpacity onPress={!!goBack ? goBack : () => navigation.goBack()}>
                <Text>GoBack</Text>
            </TouchableOpacity> : <Text />}
            <Text>{text}</Text>
            <Text />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HeaderComp;
