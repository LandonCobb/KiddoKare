import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParentProfile from "../pages/ParentProfile";
import SitterProfile from "../pages/SitterSignUp";
import Login from "../pages/Login";

const Tab = createBottomTabNavigator();

const MainNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Parent Profile" component={ParentProfile} />
            <Tab.Screen name="Sitter Profile" component={SitterProfile} />
            <Tab.Screen name="Login" component={Login} />
        </Tab.Navigator>
    );
};

export default MainNav;
