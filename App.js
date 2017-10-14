/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import FilterBubble from './FilterBubble';
import properties from './properties';
import PropertyCard from './PropertyCard';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>GHOULBNB</Text>
        </View>
        <View style={styles.filters}>
          <Text style={styles.filtersText}>Filter by:</Text>
          {['Spook Level', 'Number of Ghouls'].map((f, i) => (
            <FilterBubble key={i} text={f} />
          ))}
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.properties}>
            {properties.map((p, i) => <PropertyCard key={i} {...p} />)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  header: {
    backgroundColor: '#f5a623',
    width: '100%',
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  headerText: {
    fontSize: 26,
    fontFamily: 'Misfits'
  },
  filters: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  filtersText: {
    fontSize: 20,
    fontFamily: 'Misfits'
  },
  scrollview: {
    paddingBottom: 500
  }
});
