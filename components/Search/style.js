import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F5F9',
    paddingHorizontal: horizontalScale(16),
    borderRadius: horizontalScale(15),
    height: verticalScale(50),
  },
  searchInput: {
    color: '#686C7A',
    flex: 1,
    marginLeft: horizontalScale(6),
    height: '100%',
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: scaleFontSize(14),
    fontSize: scaleFontSize(14),
  },
});

export default style;
