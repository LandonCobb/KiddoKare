import { Button, SafeAreaView, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteParams } from "../nav/AuthNav";
import { RouteProp } from "@react-navigation/native";

type ParentOrSitterProps = {
    navigation: StackNavigationProp<RouteParams, "Picker">;
    route: RouteProp<RouteParams, "Picker">;
};

const ParentOrSitter = ({ navigation }: ParentOrSitterProps) => {
    const handlePress = (type: "sitter" | "parent") => {
        navigation.navigate("LoginNav", { type: type });
    };

    return (
        <SafeAreaView style={styles.FormContainer}>
            <Button title="Parent" onPress={() => handlePress("parent")} />
            <Button title="Sitter" onPress={() => handlePress("sitter")} />
        </SafeAreaView>
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

export default ParentOrSitter;
