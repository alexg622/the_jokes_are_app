import React from 'react';
import { Keyboard, StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native'

export default class Input extends React.Component {

  fetchData(){
    fetch(`http://api.icndb.com/jokes/random/${this.props.value}`)
      .then(res => res.json())
      .then(data => this.props.updateJokes(data.value))
      Keyboard.dismiss()
  }
  render(){
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType={'numeric'}
          value={this.props.value}
          onChangeText={text => this.props.onChange(text)}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.fetchData()}
        >
          <Text style={styles.text}>Search</Text>
        </TouchableHighlight>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 2,
  },
  button: {
    backgroundColor: "blue",
    height: 40,
    width: 100,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "white"
  }
})
