import {StyleSheet} from 'react-native';
import {horizontalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#fafafa',
    borderRadius: horizontalScale(26),
    width: horizontalScale(44),
    height: horizontalScale(44),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default style;
