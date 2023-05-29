import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SitterProfile from "../pages/SitterProfile";
import SitterSchedule from "../pages/SitterSchedule";

const Tab = createBottomTabNavigator();

const SitterNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={SitterProfile} />
                <Tab.Screen name="Schedule" component={SitterSchedule} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default SitterNav;
