import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import PackageBox from '../components/PackageBox';
import {packageData} from './data';
import SubscriptionBox from '../components/SubsriptionBox';

const Packages = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.text}>Packages</Text>
      <View style={styles.packagesContainer}>
        {packageData.map(
          ({icon, borderColor, bgColor, title, description, route}) => (
            <PackageBox
              key={title}
              borderColor={borderColor}
              bgColor={bgColor}
              route={route}
              icon={icon}
              title={title}
              description={description}
            />
          ),
        )}
      </View>
      <View style={styles.subscriptionContainer}>
        <Text style={styles.subscriptionText}>Current subscription</Text>
        <SubscriptionBox
          buttonText="Renew"
          bgColor="#EEFCF8"
          borderColor="#ADEFDF"
        />
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
  subscriptionContainer: {
    paddingTop: 50,
  },
  subscriptionText: {
    fontWeight: '600',
    fontSize: 16,
    paddingBottom: 12,
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
