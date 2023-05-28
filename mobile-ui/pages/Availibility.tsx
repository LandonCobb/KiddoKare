import { useState } from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Availability = () => {
    const [selected, setSelected] = useState("");

    const data = [
        { key: "1", value: "1" },
        { key: "2", value: "2" },
        { key: "3", value: "3" },
        { key: "4", value: "4" },
        { key: "5", value: "5" },
        { key: "6", value: "6" },
        { key: "7", value: "7" },
        { key: "8", value: "8" },
        { key: "9", value: "9" },
        { key: "10", value: "10" },
        { key: "11", value: "11" },
        { key: "12", value: "12" },
    ];

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

    return (
        <SafeAreaView style={styles.FormContainer}>
            <Text style={styles.TextHeader}>Availability</Text>

            {/* Change 'setSelected' variables */}
            {/* Start times */}
            <View>
                {/* Monday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />

                {/* Tuesday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />

                {/* Wednesday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />

                {/* Thursday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />

                {/* Friday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />

                {/* Saturday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />

                {/* Sunday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select Start Hour" />
            </View>

            {/* End times */}
            <View>
                {/* Monday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />

                {/* Tuesday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />

                {/* Wednesday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />

                {/* Thursday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />

                {/* Friday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />

                {/* Saturday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />

                {/* Sunday */}
                <SelectList data={data} setSelected={setSelected} placeholder="Select End Hour" />
            </View>
        </SafeAreaView>
    );
};

export default Availability;
