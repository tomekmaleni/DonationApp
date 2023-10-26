import {StyleSheet} from 'react-native';
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  section: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
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
  categories: {
    marginTop: verticalScale(16),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donations: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});

export default style;
