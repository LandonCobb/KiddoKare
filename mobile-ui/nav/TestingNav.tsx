import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParentSignUp from "../pages/ParentSignUp";
import SitterSignUp from "../pages/SitterSignUp";
import Login from "../pages/Login";
import SitterProfile from "../pages/SitterProfile";

const Tab = createBottomTabNavigator();

const TestingNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Parent Sign Up" component={ParentSignUp} />
            <Tab.Screen name="Sitter Sign Up" component={SitterSignUp} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Sitter Profile" component={SitterProfile} />
        </Tab.Navigator>
    );
};

export default TestingNav;
