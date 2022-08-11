import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.bloco} >
        <Text style={styles.texto}> Previsão do tempo</Text>
      </View>
      <View style={styles.blocoInput}>
        <TextInput
          placeholder='Sua cidade...'
          placeholderTextColor='#FFF'
          style={styles.input}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.texto}> Buscar</Text>
        </TouchableOpacity>
        <Tempo />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  bloco: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 10,
    padding: 10
  },
  blocoInput: {
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginBottom: 10,
    padding: 3
  },
  input: {
    color: "#FFF",
    padding: 10
  },
  texto: {
    color: '#FFF',
    fontSize: 20
  },
  botao: {
    padding: 5,
    
  }

});
