import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(10),
  },
  image: {
    marginTop: verticalScale(12),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
    marginBottom: verticalScale(24),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    color: '#000',
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: scaleFontSize(22),
    fontSize: scaleFontSize(14),
  },
  button: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(20),
  },
});

export default style;
