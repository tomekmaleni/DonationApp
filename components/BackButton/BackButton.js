import React from 'react';
import {Pressable, View} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const BackButton = props => {
  return (
    <Pressable style={style.button} onPress={() => props.onPress()}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        size={horizontalScale(17)}
        color={'#022150'}
      />
    </Pressable>
  );
};

BackButton.defaultProps = {
  onPress: () => {},
};

BackButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BackButton;
