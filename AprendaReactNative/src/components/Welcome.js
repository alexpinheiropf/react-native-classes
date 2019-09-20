import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from '../styles/App';

export default class Welcome extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto1}>
                {this.props.titulo}
            </Text>
            <Text style={styles.texto2}>
                {this.props.slogan}
            </Text>
        </View>
    );
  }
}
