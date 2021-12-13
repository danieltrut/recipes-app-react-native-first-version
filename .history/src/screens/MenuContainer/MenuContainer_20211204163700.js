import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MenuButton from "../../components/MenuButton/MenuButton";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export default function MenuContainer(navigation) {
    return (
        <View style={styles.content}>

            <View style={styles.container}>
                <MenuButton
                    title="Home"
                    source={require("../../../assets/icons/home.png")}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                />
                <MenuButton
                    title="Categories"
                    source={require("../../../assets/icons/category.png")}
                    onPress={() => {
                        navigation.navigate('Categories');
                    }}
                />
                <MenuButton
                    title="Search"
                    source={require("../../../assets/icons/search.png")}
                    onPress={() => {
                        navigation.navigate('Search');
                    }}
                />
            </View>
        </View>
    );
}


