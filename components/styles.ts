import {StyleSheet} from 'react-native';

export const subscriptionBoxstyles = StyleSheet.create({
  priceContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 3,
    flexDirection: 'row',
    paddingVertical: 2,
    paddingHorizontal: 12,
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
