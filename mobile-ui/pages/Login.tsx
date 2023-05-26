import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, Button } from "react-native";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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

        ButtonContainer: {
            marginHorizontal: "3%",
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

    return (
        <SafeAreaView style={styles.FormContainer}>
            <Text style={styles.TextHeader}>Login</Text>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Email:</Text>
                <TextInput style={styles.TextInput} onChangeText={setEmail} value={email} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} />
            </SafeAreaView>

            <SafeAreaView style={styles.RowContainer}>
                <SafeAreaView style={styles.ButtonContainer}>
                    <Button title="Log In" color={buttonColor}></Button>
                </SafeAreaView>
                <SafeAreaView style={styles.ButtonContainer}>
                    <Button title="Sign Up" color={buttonColor}></Button>
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default Login;
