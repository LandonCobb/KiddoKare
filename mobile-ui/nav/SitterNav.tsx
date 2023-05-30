import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import SitterProfile from "../pages/SitterProfile";
import SitterSchedule from "../pages/SitterSchedule";

const Tab = createBottomTabNavigator();

const SitterNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: styles.TabBar,
                    tabBarLabelStyle: styles.TabLabel,
                    // headerShown: false, // Removes the Header
                    headerStyle: styles.HeaderBar,
                    headerTintColor: "#ffffff", // Header text color
                    headerShadowVisible: false,
                }}
            >
                <Tab.Screen options={{ headerTitle: "Profile Information" }} name="Profile" component={SitterProfile} />
                <Tab.Screen options={{ headerTitle: "Your Schedule" }} name="Schedule" component={SitterSchedule} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    TabBar: {
        backgroundColor: "#101010",
        shadowColor: "#ffffff",
    },

    TabLabel: {
        marginBottom: "3%",
        fontSize: 12,
        color: "#a0a0a0",
    },

    TabIcon: {},

    HeaderBar: {
        backgroundColor: "#101010",
    },
});

export default SitterNav;
