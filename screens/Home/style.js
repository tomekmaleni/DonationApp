import {StyleSheet} from 'react-native';
import {verticalScale, horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  paddingHorizontal: {paddingHorizontal: horizontalScale(24)},
  marginTop: {
    marginTop: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default style;
