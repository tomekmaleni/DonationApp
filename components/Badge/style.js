import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    borderRadius: horizontalScale(50),
    height: verticalScale(22),
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(12),
    fontSize: scaleFontSize(10),
  },
});

export default style;
