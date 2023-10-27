import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: verticalScale(13),
    left: horizontalScale(10),
    zIndex: 1,
  },
  image: {
    width: horizontalScale(140),
    height: verticalScale(155),
    borderRadius: horizontalScale(20),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
