import React, { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';

const obj = { username: "cuong", password: "123456" }

const Login = ({ navigation }) => {

    const [login, setlogin] = useState(
        { username: "cuong", password: "123456" }
    )

    const handleOnChang = (e, id) => {
        let copystate = { ...login };
        copystate[id] = e.target.value;
        setlogin({ ...copystate })
    }


    const handleOnclick = () => {
        if (login.username === obj.username && login.password === obj.password) {
            navigation.navigate("home")
        } else {
            alert("Tài khoản hoặc mật khẩu không đúng")
        }
    }


    return (
        <View style={{ flex: 8, backgroundColor: "#FBCB00" }}>
            <View style={{ flex: 3, justifyContent: 'center' }}>
                <Text style={{ width: 150, height: 35, marginLeft: 30, fontFamily: "Roboto", fontWeight: "700", fontSize: 30, lineHeight: 35.16, textAlign: "center" }}>
                    LOGIN
                </Text>
            </View>

            <View style={{ flex: 2, justifyContent: "space-around", alignItems: "center" }}>
                <View style={{ flexDirection: "row", alignItems: "center", width: 330, height: 54, borderWidth: 1, borderStyle: "solid", borderColor: "#F2F2F2", backgroundColor: "#C4C4C4" }}>
                    <Image style={{ width: 32, height: 32, marginLeft: 5 }} source={require("../../assets/imglogin/avatar_user 1.png")} />
                    <TextInput
                        style={{ width: 280, height: "100%", fontFamily: "Roboto", fontWeight: "400", fontSize: 18, lineHeight: 21.09, marginLeft: 5 }} placeholder='name'
                        onChange={(e) => handleOnChang(e, "username")}
                        value={login.username}
                    />
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", width: 330, height: 54, borderWidth: 1, borderStyle: "solid", borderColor: "#F2F2F2", backgroundColor: "#C4C4C4" }}>
                    <Image style={{ width: 32, height: 32, marginLeft: 5 }} source={require("../../assets/imglogin/lock-152879 1.png")} />
                    <TextInput
                        secureTextEntry={true} style={{ width: 240, height: "100%", fontFamily: "Roboto", fontWeight: "400", fontSize: 18, lineHeight: 21.09, marginLeft: 5 }} placeholder='password'
                        onChange={(e) => handleOnChang(e, "password")}
                        value={login.password}

                    />
                    <Image style={{ width: 32, height: 32, marginLeft: 5 }} source={require("../../assets/imglogin/eye 1.png")} />

                </View>
            </View>
            <View style={{ flex: 3, justifyContent: "space-around", alignItems: "center" }}>
                <Pressable style={{
                    width: 330, height: 45, borderRadius: 2, backgroundColor: "#060000", justifyContent: "center", alignItems: "center"
                }}
                    onPress={() => handleOnclick()}
                >
                    <Text style={{ width: 150, height: 27, fontFamily: "Roboto", fontWeight: "700", fontSize: 20, lineHeight: 23.44, textAlign: "center", color: "#FFFFFF" }}>
                        LOGIN
                    </Text>
                </Pressable>
                <Text style={{ width: 239, height: 27, fontFamily: "Roboto", fontWeight: "700", fontSize: 20, lineHeight: 23.44, textAlign: "center", color: "#000000" }}>
                    CREATE ACCOUNT
                </Text>
            </View >
        </View >
    );
};

export default Login;