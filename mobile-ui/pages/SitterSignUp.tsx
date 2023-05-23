import { useState } from "react";
import { Text, SafeAreaView, Button, TextInput } from "react-native";

const SitterSignUp = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView>

            <Text>Sign UP</Text>

            <Text>Email</Text>

            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setEmail}
        value={email}
    />
            <Text>Name</Text>

            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setName}
        value={name}
    />

            <Text>address</Text>

            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setAddress}
        value={address}
    />

            <Text>Password</Text>

            <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setPassword}
        value={password}
    />
            <Button title="Sign Up"></Button>

        </SafeAreaView>
    );
};

export default SitterSignUp;
