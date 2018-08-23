import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Input from './components/input/input'
import Tinder from './components/tinder/tinder'

export default class App extends React.Component {
  state = {
    value: '',
    jokes: [],
  }

  render() {
    console.log(this.state.jokes);
    console.log(this.state.value);
    console.log(typeof this.state.value);
    return (
        <View style={styles.container}>
          <Input
              updateJokes={jokes => this.setState({ jokes: jokes})}
              value={this.state.value}
              onChange={value => this.setState({ value: value })}
            />
          <Tinder
            jokes={this.state.jokes}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
      width: 100,
      height: 50
  }
});
