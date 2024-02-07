import React from 'react';
import {View, Text} from 'react-native';
import Button from './Button';
import {subscriptionBoxstyles} from './styles';

interface Props {
  bgColor: string;
  borderColor: string;
  buttonText: string;
  price: string;
  description: string;
  packageName?: string;
  current?: boolean;
  name: string;
  btnBgColor: string;
  btnTextColor?: string;
  subTypeBoxBgColor: string;
  subTextColor: string;
}

interface SubscriptionTypeProps {
  current?: boolean;
  name: string;
  subTypeBoxBgColor: string;
  subTextColor: string;
}

const SubscriptionType = ({
  current,
  name,
  subTypeBoxBgColor,
  subTextColor,
}: SubscriptionTypeProps) => {
  return (
    <View style={subscriptionBoxstyles.subTypeContainer}>
      <View
        style={[
          subscriptionBoxstyles.subscriptionTypeBox,
          {backgroundColor: subTypeBoxBgColor},
        ]}>
        <Text
          style={[
            subscriptionBoxstyles.subscriptionText,
            {color: subTextColor},
          ]}>
          {name.toUpperCase()}
        </Text>
      </View>
      {current && (
        <View style={subscriptionBoxstyles.monthlyContainer}>
          <Text style={subscriptionBoxstyles.monthlyText}>Monthly</Text>
        </View>
      )}
    </View>
  );
};

const SubscriptionBox = ({
  bgColor,
  borderColor,
  buttonText,
  price,
  description,
  packageName,
  name,
  current,
  btnBgColor,
  btnTextColor,
  subTypeBoxBgColor,
  subTextColor,
}: Props) => {
  return (
    <View
      style={[
        subscriptionBoxstyles.container,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}>
      <SubscriptionType
        subTypeBoxBgColor={subTypeBoxBgColor}
        subTextColor={subTextColor}
        name={name}
        current={current}
      />
      <View style={subscriptionBoxstyles.priceContainer}>
        <Text style={subscriptionBoxstyles.price}>N {price}</Text>
        {packageName && <Text>/{packageName}</Text>}
      </View>
      <View style={subscriptionBoxstyles.subContainer}>
        <Text style={subscriptionBoxstyles.description}>{description}</Text>
        {current && (
          <View style={subscriptionBoxstyles.daysContainer}>
            <Text style={subscriptionBoxstyles.days}>Days left</Text>
            <Text style={subscriptionBoxstyles.daysCount}>25</Text>
          </View>
        )}
      </View>
      <Button
        textColor={btnTextColor}
        bgColor={btnBgColor}
        text={buttonText}
        handlePress={() => {}}
      />
    </View>
  );
};

export default SubscriptionBox;
