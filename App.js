import React from 'react';
import {View, Text, Image, TouchableOpacity, Button, StyleSheet, ScrollView, SectionList, StatusBar} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const datasource = [
  {data:[
      {name: 'Pikachu', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_25-2x.png'},
      {name: 'Jolteon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_135-2x.png'},
    ],
    title:"Electric", bgColour: '#fdfd96', iconType: "bolt", tColour: '#e7e12c'},
  {data:[
      {name: 'Charmander', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_4-2x.png'},
      {name: 'Flareon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_136-2x.png'},
    ],
    title:"Fire", bgColour: '#f08080', iconType: "fire", tColour: '#e75b2c'},
  {data:[
      {name: 'Squirtle', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_7-2x.png'},
      {name: 'Vaporeon', image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_134-2x.png'},
    ], title:"Water", bgColour: '#add8e6', iconType: "droplet", tColour: '#2cbbe7'},
];

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

const App = () => {
  return (
      <View style={{ marginBottom: 100 }}>
          <StatusBar hidden={true} />
      <View style={styles.buttonStyle}>
              <Button title="Add Pokemon"/>
          </View>
        <SectionList sections={datasource} renderItem={renderItem}
                     renderSectionHeader={({section:{title, bgColour, iconType, tColour}})=>(
                         <Text style={[styles.headerText, {backgroundColor:bgColour}, {color: tColour}]}><Icon name={iconType} size={20}/>  {title}</Text>
                     )}/>
      </View>
  );
};

const renderItem = ({item, section}) => {
  return (
      <TouchableOpacity style={[styles.opacityStyle, {backgroundColor: '#eeeeee' }]}>
          <Text style={styles.textStyle}>{item.name}</Text>
          <Image source={{ uri: item.image }} style={styles.imageStyle}  />
      </TouchableOpacity>
  );
};

export default App;
