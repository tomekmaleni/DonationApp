import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(50),
    width: horizontalScale(327),
    height: verticalScale(55),
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: getFontFamily('Inter', '500'),
    lineHeight: scaleFontSize(19),
    fontSize: scaleFontSize(16),
  },
});

export default style;
