import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ParentProfile from "../pages/ParentProfile";
import ParentSchedule from "../pages/ParentSchedule";
import Search from "../pages/Search";

const Tab = createBottomTabNavigator();

const ParentNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Profile" component={ParentProfile} />
                <Tab.Screen name="Schedule" component={ParentSchedule} />
                <Tab.Screen name="Search" component={Search} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default ParentNav;
