import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
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
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <Text style={styles.result}>{result}</Text>
      <View style={styles.buttonContainer}>
        <Button title="7" onPress={() => handlePress('7')} buttonStyle={styles.button} />
        <Button title="8" onPress={() => handlePress('8')} buttonStyle={styles.button} />
        <Button title="9" onPress={() => handlePress('9')} buttonStyle={styles.button} />
        <Button title="/" onPress={() => handlePress('/')} buttonStyle={styles.operatorButton} />
        <Button title="4" onPress={() => handlePress('4')} buttonStyle={styles.button} />
        <Button title="5" onPress={() => handlePress('5')} buttonStyle={styles.button} />
        <Button title="6" onPress={() => handlePress('6')} buttonStyle={styles.button} />
        <Button title="*" onPress={() => handlePress('*')} buttonStyle={styles.operatorButton} />
        <Button title="1" onPress={() => handlePress('1')} buttonStyle={styles.button} />
        <Button title="2" onPress={() => handlePress('2')} buttonStyle={styles.button} />
        <Button title="3" onPress={() => handlePress('3')} buttonStyle={styles.button} />
        <Button title="-" onPress={() => handlePress('-')} buttonStyle={styles.operatorButton} />
        <Button title="0" onPress={() => handlePress('0')} buttonStyle={styles.button} />
        <Button title="C" onPress={() => handlePress('C')} buttonStyle={styles.clearButton} />
        <Button title="=" onPress={() => handlePress('=')} buttonStyle={styles.operatorButton} />
        <Button title="+" onPress={() => handlePress('+')} buttonStyle={styles.operatorButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  input: {
    fontSize: 40,
    marginBottom: 10,
    textAlign: 'right',
  },
  result: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'right',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '50%',
    height: 50,
    margin: 5,
    backgroundColor: '#007bff',
  },
  operatorButton: {
    width: '50%',
    height: 50,
    margin: 5,
    backgroundColor: '#ff9900',
  },
  clearButton: {
    width: '50%',
    height: 70,
    margin: 5,
    backgroundColor: '#ff0000',
  },
});

export default Calculator;
