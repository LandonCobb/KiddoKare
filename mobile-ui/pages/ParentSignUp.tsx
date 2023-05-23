import { StyleSheet, Text, TextInput, Button, SafeAreaView, View } from "react-native";

const ParentSignUp = () => {
    const styles = StyleSheet.create({
        FormContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#212121",
        },

        TextInputsContainer: {
            justifyContent: "center",
            alignItems: "stretch",
            borderRadius: 5,
            paddingTop: "1.5%",
            paddingBottom: "1.5%",
            paddingRight: "3%",
            paddingLeft: "3%",
            marginTop: "0.5%",
            marginBottom: "0.5%",
            width: "75%",
        },

        RowContainer: {
            flexDirection: "row",
        },

        ButtonContainer: {
            paddingTop: "3%",
        },

        SignUpHeader: {
            padding: "3%",
            fontSize: 48,
            fontWeight: "300",
            color: "#ffffff",
        },

        Text: {
            marginTop: "3%",
            marginBottom: "0.5%",
            marginRight: "3%",
            fontSize: 20,
            fontWeight: "500",
            color: "#a0a0a0",
        },

        TextInput: {
            alignItems: "stretch",
            borderRadius: 5,
            paddingTop: "3%",
            paddingBottom: "3%",
            paddingLeft: "3%",
            paddingRight: "3%",
            marginTop: "1.5%",
            marginBottom: "1.5%",
            fontSize: 24,
            color: "#ffffff",
            backgroundColor: "#0d0d0d",
        },
    });

    return (
        <SafeAreaView style={styles.FormContainer}>
            <Text style={styles.SignUpHeader}>Sign Up</Text>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Email:</Text>
                <TextInput style={styles.TextInput}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Name:</Text>
                <TextInput style={styles.TextInput}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Address:</Text>
                <TextInput style={styles.TextInput}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.TextInputsContainer}>
                <Text style={styles.Text}>Password:</Text>
                <TextInput style={styles.TextInput}></TextInput>
            </SafeAreaView>

            <SafeAreaView style={styles.ButtonContainer}>
                <Button title="Sign Up"></Button>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ParentSignUp;
