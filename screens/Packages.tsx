import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import PackageBox from '../components/PackageBox';
import {packageData} from './data';

const Packages = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Packages</Text>
      <View style={styles.packagesContainer}>
        {packageData.map(({icon, borderColor, bgColor, title, description}) => (
          <PackageBox
            borderColor={borderColor}
            bgColor={bgColor}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default Packages;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'GeneralSans-Bold',
    fontWeight: '700',
  },
  packagesContainer: {
    paddingTop: 30,
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
  },
  safeArea: {
    padding: 24,
  },
});
