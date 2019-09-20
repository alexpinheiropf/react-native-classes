import React, {Component} from 'react';
import {  View, Text, TouchableOpacity } from 'react-native';

import Welcome from './Welcome';
import styles from '../styles/App';

export default class App extends Component {

state = {
  slogan: "Seu canal de nerdologia"
}

alternar = () => {
  this.setState({
    slogan: this.state.slogan ? '' : 'Seu canal de nerdologia'
  });
}

  render() {
    return (
      // Utilizando através de State
        <View style={styles.container}>
              <TouchableOpacity 
                style={styles.botao}
                onPress={this.alternar}
              >
                <Text> Mudar state </Text>
              </TouchableOpacity>
          <Text style={styles.texto1}> Canal Geek Dev  </Text>
          <Text style={styles.texto2}> { this.state.slogan }  </Text>
      </View>

      /* Utilizando Props */
          // <Welcome 
          //   titulo= "Canal Geek Dev"
          //   slogan="Seu canal de nerdologia"
          // />
    );
  }
}


