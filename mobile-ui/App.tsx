import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import TestingNav from "./nav/TestingNav";
import AuthNav from "./nav/AuthNav";
import SecurityProvider from "./contexts/SecurityProvider";
import Main from "./pages/Main";

export default function App() {
    return (
        <SecurityProvider>
            <TestingNav />
        </SecurityProvider>
    );
}

const styles = StyleSheet.create({});
