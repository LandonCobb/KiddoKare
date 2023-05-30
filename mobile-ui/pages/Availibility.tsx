import { useState } from "react";
import { StyleSheet, Text, Button, ScrollView, SafeAreaView, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import ip from "../ip";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteParams } from "../nav/LoginNav";
import { RouteProp } from "@react-navigation/native";

type AvailabilityProps = {
    navigation: StackNavigationProp<RouteParams, "Availability">;
    route: RouteProp<RouteParams, "Availability">;
};

const Availability = ({ navigation, route }: AvailabilityProps) => {
    const { scheduleId } = route.params;
    const [monStart, setMonStart] = useState(-1);
    const [monEnd, setMonEnd] = useState(-1);
    const [tueStart, setTueStart] = useState(-1);
    const [tueEnd, setTueEnd] = useState(-1);
    const [wedStart, setWedStart] = useState(-1);
    const [wedEnd, setWedEnd] = useState(-1);
    const [thurStart, setThurStart] = useState(-1);
    const [thurEnd, setThurEnd] = useState(-1);
    const [friStart, setFriStart] = useState(-1);
    const [friEnd, setFriEnd] = useState(-1);
    const [satStart, setSatStart] = useState(-1);
    const [satEnd, setSatEnd] = useState(-1);
    const [sunStart, setSunStart] = useState(-1);
    const [sunEnd, setSunEnd] = useState(-1);

    const handleSave = () => {
        let obj = [
            {
                startHour: sunStart,
                endHour: sunEnd,
                dayOfWeek: "Sunday",
            },
            {
                startHour: monStart,
                endHour: monEnd,
                dayOfWeek: "Monday",
            },
            {
                startHour: tueStart,
                endHour: tueEnd,
                dayOfWeek: "Tuesday",
            },
            {
                startHour: wedStart,
                endHour: wedEnd,
                dayOfWeek: "Wednesday",
            },
            {
                startHour: thurStart,
                endHour: thurEnd,
                dayOfWeek: "Thursday",
            },
            {
                startHour: friStart,
                endHour: friEnd,
                dayOfWeek: "Friday",
            },
            {
                startHour: satStart,
                endHour: satEnd,
                dayOfWeek: "Saturday",
            },
        ];

        obj = obj.filter((value) => value.startHour != -1 && value.endHour != -1);

        // need the id of the schedule
        fetch("http://" + ip + ":8080/schedule/defaults/" + scheduleId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        navigation.navigate("Login", { type: "sitter" });
    };

    const data = [
        { key: 0, value: "12am" },
        { key: 1, value: "1am" },
        { key: 2, value: "2am" },
        { key: 3, value: "3am" },
        { key: 4, value: "4am" },
        { key: 5, value: "5am" },
        { key: 6, value: "6am" },
        { key: 7, value: "7am" },
        { key: 8, value: "8am" },
        { key: 9, value: "9am" },
        { key: 10, value: "10am" },
        { key: 11, value: "11am" },
        { key: 12, value: "12pm" },
        { key: 13, value: "1pm" },
        { key: 14, value: "2pm" },
        { key: 15, value: "3pm" },
        { key: 16, value: "4pm" },
        { key: 17, value: "5pm" },
        { key: 18, value: "6pm" },
        { key: 19, value: "7pm" },
        { key: 20, value: "8pm" },
        { key: 21, value: "9pm" },
        { key: 22, value: "10pm" },
        { key: 23, value: "11pm" },
    ];

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
            <Button title="Save" onPress={handleSave} />
        </SafeAreaView>
    );
};

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

export default Availability;
