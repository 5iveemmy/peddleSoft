import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SvgXml} from 'react-native-svg';

const arrow = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.4">
<path d="M8.91003 20.42L15.43 13.9C16.2 13.13 16.2 11.87 15.43 11.1L8.91003 4.58" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>
`;

interface Props {
  title: string;
  description: string;
  icon: string;
  bgColor: string;
  borderColor: string;
}

const PackageBox = ({
  title,
  description,
  icon,
  borderColor,
  bgColor,
}: Props) => {
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}>
      <View style={styles.subContainer}>
        <SvgXml xml={icon} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>{title}</Text>
          <Text style={styles.subText}>{description}</Text>
        </View>
      </View>
      <SvgXml xml={arrow} />
    </View>
  );
};

export default PackageBox;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderStyle: 'solid',
    width: '100%',
    height: 105,
    justifyContent: 'space-between',
    borderRadius: 12,
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textContainer: {
    width: 200,
  },
  header: {
    fontWeight: '600',
    fontSize: 16,
  },
  subText: {
    paddingTop: 3,
  },
});
