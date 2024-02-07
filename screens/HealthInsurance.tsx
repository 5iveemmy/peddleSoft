import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SubscriptionBox from '../components/SubsriptionBox';

const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.97501 4.94168L2.91667 10L7.97501 15.0583" stroke="#525C76" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0833 10H3.05833" stroke="#525C76" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const HealthInsurance = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Monthly');

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <SvgXml xml={xml} />
        </TouchableOpacity>

        <Text style={styles.headerText}>Health insurance</Text>
      </View>
      <Text style={styles.subText}>
        Subscribe to your preferred insurance packages
      </Text>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Monthly' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Monthly')}>
          <Text>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tabButton,
            selectedTab === 'Annually' && styles.selectedTab,
          ]}
          onPress={() => handleTabPress('Annually')}>
          <Text>Annually</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabView}>
        {selectedTab === 'Monthly' && (
          <SubscriptionBox
            price="2000"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Renew"
            bgColor="#EEFCF8"
            borderColor="#ADEFDF"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default HealthInsurance;

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#eeeff2',
    height: 42,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 8,
  },
  tabView: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    paddingTop: 20,
  },
  selectedTab: {
    backgroundColor: '#CACDD5',
  },
  tabButton: {
    width: 155,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 60,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  subText: {
    paddingTop: 20,
    paddingHorizontal: 5,
    paddingBottom: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  backContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E2E4E6',
    width: 44,
    height: 44,
    borderRadius: 3,
  },
  safeArea: {
    padding: 24,
  },
});
