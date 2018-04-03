import React from 'react';
import { View,Text } from 'react-native';

const CardSection = (props) => {
  return(
    <View style={styles.cardSectionStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  cardSectionStyle: {
    borderBottomWidth: 1,
    padding: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#DDD',
    position: 'relative'
  }
};

export default CardSection;
