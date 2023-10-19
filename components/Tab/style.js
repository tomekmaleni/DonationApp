import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    borderRadius: horizontalScale(100),
    height: verticalScale(50),
    justifyContent: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: getFontFamily('Inter', '500'),
    lineHeight: scaleFontSize(17),
    fontSize: scaleFontSize(14),
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
