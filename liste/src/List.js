import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

export default function List() {
    const [countries, setCountries] = useState([]);

    const getContries = (() => {
        fetch("http://restcountries.eu/rest/v2/all") 
        .then((res) => res.json()) 
        .then((res) => { 
            setCountries(res); 
        });
        })
        const renderUser = ({ item }) => {
          return <View style={styles.view}>
            <Text style={styles.text}>
            Name : {item.name}</Text>
            <Text style={styles.text}>
            Capital: {item.capital}
            </Text>
            <Image  source={{ uri: item.flag }}
              style={{ width: 100, height: 100 }}></Image>
          </View> 
            
            
          
          
        };


     useEffect(() => {
        getContries();

    },[]) 
        

  return (
  
      <FlatList 
			data={countries}
			renderItem={renderUser}
			keyExtractor={(item, index) => index}
		/>
    
  );
}


const styles = StyleSheet.create({
  text: {
    margin: 10,
    fontSize: 25,
  },

  view: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 15,
  }
});