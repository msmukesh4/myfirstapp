import React, { Component } from 'react';
import { View } from 'react-native';
import Album from './components/Album';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'My List'} />
        <Album />
      </View>
    );
  }
}

export default App;
