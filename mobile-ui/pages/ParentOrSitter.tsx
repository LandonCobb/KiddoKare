import { useEffect, useState } from "react";
import { Button, SafeAreaView } from "react-native";

const ParentOrSitter = () => {

    return (
        <SafeAreaView>
            <Button title="Parent"></Button>
            <Button title="Sitter"></Button>
        </SafeAreaView>
    );
}

export default ParentOrSitter;