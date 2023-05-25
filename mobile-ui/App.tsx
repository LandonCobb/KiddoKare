import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TestingNav from "./nav/TestingNav";

export default function App() {
    return (
        <NavigationContainer>
            <TestingNav />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
