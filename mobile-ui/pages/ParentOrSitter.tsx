import { StyleSheet, Button, SafeAreaView, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteParams } from "../nav/AuthNav";
import { RouteProp } from "@react-navigation/native";
import { color } from "@rneui/base";

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
            <Text style={styles.TextHeader}>Welcome</Text>

            <View style={styles.ButtonContainer}>
                {/* DON'T USE THIS (WIP) */}
                {/* <Pressable style={styles.Button}>
                    <Text style={styles.ButtonText}>PARENT</Text>
                </Pressable> */}
                <Button title="Parent" color={buttonColor} onPress={() => handlePress("parent")} />
            </View>

            <Text style={styles.TextHeader2}>Or</Text>

            <View style={styles.ButtonContainer}>
                <Button title="Sitter" color={buttonColor} onPress={() => handlePress("sitter")} />
            </View>
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
        width: "25%",
    },

    RowContainer: {
        flexDirection: "row",
    },

    TextHeader: {
        fontSize: 48,
        fontWeight: "300",
        color: "#ffffff",
    },

    TextHeader2: {
        fontSize: 24,
        fontWeight: "400",
        color: "#a0a0a0",
    },

    Text: {
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

    // DON'T USE THIS (WIP)
    // Button: {
    //     backgroundColor: "#9e00ff",
    //     borderRadius: 2,
    //     justifyContent: "center",
    //     alignContent: "center",
    //     padding: "5%",
    //     shadowColor: "#ffffff",
    //     shadowOpacity: 1.0,
    //     shadowRadius: 5,
    //     shadowOffset: { width: 0, height: 10 },
    //     elevation: 1,
    //     marginBottom: "10%",
    // },

    // ButtonText: {
    //     color: "#ffffff",
    //     fontSize: 18,
    //     // iOS
    //     alignItems: "center",
    //     // Android
    //     textAlignVertical: "center",
    //     textAlign: "center",
    // },
});
const buttonColor = "#9e00ff";

export default ParentOrSitter;
