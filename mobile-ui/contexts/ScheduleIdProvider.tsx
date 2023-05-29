import { useEffect, Dispatch, SetStateAction, createContext, useState, useContext } from "react";
import { SecurityContext } from "./SecurityProvider";
import ip from "../ip";

interface ScheduleIdContextType {
    scheduleId: string;
    setScheduleId: Dispatch<SetStateAction<string>>;
}

export const ScheduleIdContext = createContext<ScheduleIdContextType>({ scheduleId: "", setScheduleId: () => {} });

const ScheduleIdProvider = ({ children }: { children: JSX.Element }) => {
    const { token } = useContext(SecurityContext);
    const [scheduleId, setScheduleId] = useState("");

    useEffect(() => {
        fetch("http://" + ip + ":8080/sitter/search/byEmail", {
            headers: {
                Authorization: "Bearer " + token,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (scheduleId) {
                    setScheduleId(data.scheduleId);
                }
            });
    }, []);

    return (
        <ScheduleIdContext.Provider value={{ scheduleId: scheduleId, setScheduleId: setScheduleId }}>
            {children}
        </ScheduleIdContext.Provider>
    );
};

export default ScheduleIdProvider;
