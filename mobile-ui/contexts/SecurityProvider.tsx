import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch, SetStateAction, createContext, useEffect, useState } from "react";

interface SecurityContextType {
    token: string;
    setToken: Dispatch<SetStateAction<string>>;
    type: "sitter" | "parent" | "";
    setType: Dispatch<SetStateAction<"sitter" | "parent" | "">>;
    email: string;
    setEmail: Dispatch<SetStateAction<string>>;
}

export const SecurityContext = createContext<SecurityContextType>({
    token: "",
    setToken: () => {},
    type: "",
    setType: () => {},
    email: "",
    setEmail: () => {},
});

const SecurityProvider = ({ children }: { children: JSX.Element }) => {
    const [token, setToken] = useState<string>("");
    const [type, setType] = useState<"sitter" | "parent" | "">("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        AsyncStorage.setItem("FINAL::TOKEN", token);
    }, [token]);

    useEffect(() => {
        AsyncStorage.setItem("FINAL::TYPE", type);
    }, [type]);

    useEffect(() => {
        AsyncStorage.getItem("FINAL::TOKEN").then((value) => {
            if (value) {
                setToken(value);
            }
        });

        AsyncStorage.getItem("FINAL::TYPE").then((value) => {
            if (value && (value == "sitter" || value == "parent" || value == "")) {
                setType(value);
            }
        });
    }, []);

    return (
        <SecurityContext.Provider value={{ token, setToken, type, setType, email, setEmail }}>
            {children}
        </SecurityContext.Provider>
    );
};

export default SecurityProvider;
