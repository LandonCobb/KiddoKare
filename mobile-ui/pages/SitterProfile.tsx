import { useState } from "react";
import {SafeAreaView, Text, TextInput} from "react-native";

const SitterProfile = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [bio, setBio] = useState("");

    return(
        <SafeAreaView>

            <Text>Name</Text>

            <TextInput
            style={{height:40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setName}
            value={name}
            />

            <Text>Bio</Text>

            <TextInput
            style={{height:40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setBio}
            value={bio}
            />

            <Text>Address</Text>

            <TextInput
            style={{height:40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setAddress}
            value={address}
            />

            <Text>Email</Text>
            
            <TextInput
            style={{height:40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setEmail}
            value={email}
            />


            <Text>Password</Text>

            <TextInput
            style={{height:40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={setPassword}
            value={password}
            />
        </SafeAreaView>
    );
};

export default SitterProfile;