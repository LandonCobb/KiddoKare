import { useState } from "react";
import { Text, SafeAreaView, TextInput, Button } from "react-native";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    return (
        <SafeAreaView>

            <Text>Email</Text>
            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setEmail}
        value={email}
    />



            <Text>Password</Text>
            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setPassword}
        value={password}
    />

    <Button title="Log In"></Button>
    <Button title="Sign Up"></Button>

        </SafeAreaView>
    );
};

export default Login;
