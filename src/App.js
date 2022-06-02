import React from 'react';
import {View,Text, StyleSheet, SafeAreaView,StatusBar,Image,Pressable,Linking} from 'react-native';

const colorBackground = '#24292f';
const colorFont = '#FFF';
const colorFontNick = '#57606a';
const imageProfile = 'https://avatars.githubusercontent.com/u/60019853?v=4';
const urlProfileGithub = 'https://github.com/santana-devin';
const App = () => {

const handlePressGoToProfileGithub = async () =>{
 console.log('Verificando link');
 const res = await Linking.canOpenURL(urlProfileGithub);
 if(res){
  console.log('Link Aprovado');
  console.log('Abrindo Link....');
  await Linking.openURL(urlProfileGithub);  
 }else{
   console.log('Problema ao abrir link');
 }
}

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorBackground} barStyle={'dark-content'} />
    <View  style={style.content} >
      <Image accessibilityLabel='Perfil do Github!' source={{uri:imageProfile}} style={style.avata}></Image>
      <Text  accessibilityLabel='Nome' style={[style.text,style.textName]}>Fabrício Santana</Text>
      <Text  accessibilityLabel='NickName' style={[style.text,style.textNick]}>santana-devin</Text>
      <Text  accessibilityLabel='Description' style={[style.text,style.textDescription]}>Entusiasta de desenvolvimento de projetos.</Text>
      <Pressable onPress={handlePressGoToProfileGithub}>
        <View>
          <Text style={[style.button]} >Abrir no Github</Text>
        </View>
      </Pressable>
    </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: colorBackground ,
    flex:1, //Expande o container para a tale inteira
    justifyContent:'center'
  },
  content:{
    alignItems:'center',
    paddingHorizontal:20,
  },
  text:{
    fontSize:20,
    color:'#FFF',
  },
  avata:{
    width:100,
    height:100,
    borderRadius:50,
    borderColor:'white',
    borderWidth:2,
  },
  textName:{
    color: colorFont,
    fontSize:24,
    fontWeight:'bold'
    ,padding:10,
  },
  textNick:{
    color:colorFontNick,
    fontSize: 20,
  },
  textDescription:{
    color:colorFont,
    fontSize: 20,
  },
  button:{
    backgroundColor: '#FFF',
    borderRadius:10,
    padding:10,
    paddingHorizontal:40,
    marginTop:20,
  }
});

export default App;