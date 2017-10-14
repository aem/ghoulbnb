import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import FilterBubble from './FilterBubble';

const imageUrls = {
  ['./1.png']: require('./1.png'),
  ['./2.png']: require('./2.png'),
  ['./3.png']: require('./3.png'),
  ['./4.png']: require('./4.png')
};
export default function PropertyCard(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={imageUrls[props.img]} />
      <View style={styles.text}>
        <Text style={styles.header}>{props.name}</Text>
        <Text style={styles.loc}>{props.loc}</Text>
        <Text style={styles.rating}>{props.rating} out of 13 pumpkins</Text>
        <View style={styles.labels}>
          {props.labels.map((l, i) => <FilterBubble key={i} text={l} />)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%'
  },
  card: {
    margin: 20,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowOffset: { height: 2 },
    paddingBottom: 10
  },
  text: {
    padding: 10
  },
  header: {
    fontFamily: 'Misfits',
    fontSize: 24
  },
  loc: {
    fontFamily: 'AnotherTypewriter'
  },
  rating: {
    fontFamily: 'AnotherTypewriter'
  },
  labels: {
    paddingTop: 20,
    marginLeft: -10,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
