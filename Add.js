import React, { useState } from "react";
import { TextInput, View, Text, Button } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { datasource } from "./Data.js";

const Add = ({ navigation }) => {
    const [name, setName] = useState("");
    const [pokemonNo, setPokemonNo] = useState("");
    const [type, setType] = useState("Electric"); // Default type

    return (
        <View style={{ padding: 10 }}>
            <View style={{ padding: 10 }}>
                <Text>Pokemon Name:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <Text>Pokemon No:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setPokemonNo(text)}
                />
            </View>

            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={type}
                    onValueChange={(value) => setType(value)}
                    items={[
                        { label: "Electric", value: "Electric" },
                        { label: "Fire", value: "Fire" },
                        { label: "Water", value: "Water" },
                    ]}
                />
            </View>

            <Button
                title="SUBMIT"
                onPress={() => {
                    let indexNum = 0;
                    if (type === "Fire") indexNum = 1;
                    if (type === "Water") indexNum = 2;

                    let item = { name, image: pokemonNo };
                    datasource[indexNum].data.push(item);
                    navigation.navigate("Home");
                }}
            />
        </View>
    );
};

export default Add;

