import { useContext, useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Text, TextInput, Button } from "react-native";
import { Parent } from "../types/Parent";
import ip from "../ip";
import { SecurityContext } from "../contexts/SecurityProvider";

const ParentProfile = () => {
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
        }

        if (password != "") {
            obj = {
                ...obj,
                password: password
            }
        }

        console.log(obj);

        fetch("http://" + ip + ":8080/parent", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
            },
            body: JSON.stringify(obj),
        })
    }

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
                Authorization: "Bearer " + token,
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
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput} onChangeText={setPassword} value={password} />
            </SafeAreaView>

            <SafeAreaView style={styles.ButtonContainer}>
                <Button title="Save Changes" color={buttonColor} onPress={handSave}></Button>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ParentProfile;
