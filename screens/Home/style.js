import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  paddingHorizontal: {
    paddingHorizontal: horizontalScale(24),
  },
  marginTop: {
    marginTop: verticalScale(20),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerIntroText: {
    color: '#636776',
    fontFamily: getFontFamily('Inter', '400'),
    lineHeight: scaleFontSize(19),
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  donations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default style;
