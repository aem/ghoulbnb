import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function FilterBubble(props) {
  return (
    <View style={styles.filterWrapper}>
      <Text style={styles.filterText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  filterWrapper: {
    backgroundColor: '#782abc',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 50
  },
  filterText: {
    color: 'white',
    fontFamily: 'AnotherTypewriter'
  }
});
