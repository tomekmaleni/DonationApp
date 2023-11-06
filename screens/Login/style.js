import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginTop: verticalScale(24),
  },
  button: {
    marginTop: verticalScale(37),
    marginBottom: verticalScale(24),
  },
  registrationButton: {
    alignItems: 'center',
  },
  error: {
    color: '#F00',
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(16),
    paddingTop: verticalScale(24),
  },
  success: {
    color: '#28a745',
    fontFamily: getFontFamily('Inter'),
    fontSize: scaleFontSize(16),
    paddingTop: verticalScale(24),
  },
});

export default style;
