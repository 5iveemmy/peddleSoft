import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  handlePress: () => void;
  text: string;
  bgColor: string;
  textColor?: string;
}

const Button = ({handlePress, text, bgColor, textColor = '#b2b7c2'}: Props) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, {backgroundColor: bgColor}]}
      onPress={handlePress}>
      <Text style={[styles.buttonText, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    height: 31,
  },
  buttonText: {
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Button;
