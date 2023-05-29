import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import SitterSignUp from "../pages/SitterSignUp";
import ParentSignUp from "../pages/ParentSignUp";
import { RouteProp } from "@react-navigation/native";
import { RouteParams as ParentRouteParams } from "./AuthNav";

export type RouteParams = {
    Login: { type: "sitter" | "parent" };
    SignUp: undefined;
};

const Stack = createStackNavigator<RouteParams>();

type LoginProps = {
    navigation: StackNavigationProp<ParentRouteParams, "LoginNav">;
    route: RouteProp<ParentRouteParams, "LoginNav">;
};

const LoginNav = ({ route }: LoginProps) => {
    const { type } = route.params;
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} initialParams={{ type: type }} />
            <Stack.Screen
                name="SignUp"
                component={type == "sitter" ? SitterSignUp : ParentSignUp}
                options={{ title: "Sign Up" }}
            />
        </Stack.Navigator>
    );
};

export default LoginNav;
