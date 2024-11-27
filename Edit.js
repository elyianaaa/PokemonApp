import { datasource } from './Data.js';
import React, { useState } from "react";
import { Button, View, Text, TextInput, Alert } from "react-native";

const Edit = ({ navigation, route }) => {
    const [name, setName] = useState(route.params.name);
    const [pokemonNo, setPokemonNo] = useState(route.params.image);

    return (
        <View>
            <Text>Pokemon Name:</Text>
            <TextInput
                value={name}
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setName(text)}
            />
            <Text>Pokemon No:</Text>
            <TextInput
                value={pokemonNo}
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setPokemonNo(text)}
            />

            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            let indexnum = 0;
                            if (route.params.type == "Fire") {
                                indexnum = 1;
                            }
                            if (route.params.type == "Water") {
                                indexnum = 2;
                            }
                            if (route.params.type == "Electric") {
                                indexnum = 0; // Fixed the wrong condition logic here
                            }
                            datasource[indexnum].data[route.params.index].name = name;
                            datasource[indexnum].data[route.params.index].image = pokemonNo;
                            navigation.navigate("Home");
                        }}
                    />
                </View>

                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title="Delete"
                        onPress={() => {
                            let indexnum = 0;
                            if (route.params.type == "Fire") {
                                indexnum = 1;
                            }
                            if (route.params.type == "Water") {
                                indexnum = 2;
                            }
                            if (route.params.type == "Electric") {
                                indexnum = 0; // Fixed the condition logic here
                            }
                            Alert.alert("Are you sure?", '', [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        datasource[indexnum].data.splice(route.params.index, 1);
                                        navigation.navigate("Home");
                                    }
                                },
                                { text: 'No' }
                            ]);
                        }}
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;

