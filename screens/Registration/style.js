import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  backButton: {
    marginTop: verticalScale(7),
    marginLeft: horizontalScale(14),
  },
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
});

export default style;
