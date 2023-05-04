//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView,Button, TouchableOpacity } from 'react-native';
import HeaderComp from '../../Components/HeaderComp';
import ButtonComp from '../../Components/ButtonComp';
import navigationString from '../../constants/navigationStrings';

// create a component
const Home = ({ navigation }) => {

    const goToScreen = () => {
        navigation.navigate(navigationString.PRODUCT_DETAILS);
    }

    const goToEditProfileScreen = () => {
        navigation.navigate(navigationString.PROFILE, {
            screen: navigationString.EDIT_PROFILE,
            params: {
                user: "jane"
            }
        });
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderComp 
                    text="Home" 
                />
                {/* <ButtonComp btnText="Product Details" onPress={goToScreen} />
                <ButtonComp btnText="Edit Profile" onPress={goToEditProfileScreen} /> */}
                <View>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                </View>
                <View style={{height:40, padding:2}}>
                    <ButtonComp 
                        btnText="Edit Profile" 
                        onPress={goToEditProfileScreen} 
                    />
                </View>
                <View>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                    <Text>{"\n"}</Text>
                </View>
                <View style={{height:40, padding:3}}>
                    <ButtonComp 
                        btnText="Product Details" 
                        onPress={goToScreen} 
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
});

export default Home;