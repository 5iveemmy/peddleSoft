import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Button from './Button';

interface Props {
  bgColor: string;
  borderColor: string;
  buttonText: string;
  price: string;
  description: string;
}

const SubscriptionType = () => {
  return (
    <View style={styles.subTypeContainer}>
      <View style={styles.subscriptionTypeBox}>
        <Text style={styles.subscriptionText}>STANDARD</Text>
      </View>
      <View style={styles.monthlyContainer}>
        <Text style={styles.monthlyText}>Monthly</Text>
      </View>
    </View>
  );
};

const SubscriptionBox = ({
  bgColor,
  borderColor,
  buttonText,
  price,
  description,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}>
      <SubscriptionType />
      <Text style={styles.price}>N {price}</Text>
      <View style={styles.subContainer}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.daysContainer}>
          <Text style={styles.days}>Days left</Text>
          <Text style={styles.daysCount}>25</Text>
        </View>
      </View>
      <Button text={buttonText} handlePress={() => {}} />
    </View>
  );
};

export default SubscriptionBox;

const styles = StyleSheet.create({
  subTypeContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  monthlyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderColor: '#8c93a3',
    borderStyle: 'solid',
    height: 20,
    width: 72,
    borderRadius: 3,
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  monthlyText: {
    color: '#525c76',
    fontWeight: '600',
    fontSize: 10,
  },
  subscriptionTypeBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F1D40',
    borderRadius: 3,
    width: 99,
    paddingVertical: 2,
    paddingHorizontal: 8,
    height: 23,
  },
  subscriptionText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 12,
  },
  price: {
    fontWeight: '700',
    fontSize: 24,
  },
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: 'auto',
    borderRadius: 12,
    padding: 10,
    flexDirection: 'column',
  },
  description: {
    fontSize: 12,
    fontWeight: '500',
    width: 230,
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginBottom: 6,
  },
  days: {
    fontSize: 10,
    fontWeight: '500',
    color: '#8C93A3',
  },
  daysCount: {
    fontSize: 10,
    fontWeight: '700',
  },
  daysContainer: {
    display: 'flex',
    gap: 4,
    flexDirection: 'row',
  },
});
