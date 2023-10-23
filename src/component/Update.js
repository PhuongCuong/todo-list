import React, { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const Update = ({ route, navigation }) => {
    const [objadd, setobjadd] = useState({
        id: "", name: ""
    })


    const handleOnChang = (e, id) => {
        let copystate = { ...objadd };
        copystate[id] = e.target.value;
        setobjadd({ ...copystate })
    }

    const checkinput = () => {
        let result = true;
        let arr = ["id", "name"];
        for (let i = 0; i < arr.length; i++) {
            if (!objadd[arr[i]]) {
                result = false;
                alert(`bạn chưa nhập ${arr[i]}`);
                break;
            }

        }
        return result;
    }

    const handleSave = async () => {
        if (checkinput() === true) {
            if (route.params.filteredObjname && route.params.filteredObjname.length > 0) {
                let updatelist = [...route.params.filteredObjname];
                let indexfind = updatelist.findIndex(item => item.id === objadd.id);
                if (indexfind !== -1) {
                    updatelist[indexfind] = objadd;
                }
                await route.params.setFilteredObjname(updatelist);
                await navigation.navigate("home")
            }

        }
    }

    useEffect(() => {
        if (route.params.update) {
            setobjadd(route.params.update)
        }
    }, [])

    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <TextInput editable={false} style={{ backgroundColor: "white", width: 250, height: 50, borderWidth: 1, marginTop: 20, marginBottom: 20, borderRadius: 5 }} placeholder='id'
                onChange={(e) => handleOnChang(e, "id")}
                value={objadd.id}
            />
            <TextInput style={{ backgroundColor: "white", width: 250, height: 50, borderWidth: 1, borderRadius: 5, marginBottom: 20 }} placeholder='Name'
                onChange={(e) => handleOnChang(e, "name")}
                value={objadd.name}

            />
            <Pressable style={{ width: 250, height: 50, borderRadius: 5, backgroundColor: "#55BCF6", justifyContent: "center", alignItems: "center" }}
                onPress={() => handleSave()}
            >
                <Text style={{ width: 150, height: 27, fontFamily: "Roboto", fontWeight: "700", fontSize: 20, lineHeight: 23.44, textAlign: "center", color: "#FFFFFF" }}>Save update</Text>
            </Pressable>
        </View>
    );
};

export default Update;