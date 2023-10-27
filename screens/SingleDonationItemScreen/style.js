import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  section: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
  },
  goBack: {
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginTop: verticalScale(24),
  },
  textContainer: {
    marginTop: verticalScale(16),
  },
  text: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: scaleFontSize(22),
    fontSize: scaleFontSize(14),
  },
});

export default style;
