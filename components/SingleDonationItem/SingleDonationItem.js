import React from 'react';
import {Pressable, View, Image} from 'react-native';
import PropTypes from 'prop-types';

import style from './style';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

const SingleDonationItem = props => {
  return (
    <Pressable
      onPress={() => {
        props.onPress(props.donationItemId);
      }}>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          style={style.image}
          source={{uri: props.uri}}
          resizeMode={'cover'}
        />
      </View>
      <View style={style.donationInformation}>
        <Header
          title={props.donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  onPress: PropTypes.func,
  donationItemId: PropTypes.number.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
