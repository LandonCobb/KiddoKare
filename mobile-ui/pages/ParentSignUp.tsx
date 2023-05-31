import { StyleSheet, Text, TextInput, Button, SafeAreaView, View } from "react-native";
import { useEffect, useState } from "react";
import ip from "../ip";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { RouteParams } from "../nav/LoginNav";

type ParentSignUpProps = {
    navigation: StackNavigationProp<RouteParams, "SignUp">;
    route: RouteProp<RouteParams, "SignUp">;
};

const ParentSignUp = ({navigation}: ParentSignUpProps) => {
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
            // paddingTop: "1.5%",
            // paddingBottom: "1.5%",
            // paddingRight: "3%",
            // paddingLeft: "3%",
            // marginTop: "0.5%",
            // marginBottom: "0.5%",
            width: "75%",
        },

        RowContainer: {
            flexDirection: "row",
        },

        // ButtonContainer: {
        //     paddingTop: "3%",
        // },

        TextHeader: {
            // padding: "3%",
            fontSize: 48,
            fontWeight: "300",
            color: "#ffffff",
        },

        Text: {
            // marginTop: "3%",
            marginBottom: "0.5%",
            fontSize: 20,
            fontWeight: "500",
            color: "#a0a0a0",
        },

        TextInput: {
            alignItems: "stretch",
            borderRadius: 5,
            padding: "3%",
            // paddingTop: "3%",
            // paddingBottom: "3%",
            // paddingLeft: "3%",
            // paddingRight: "3%",
            // marginTop: "1.5%",
            // marginBottom: "1.5%",
            fontSize: 24,
            color: "#ffffff",
            backgroundColor: "#181818",
        },
    });
    const buttonColor = "#9e00ff";

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        fetch("http://" + ip + ":8080/parent/signup", {
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
        navigation.navigate("Login", {type: "parent"});
    };

    return (
        <SafeAreaView style={styles.FormContainer}>
            <Text style={styles.TextHeader}>Sign Up</Text>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Email:</Text>
                <TextInput style={styles.TextInput} value={email} onChangeText={setEmail}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Name:</Text>
                <TextInput style={styles.TextInput} value={name} onChangeText={setName}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Address:</Text>
                <TextInput style={styles.TextInput} value={address} onChangeText={setAddress}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} value={password} onChangeText={setPassword}></TextInput>
            </SafeAreaView>

            {/* <SafeAreaView style={styles.ButtonContainer}>
            </SafeAreaView> */}
            <Button title="Sign Up" color={buttonColor} onPress={handleSignUp}></Button>
        </SafeAreaView>
    );
};

export default ParentSignUp;
