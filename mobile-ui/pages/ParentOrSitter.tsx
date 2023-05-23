import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native/types"

const ParentOrSitter = () => {

    return (
        <SafeAreaView>
            <Button title="Parent"></Button>
            <Button title="Sitter"></Button>
        </SafeAreaView>
    );
}

export default ParentOrSitter;