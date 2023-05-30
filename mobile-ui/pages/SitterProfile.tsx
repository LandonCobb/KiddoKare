import { useContext, useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, View, StyleSheet, Button } from "react-native";

import { Sitter } from "../types/Sitter";
import ip from "../ip";
import { SecurityContext } from "../contexts/SecurityProvider";

const SitterProfile = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");
    const { token } = useContext(SecurityContext);

    const handSave = () => {
        let obj: any = {
            name: name,
            bio: bio,
            address: address,
        };

        if (password != "") {
            obj = {
                ...obj,
                password: password,
            };
        }

        console.log(obj);

        fetch("http://" + ip + ":8080/sitter", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(obj),
        });
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
            marginLeft: "5%",
            marginRight: "5%",
            width: "40%",
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

    const [sitter, setSitter] = useState<Sitter | undefined>();

    useEffect(() => {
        fetch("http://" + ip + ":8080/sitter/search/byEmail", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setSitter(data);
            });
    }, []);

    useEffect(() => {
        if (sitter) {
            setName(sitter.name);
            setAddress(sitter.address);
            if (sitter.bio) {
                setBio(sitter.bio);
            }
        }
    }, [sitter]);

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
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} />
            </SafeAreaView>

            <SafeAreaView style={styles.ButtonContainer}>
                <Button title="Save Changes" color={buttonColor} onPress={handSave}></Button>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default SitterProfile;
