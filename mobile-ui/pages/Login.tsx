import { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, SafeAreaView, TextInput, Button, KeyboardAvoidingView } from "react-native";
import { RouteParams } from "../nav/LoginNav";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { SecurityContext } from "../contexts/SecurityProvider";
import ip from "../ip";

type LoginProps = {
    navigation: StackNavigationProp<RouteParams, "Login">;
    route: RouteProp<RouteParams, "Login">;
};

const Login = ({ navigation, route }: LoginProps) => {
    const { type } = route.params;
    const { setToken, setType, setEmail } = useContext(SecurityContext);
    const [email, setEmailText] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        fetch("http://" + ip + ":8080/auth/" + type + "/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        }).then((res) => {
            console.log(type)
            if (res.ok) {
                res.text().then((token) => {
                    setToken(token);
                    setEmail(email);
                    setType(type);
                });
            }
        });
    };

    return (
        <KeyboardAvoidingView style={styles.FormContainer} behavior="padding">
            <Text style={styles.TextHeader}>Login</Text>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Email:</Text>
                <TextInput style={styles.TextInput} onChangeText={setEmailText} value={email} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} />
            </SafeAreaView>

            <SafeAreaView style={styles.RowContainer}>
                <SafeAreaView style={styles.ButtonContainer}>
                    <Button title="Log In" color={buttonColor} onPress={handleLogin}></Button>
                </SafeAreaView>
                <SafeAreaView style={styles.ButtonContainer}>
                    <Button title="Sign Up" color={buttonColor} onPress={() => navigation.navigate("SignUp")}></Button>
                </SafeAreaView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "stretch",
        backgroundColor: "#212121",
    },

    TextInputsContainer: {
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 5,
        marginLeft: "5%",
        marginRight: "5%",
    },

    ButtonContainer: {
        marginHorizontal: "3%",
    },

    RowContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },

    TextHeader: {
        fontSize: 48,
        fontWeight: "300",
        color: "#ffffff",
        // iOS
        alignItems: "center",
        // Android
        textAlign: "center",
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

export default Login;
