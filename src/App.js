import React from 'react';
import {View,Text, StyleSheet, SafeAreaView,StatusBar} from 'react-native';


const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={'pink'} barStyle={'dark-content'} />
    <View>
      <Text style={style.text}>Hello Word</Text>
    </View>
    </SafeAreaView>
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