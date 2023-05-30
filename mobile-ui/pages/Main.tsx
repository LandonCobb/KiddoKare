import { useContext, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { SecurityContext } from "../contexts/SecurityProvider";
import AuthNav from "../nav/AuthNav";
import SitterNav from "../nav/SitterNav";
import ParentNav from "../nav/ParentNav";
import SitterMain from "./SitterMain";

const Main = () => {
    const { type } = useContext(SecurityContext);

    useEffect(() => {
        // console.log(type);
    }, []);

    return type == "" ? <AuthNav /> : type == "sitter" ? <SitterMain /> : <ParentNav />;
};

export default Main;
