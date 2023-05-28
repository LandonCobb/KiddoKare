import { useEffect, useState } from "react";
import { Button, SafeAreaView, StyleSheet} from "react-native";

const ParentOrSitter = () => {

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
            marginLeft: "5%",
            marginTop: "5%",
            width: "75%",
        },

        ButtonContainer: {
            marginLeft: "5%",
            marginTop: "5%"
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
            <Button title="Parent"></Button>
            <Button title="Sitter"></Button>
        </SafeAreaView>
    );
}

export default ParentOrSitter;