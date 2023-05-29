import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ParentOrSitter from "../pages/ParentOrSitter";
import LoginNav from "./LoginNav";

export type RouteParams = {
    Picker: undefined;
    LoginNav: { type: "sitter" | "parent" };
};

const Stack = createStackNavigator<RouteParams>();

const AuthNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Picker" component={ParentOrSitter} options={{ headerShown: false }} />
                <Stack.Screen name="LoginNav" component={LoginNav} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AuthNav;
