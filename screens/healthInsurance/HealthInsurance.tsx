import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import SubscriptionBox from '../../components/SubsriptionBox';
import {useQuery} from '@apollo/client';
import {INSURANCE_PLANS} from '../../graphql/queries';
import {ResponseData} from '../../graphql/type';
import {styles} from './styles';

const xml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.97501 4.94168L2.91667 10L7.97501 15.0583" stroke="#525C76" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.0833 10H3.05833" stroke="#525C76" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const HealthInsurance = () => {
  const [selectedTab, setSelectedTab] = useState('Monthly');
  const navigation = useNavigation();
  const {loading, error, data} = useQuery<ResponseData>(INSURANCE_PLANS);

  const handleTabPress = (tab: string) => {
    setSelectedTab(tab);
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error Loading data</Text>;
  }

  console.log(data?.insurancePlans[0], 'data');
  const monthlyPlans = data?.insurancePlans?.filter(
    plan => plan.package === 'monthly',
  );
  const yearlyPlans = data?.insurancePlans?.filter(
    plan => plan.package === 'yearly',
  );

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
          <>
            {monthlyPlans?.map(
              ({name, package: packageName, price, updatedAt, description}) => (
                <SubscriptionBox
                  btnBgColor="#08AC85"
                  name={name}
                  packageName={packageName}
                  key={updatedAt}
                  price={price}
                  description={description}
                  buttonText="Subscribe"
                  subTypeBoxBgColor={`${
                    name === 'Standard' ? '#0F1D40' : '#E2E4E8'
                  }`}
                  subTextColor={`${name === 'Standard' ? '#fff' : '#2C3857'}`}
                  bgColor={`${name === 'Standard' ? '#EEFCF8' : '#f5f6f7'}`}
                  borderColor={`${name === 'Standard' ? '#ADEFDF' : '#eeeff2'}`}
                  btnTextColor="#FFFFFF"
                />
              ),
            )}
          </>
        )}
        {selectedTab === 'Annually' && (
          <>
            {yearlyPlans?.map(
              ({name, package: packageName, price, updatedAt, description}) => (
                <SubscriptionBox
                  btnBgColor="#08AC85"
                  name={name}
                  packageName={packageName}
                  key={updatedAt}
                  price={price}
                  description={description}
                  subTypeBoxBgColor={`${
                    name === 'Standard' ? '#0F1D40' : '#E2E4E8'
                  }`}
                  subTextColor={`${name === 'Standard' ? '#fff' : '#2C3857'}`}
                  buttonText="Subscribe"
                  bgColor={`${name === 'Standard' ? '#EEFCF8' : '#f5f6f7'}`}
                  borderColor={`${name === 'Standard' ? '#ADEFDF' : '#eeeff2'}`}
                  btnTextColor="#FFFFFF"
                />
              ),
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HealthInsurance;
