import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainNav from "./nav/MainNav";

export default function App() {
    return (
        <NavigationContainer>
            <MainNav />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
