import React from 'react';
import {View,Text, StyleSheet, SafeAreaView,StatusBar,Image} from 'react-native';

const colorBackground = '#010409';
const imageProfile = 'https://avatars.githubusercontent.com/u/60019853?v=4';
const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorBackground} barStyle={'dark-content'} />
    <View>
      <Image accessibilityLabel='Perfil do Github!' source={{uri:imageProfile}} style={style.avata}></Image>
      <Text style={style.text}>Fabrício Santana</Text>
    </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: colorBackground ,
    flex:1, //Expande o container para a tale inteira
  },
  text:{
    fontSize:20,
    fontWeight: '900',
    color:'#FF0',
    textAlign:'center'
  },
  avata:{
    width:300,
    height:300,
    borderRadius:150,
    borderColor:'white',
    borderWidth:2,
  }
});

export default App;