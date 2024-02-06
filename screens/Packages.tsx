import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const Packages = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Packages</Text>
    </SafeAreaView>
  );
};

export default Packages;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
  },
});
