import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    fontSize: scaleFontSize(50),
    fontFamily: getFontFamily('Inter', '100'),
  },
});

export default style;
