import { useState } from "react";
import { StyleSheet, Text, Button, ScrollView, SafeAreaView, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

const Availability = () => {
    const [monStart, setMonStart] = useState("");
    const [monEnd, setMonEnd] = useState("");
    const [tueStart, setTueStart] = useState("");
    const [tueEnd, setTueEnd] = useState("");
    const [wedStart, setWedStart] = useState("");
    const [wedEnd, setWedEnd] = useState("");
    const [thurStart, setThurStart] = useState("");
    const [thurEnd, setThurEnd] = useState("");
    const [friStart, setFriStart] = useState("");
    const [friEnd, setFriEnd] = useState("");
    const [satStart, setSatStart] = useState("");
    const [satEnd, setSatEnd] = useState("");
    const [sunStart, setSunStart] = useState("");
    const [sunEnd, setSunEnd] = useState("");

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
            justifyContent: "center",
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

        ListContainer: {
            height: "35%",
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
            margin: "3%",
            fontSize: 32,
            fontWeight: "400",
            color: "#a0a0a0",
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

        Box: {
            marginHorizontal: 5,
            borderColor: "#a0a0a0",
        },

        DropDown: {
            borderWidth: 0,
        },

        DropDownText: {
            color: "#ffffff",
        },

        Input: {
            color: "#ffffff",
        },
    });
    const buttonColor = "#9e00ff";

    return (
        <SafeAreaView style={styles.FormContainer}>
            <Text style={styles.TextHeader}>Availability</Text>

            {/* Change 'setSelected' variables */}
            {/* Start times */}
            <Text style={styles.TextHeader2}>Select Start Times:</Text>
            <View style={styles.ListContainer}>
                <ScrollView horizontal={true} style={styles.RowContainer}>
                    <SelectList
                        data={data}
                        setSelected={setMonStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Monday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setTueStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Tuesday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setWedStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Wednesday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setThurStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Thursday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setFriStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Friday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setSatStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Saturday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setSunStart}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Sunday"
                    />
                </ScrollView>
            </View>

            {/* End times */}
            <Text style={styles.TextHeader2}>Select End Times:</Text>
            <View style={styles.ListContainer}>
                <ScrollView horizontal={true} style={styles.RowContainer}>
                    <SelectList
                        data={data}
                        setSelected={setMonEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Monday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setTueEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Tuesday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setWedEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Wednesday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setThurEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Thursday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setFriEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Friday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setSatEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Saturday"
                    />
                    <SelectList
                        data={data}
                        setSelected={setSunEnd}
                        boxStyles={styles.Box}
                        dropdownTextStyles={styles.DropDownText}
                        dropdownStyles={styles.DropDown}
                        inputStyles={styles.Input}
                        placeholder="Sunday"
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Availability;
