import { StackNavigationProp } from "@react-navigation/stack";
import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, Button, TextInput, KeyboardAvoidingView } from "react-native";
import { RouteParams } from "../nav/LoginNav";
import { RouteProp } from "@react-navigation/native";
import ip from "../ip";

type SitterSignUpProps = {
    navigation: StackNavigationProp<RouteParams, "SignUp">;
    route: RouteProp<RouteParams, "SignUp">;
};

const SitterSignUp = ({ navigation }: SitterSignUpProps) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        // add logic to create sitter
        fetch("http://" + ip + ":8080/sitter/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                address: address,
                password: password,
                bio: "",
            }),
        })
            .then((res) => res.text())
            .then((id) => {
                navigation.navigate("Availability", { scheduleId: id });
            });
    };

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.FormContainer}>
            <Text style={styles.TextHeader}>Sign Up</Text>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Email:</Text>
                <TextInput style={styles.TextInput} onChangeText={setEmail} value={email} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Name:</Text>
                <TextInput style={styles.TextInput} onChangeText={setName} value={name} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Address:</Text>
                <TextInput style={styles.TextInput} onChangeText={setAddress} value={address} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} />
            </SafeAreaView>

            <Button title="Sign Up" color={buttonColor} onPress={handleSignUp}></Button>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#212121",
    },

    TextInputsContainer: {
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 5,
        width: "75%",
    },

    RowContainer: {
        flexDirection: "row",
    },

    TextHeader: {
        fontSize: 48,
        fontWeight: "300",
        color: "#ffffff",
    },

    Text: {
        marginBottom: "0.5%",
        fontSize: 20,
        fontWeight: "500",
        color: "#a0a0a0",
    },

    TextInput: {
        alignItems: "stretch",
        borderRadius: 5,
        padding: "3%",
        fontSize: 24,
        color: "#ffffff",
        backgroundColor: "#181818",
    },
});
const buttonColor = "#9e00ff";

export default SitterSignUp;
