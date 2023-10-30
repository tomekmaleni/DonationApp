import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  label: {
    color: '#36455A',
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: scaleFontSize(15),
    fontSize: scaleFontSize(12),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomColor: '#A7A7A780',
    borderBottomWidth: 1,
  },
});

export default style;
