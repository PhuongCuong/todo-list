import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign"




// const itemSeparator = () => {
//     return (
//         <View style={{ height: 1, width: "100%", backgroundColor: "#CCC" }}></View>
//     )
// }

const Home = ({ navigation, route }) => {

    const [objname, setobjname] = useState([
        { id: 1, name: "Nguyễn Phương Cường" },
        { id: 2, name: "Nguyễn văn a" },
        { id: 3, name: "Nguyễn văn b" },
        { id: 4, name: "Nguyễn văn c" },
        { id: 5, name: "Nguyễn văn d" },
    ])

    const [textsearch, settextsearch] = useState('');
    const [filteredObjname, setFilteredObjname] = useState([]);

    const handleDelete = (delte) => {
        let deleteobj = filteredObjname.filter(item => item.id !== delte.id)
        setFilteredObjname(deleteobj)
    }

    const handleUpdate = (update) => {
        navigation.navigate("update", { update, filteredObjname, setFilteredObjname })
    }

    useEffect(() => {
        if (textsearch === '') {
            setFilteredObjname(objname)
        }
        else {
            const filteredItems = objname.filter(item =>
                item.name.toLowerCase().includes(textsearch.toLowerCase())
            );
            setFilteredObjname(filteredItems)
        }
    }, [textsearch])


    const stylerender = ({ item }) => {
        return (
            <View style={{ height: 53, width: 335, alignItems: "center", marginLeft: 15, backgroundColor: "#55BCF6", marginTop: 10, marginBottom: 10, borderRadius: 5, flexDirection: "row" }}>

                <Text style={{ marginLeft: 10, fontFamily: "Roboto", fontWeight: "600", fontSize: 18, lineHeight: 16.41, color: "#1A1A1A" }}>{item.name}</Text>
                <Pressable style={{ marginLeft: "auto" }}
                    onPress={() => handleUpdate(item)}
                >
                    <Icon name="edit" size={24} color="#ffd700" />
                </Pressable>
                <Pressable style={{ marginLeft: 10, marginRight: 10 }}
                    onPress={() => handleDelete(item)}
                >
                    <Icon name="delete" size={24} color="#adff2f" />
                </Pressable>
            </View>
        )
    }

    return (
        <View style={{
            backgroundColor: "#E8EAED", flex: 9, alignItems: "center"
        }}>
            <View style={{ width: 335, height: 40, borderWidth: 1, marginRight: 14, marginLeft: 30, marginTop: 10, flexDirection: "row", alignItems: "center" }}>
                <Icon name="search1" size={30} />
                <TextInput style={{ width: 200, height: 40, outline: "none" }} placeholder='search'
                    onChange={(e) => settextsearch(e.target.value)}
                />
            </View>
            <FlatList
                style={{ flex: 8 }}
                data={filteredObjname}
                renderItem={stylerender}
            />
            <View style={{ flex: 1, width: 60, height: 60, marginLeft: "auto", marginRight: 15, marginBottom: 15 }}>
                <Pressable style={{ width: 60, height: 60, borderRadius: '50%', backgroundColor: "#FFFFFF", justifyContent: "center", alignItems: "center" }}
                    onPress={() => navigation.navigate("create", { filteredObjname, setFilteredObjname })}
                >
                    <Image style={{ width: 32, height: 32 }} source={require("../../assets/ant-design_plus-outlined.png")} />
                </Pressable>
            </View>
        </View>
    );
};

export default Home;