import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, StatusBar } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const onButtonPress = (value) => {
    if (value === '=') {
      try {
        
        if (input.includes('/0')) {
          setResult('Error: Division by zero');
          return;
        }
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          value={input}
          onChangeText={setInput}
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          {['C', '()', '%','/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0','.', '00','='].map(
            (item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.button]}
                onPress={() => onButtonPress(item)}>
                <Text style={styles.textButton}>{item}</Text>
              </TouchableOpacity>
            )
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    fontSize: 50,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 40,
  },
  buttonContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    width: '25%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20
  },
  textButton: {
    fontSize: 30,
    fontWeight: 'normal'
  },
});
