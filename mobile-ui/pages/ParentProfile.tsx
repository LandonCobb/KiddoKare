import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput, Button } from "react-native";
import { Parent } from "../types/Parent";
import ip from "../ip";

const ParentProfile = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");

    const styles = StyleSheet.create({
        FormContainer: {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            backgroundColor: "#212121",
        },

        TextInputsContainer: {
            justifyContent: "center",
            alignItems: "stretch",
            borderRadius: 5,
            marginLeft: "5%",
            marginTop: "5%",
            width: "75%",
        },

        ButtonContainer: {
            marginLeft: "5%",
            marginTop: "5%",
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

    const [parent, setParent] = useState<Parent | undefined>();

    useEffect(() => {
        fetch("http://" + ip + ":8080/parent/byEmail", {
            headers: {
                "X-Email": "coward@gmail.com",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setParent(data);
            });
    }, []);

    useEffect(() => {
        if (parent) {
            setName(parent.name);
            setAddress(parent.address);
            if (parent.bio) {
                setBio(parent.bio);
            }

            setEmail(parent.email);
        }
    }, [parent]);

    return (
        <SafeAreaView style={styles.FormContainer}>
            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Name:</Text>
                <TextInput style={styles.TextInput} onChangeText={setName} value={name} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Bio:</Text>
                <TextInput style={styles.TextInput} onChangeText={setBio} value={bio} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Address:</Text>
                <TextInput style={styles.TextInput} onChangeText={setAddress} value={address} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Email:</Text>
                <TextInput style={styles.TextInput} onChangeText={setEmail} value={email} />
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} />
            </SafeAreaView>

            <SafeAreaView style={styles.ButtonContainer}>
                <Button title="Save Changes" color={buttonColor}></Button>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ParentProfile;
