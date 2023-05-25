import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParentSignUp from "../pages/ParentSignUp";
import SitterProfile from "../pages/SitterSignUp";
import Login from "../pages/Login";

const Tab = createBottomTabNavigator();

const TestingNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Parent Profile" component={ParentSignUp} />
            <Tab.Screen name="Sitter Profile" component={SitterProfile} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    );
};

export default TestingNav;
