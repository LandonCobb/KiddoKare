import { createStackNavigator } from "@react-navigation/stack";
import Search from "../pages/Search";
import Reserve from "../pages/Reserve";
import { Sitter } from "../types/Sitter";

export type RouteParams = {
    Search: undefined;
    Reserve: { sitter: Sitter };
};

const Stack = createStackNavigator<RouteParams>();

const SearchNav = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Reserve" component={Reserve} />
        </Stack.Navigator>
    );
};

export default SearchNav;
