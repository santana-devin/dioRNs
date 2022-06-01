import React from 'react';
import {View,Text, StyleSheet} from 'react-native';


const App = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello Word</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: 'blue',
    flex:1, //Expande o container para a tale inteira
  },
  text:{
    fontSize:50,
    fontWeight: '900',
    color:'black'

  }
});

export default App;