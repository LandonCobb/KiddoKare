import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { RouteParams } from "../nav/SearchNav";
import { useEffect, useState, useContext } from "react";
import TimeBlock from "../types/TimeBlock";
import ip from "../ip";
import { TextInput } from "react-native-gesture-handler";
import { SecurityContext } from "../contexts/SecurityProvider";

type SearchProps = {
    navigation: StackNavigationProp<RouteParams, "Reserve">;
    route: RouteProp<RouteParams, "Reserve">;
};

interface Schedule {
    blocks: TimeBlock[];
    sitterEmail: string;
}

const Reserve = ({ navigation, route }: SearchProps) => {
    const { sitter } = route.params;
    const { email } = useContext(SecurityContext);
    const [schedule, setSchedule] = useState<Schedule>();
    const [year, setYear] = useState("");
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [startHour, setStartHour] = useState(-1);
    const [endHour, setEndHour] = useState(-1);
    const [dayOfWeek, setDayOfWeek] = useState("");

    useEffect(() => {
        console.log(sitter.scheduleId);
        fetch("http://" + ip + ":8080/schedule/" + sitter.scheduleId)
            .then((res) => res.json())
            .then((data) => setSchedule(data));
    }, []);

    const handlePressTime = (startHour: number, endHour: number, dayOfWeek: string) => {
        console.log(startHour + " " + endHour);
        setStartHour(startHour);
        setEndHour(endHour);
        setDayOfWeek(dayOfWeek);
    };

    const handleSubmit = () => {
        fetch("http://" + ip + ":8080/schedule/" + sitter.scheduleId + "/book", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                startHour: startHour,
                endHour: endHour,
                dayOfWeek: dayOfWeek,
                bookedParentId: email,
                // date: year + "-" + month.padStart(2, "0") + "-" + day + "T00:00.000Z",
                dateBooked: new Date(parseInt(year), parseInt(month), parseInt(day)).toISOString(),
            }),
        });
    };

    return (
        <View>
            <Text>{sitter.name}</Text>
            <Text>{sitter.bio}</Text>
            <View>
                <Text>Times</Text>
                <View>
                    {schedule &&
                        schedule.blocks.map(
                            (block) =>
                                !block.dateBooked && (
                                    <TouchableOpacity
                                        onPress={() => handlePressTime(block.startHour, block.endHour, block.dayOfWeek)}
                                    >
                                        <View>
                                            <Text>{block.dayOfWeek}</Text>
                                            <Text>{block.startHour}</Text>
                                            <Text>{block.endHour}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                        )}
                </View>
            </View>
            <TextInput placeholder="Year" value={year} onChangeText={setYear} />
            <TextInput placeholder="Month" value={month} onChangeText={setMonth} />
            <TextInput placeholder="Day" value={day} onChangeText={setDay} />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default Reserve;
