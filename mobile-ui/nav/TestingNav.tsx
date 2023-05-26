import { StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParentSignUp from "../pages/ParentSignUp";
import ParentProfile from "../pages/ParentProfile";
import ParentOrSitter from "../pages/ParentOrSitter";

import SitterSignUp from "../pages/SitterSignUp";
import SitterProfile from "../pages/SitterProfile";

import Login from "../pages/Login";

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor: "#101010",
        shadowColor: "#ffffff",
    },

    TabLabel: {
        margin: "3%",
        fontSize: 12,
        color: "#a0a0a0",
    },

    TabIcon: {},

    HeaderBar: {
        backgroundColor: "#101010",
        // elevation: 0, // For iOS and Android
        // shadowOpacity: 0, // Ensures shadow is removed on Android
    },
});

const Tab = createBottomTabNavigator();

const TestingNav = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: styles.TabBar,
                tabBarLabelStyle: styles.TabLabel,
                // headerShown: false, // Removes the Header
                headerStyle: styles.HeaderBar,
                headerTintColor: "#ffffff", // Header text color
            }}
        >
            <Tab.Screen name="Parent Sign Up" component={ParentSignUp} />
            <Tab.Screen name="Parent Profile" component={ParentProfile} />

            <Tab.Screen name="Sitter Sign Up" component={SitterSignUp} />
            <Tab.Screen name="Sitter Profile" component={SitterProfile} />

            <Tab.Screen name="Login" component={Login} />

            <Tab.Screen name="ParentOrSitter" component={ParentOrSitter}/>
        </Tab.Navigator>
    );
};

export default TestingNav;
