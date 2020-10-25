import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

//import ListaProdutos from './components/produtos/ListaProdutos'
import Mega from './components/mega/Mega'

const App = () => {
  return(
    <SafeAreaView style={style.Container}>
      <Mega qtdeNumeros={2}/>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  }
})

export default App;