import { useContext, useEffect, useState } from "react";
import{Text, SafeAreaView, View} from "react-native";
import ip from "../ip";
import { SecurityContext } from "../contexts/SecurityProvider";
import { ScrollView } from "react-native-gesture-handler";

interface TimeBlock {
    startHour: number;
    endHour: number;
    dayOfWeek: string;
    dateBooked: string;
    bookedParentId: string;
}

const ParentSchedule = () => {

    const {email} = useContext(SecurityContext);
    const [timeBlocks, setTimeBlocks] = useState<TimeBlock[]>()


    useEffect(() => {
        fetch("http://" + ip + ":8080/schedule/parent/" + email)
        .then((res) => res.json())
        .then((data) => {
            setTimeBlocks(data);
        } );
    }, []);


    return(
        <SafeAreaView>
            <ScrollView>
                {timeBlocks && (
                    timeBlocks.map((block) => (
                        <View>
                            <Text>Start Hour: {block.startHour}</Text>
                            <Text>End Hour: {block.endHour}</Text>
                            <Text>Date: {block.dateBooked.split(":")[0].slice(0,-3)}</Text>
                        </View>
                    ))
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default ParentSchedule;