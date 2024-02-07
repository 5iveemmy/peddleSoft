import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  handlePress: () => void;
  text: string;
}

const Button = ({handlePress, text}: Props) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer]} onPress={handlePress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 3,
    backgroundColor: '#e2e4e6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 31,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 12,
    color: '#b2b7c2',
    textAlign: 'center',
  },
});

export default Button;
