import React from 'react';
import { StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { datasource } from './Data.js';

const styles = StyleSheet.create({
    headerText:{
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10
    },
    opacityStyle:{
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        alignItems: 'center',

    },
    textStyle:{
        fontSize: 20,
        margin: 10,
        textAlign: 'center',
        flex: 1,
        fontWeight: 'bold'
    },
    imageStyle: {
        margin: 10,
        width: 215,
        height: 300,
    },
    buttonStyle: {
        margin: 10,
        borderWidth: 1,
    }
});

const Home = ({ navigation }) => {
    const renderItem = ({ item, index, section }) => {
        const imageLink = `https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_${item.image}-2x.png`;

        return (
            <TouchableOpacity
                style={styles.opacityStyle}
                onPress={() => {
                    navigation.navigate('Edit', {
                        name: item.name,
                        image: item.image,
                        index: index,
                        type: section.title
                    });
                }}
            >
                <Image source={{ uri: imageLink }} style={styles.imageStyle} />
                <Text style={styles.textStyle}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <StatusBar />
            <Button
                title="Add Pokemon"
                onPress={() => {
                    navigation.navigate('Add');
                }}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColour } }) => (
                    <Text style={[styles.headerText, { backgroundColor: bgColour }]}>
                        {title}
                    </Text>
                )}
                keyExtractor={(item, index) => item.name + index}
            />
        </View>
    );
};

export default Home;

