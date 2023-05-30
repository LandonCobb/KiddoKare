import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { RouteParams } from "../nav/SearchNav";
import { useEffect } from "react";

type SearchProps = {
    navigation: StackNavigationProp<RouteParams, "Reserve">;
    route: RouteProp<RouteParams, "Reserve">;
};

const Reserve = ({ navigation, route }: SearchProps) => {
    const { sitter } = route.params;

    useEffect(() => {
        console.log(sitter);
    }, []);

    return (
        <View>
            <Text>Reserve</Text>
        </View>
    );
};

export default Reserve;
