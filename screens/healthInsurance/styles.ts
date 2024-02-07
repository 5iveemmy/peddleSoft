import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#e8eaf1',
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
