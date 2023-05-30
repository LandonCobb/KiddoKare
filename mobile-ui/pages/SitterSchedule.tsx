import{Text, SafeAreaView, View} from "react-native";
import TimeBlock from "../types/TimeBlock";
import {useEffect, useState, useContext} from "react";
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
        <SafeAreaView>
            {timeBlocks && (
                <View>
                    <View>
                        <Text>Schedule</Text>
                        <ScrollView>
                            {timeBlocks.blocks.map((block) => (
                                !block.dateBooked && (
                                    <View>
                                        <Text>Start Hour: {block.startHour}</Text>
                                        <Text>End Hour: {block.endHour}</Text>
                                        <Text>{block.dayOfWeek}</Text>
                                    </View>)
                            ))}
                        </ScrollView>
                    </View>
                    <View>
                        <Text>Reserved</Text>
                        <ScrollView>
                        {timeBlocks.blocks.map((block) => (
                                block.dateBooked && (
                                    <View>
                                        <Text>Start Hour: {block.startHour}</Text>
                                        <Text>End Hour: {block.endHour}</Text>
                                        <Text>{block.dayOfWeek}</Text>
                                        <Text>Date: {block.dateBooked.split(":")[0].slice(0,-3)}</Text>
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

export default SitterSchedule;

