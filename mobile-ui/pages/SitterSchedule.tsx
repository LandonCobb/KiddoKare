import{ Text, SafeAreaView, View, StyleSheet } from "react-native";
import TimeBlock from "../types/TimeBlock";
import { useEffect, useState, useContext } from "react";
import ip from "../ip";
import { ScheduleIdContext } from "../contexts/ScheduleIdProvider";
import { ScrollView } from "react-native-gesture-handler";

interface Schedule {
    blocks: TimeBlock[];
    sitterEmail: string;
}

const SitterSchedule = () => {

    const [timeBlocks, setTimeBlocks] = useState<Schedule>()
    const {scheduleId} = useContext(ScheduleIdContext);

    useEffect(() => {
        fetch("http://" + ip + ":8080/schedule/" + scheduleId)
        .then((res) => res.json())
        .then((data) => {
            setTimeBlocks(data);
        } );
    }, []);

    return(
        <SafeAreaView style={styles.FormContainer}>
            {timeBlocks && (
                <View>
                    <View style={{height: "48%"}}>
                        <Text style={styles.TextHeader}>Schedule</Text>
                        <ScrollView style={styles.ScrollView}>
                            {timeBlocks.blocks.map((block) => (
                                !block.dateBooked && (
                                    <View>
                                        <Text style={styles.TextHeader2}>{block.dayOfWeek}:</Text>
                                        <View style={styles.ResultContainer} >
                                            <Text style={styles.Text}>Start Hour: {block.startHour}</Text>
                                            <Text style={styles.Text}>End Hour: {block.endHour}</Text>
                                        </View>
                                    </View>
                                    )
                            ))}
                        </ScrollView>
                    </View>
                    <View style={{height: "48%"}}>
                        <Text style={styles.TextHeader}>Reserved</Text>
                        <ScrollView style={styles.ScrollView}>
                        {timeBlocks.blocks.map((block) => (
                                block.dateBooked && (
                                    <View>
                                        <Text style={styles.TextHeader2}>{block.dayOfWeek}:</Text>
                                        <View style={styles.ResultContainer}>
                                            <Text style={styles.Text}>Date: {block.dateBooked.split(":")[0].slice(0,-3)}</Text>
                                            <Text style={styles.Text}>Start Hour: {block.startHour}</Text>
                                            <Text style={styles.Text}>End Hour: {block.endHour}</Text>
                                        </View>
                                    </View>
                                )
                            ))}
                        </ScrollView>
                    </View>
                </View>
            )}
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
        fontWeight: "500",
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

export default SitterSchedule;

