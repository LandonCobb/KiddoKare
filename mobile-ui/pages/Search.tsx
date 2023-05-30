import { StyleSheet, Text, TextInput, Button, SafeAreaView, ScrollView, View } from "react-native";

const styles = StyleSheet.create({
    FormContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#212121",
    },

    TextInputsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        borderRadius: 5,
        padding: "5%",
        width: "80%",
    },

    ButtonContainer: {
        alignContent: "center",
        justifyContent: "center",
        marginLeft: "5%",
    },

    GoToButtonContainer: {
        alignContent: "center",
        justifyContent: "center",
    },

    ListContainer: {
        height: "35%",
    },

    ResultContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignContent: "center",
        padding: "2%",
        backgroundColor: "#212121",
        borderRadius: 5,
        marginBottom: "3%",
    },

    RowContainer: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
    },

    ScrollView: {
        borderRadius: 5,
        backgroundColor: "#101010",
        padding: "3%",
        marginBottom: "5%",
        width: "95%",
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
        textAlignVertical: "center",
        alignItems: "center",
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
        width: "100%",
        fontSize: 24,
        color: "#ffffff",
        backgroundColor: "#181818",
    },
});
const buttonColor = "#9e00ff";

const Search = () => {
    return (
        <SafeAreaView style={styles.FormContainer}>
            <Text style={styles.TextHeader}>Search</Text>
            <View style={styles.TextInputsContainer}>
                <TextInput style={styles.TextInput}></TextInput>
                <View style={styles.ButtonContainer}>
                    <Button title="Search" color={buttonColor} />
                </View>
            </View>
            <ScrollView style={styles.ScrollView} contentContainerStyle={{ justifyContent: "space-evenly" }}>
                {/* Example result */}
                <View style={styles.ResultContainer}>
                    <Text style={styles.TextHeader2}>Parent Info blah blah</Text>
                    <View style={styles.GoToButtonContainer}>
                        <Button title="Go To Profile" color={buttonColor} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Search;
