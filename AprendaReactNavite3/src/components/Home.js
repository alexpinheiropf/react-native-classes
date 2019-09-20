import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default class components extends Component {
  render() {

    const { navigation } = this.props;
    const nomeUsuario = navigation.getParam('nome');


    return <View style={styles.container}> 
            <Image 
              style={styles.logo}
              source={require("../assets/profile.jpg")}
            />

              <Text style={styles.text}>
              Olá { nomeUsuario } !!!

              </Text>
               <Text style={styles.text1}> Esse é o seu profile</Text> 

            </View>;
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7f8c8d'
    },
    logo: {
      width: 100,
      height: 100,
      borderRadius:100
    },
    text: {
      fontSize:20,
      color: '#ecf0f1'
    },
    text1: {
      fontSize:16,
      color: '#2c3e50'
    }
})
