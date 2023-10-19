import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(29),
    fontSize: scaleFontSize(24),
  },
  title2: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(22),
    fontSize: scaleFontSize(18),
  },
  title3: {
    color: '#0A043C',
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(19),
    fontSize: scaleFontSize(16),
  },
});

export default style;
