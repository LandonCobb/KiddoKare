import ScheduleIdProvider from "../contexts/ScheduleIdProvider";
import SitterNav from "../nav/SitterNav";

const SitterMain = () => {
    return (
        <ScheduleIdProvider>
            <SitterNav />
        </ScheduleIdProvider>
    );
};
