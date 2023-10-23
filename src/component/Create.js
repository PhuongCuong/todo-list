import React, { useEffect, useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

const Create = (props) => {

    const [objadd, setobjadd] = useState({
        id: "", name: ""
    })

    const [listobj, setlistobj] = useState([])

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
            let updatelist = [...listobj, objadd];
            await props.route.params.setFilteredObjname(updatelist);
            await props.navigation.navigate("home");
        }
    }

    useEffect(() => {
        if (props.route.params.filteredObjname && props.route.params.filteredObjname.length > 0) {
            setlistobj(props.route.params.filteredObjname)
        }
    }, [])



    return (
        <View style={{ flex: 1, alignItems: "center" }}>
            <TextInput style={{ backgroundColor: "white", width: 250, height: 50, borderWidth: 1, marginTop: 20, marginBottom: 20, borderRadius: 5 }} placeholder='id'
                onChange={(e) => handleOnChang(e, "id")}
            />
            <TextInput style={{ backgroundColor: "white", width: 250, height: 50, borderWidth: 1, borderRadius: 5, marginBottom: 20 }} placeholder='Name'
                onChange={(e) => handleOnChang(e, "name")}

            />
            <Pressable style={{ width: 250, height: 50, borderRadius: 5, backgroundColor: "#55BCF6", justifyContent: "center", alignItems: "center" }}
                onPress={() => handleSave()}
            >
                <Text style={{ width: 150, height: 27, fontFamily: "Roboto", fontWeight: "700", fontSize: 20, lineHeight: 23.44, textAlign: "center", color: "#FFFFFF" }}>Save</Text>
            </Pressable>
        </View>
    );
};

export default Create;