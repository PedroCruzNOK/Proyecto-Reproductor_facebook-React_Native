/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  ListView,
} from 'react-native';

import ArtistList from './ArtistList'
import { getArtist} from './api-client'

export default class ejemplo_curso extends Component {

  componentDidMount(){
    getArtist().then((data) => console.warn('en aoo', data))
  }

  render() {
    const artist ={
      image:'http://disfrutemosba.buenosaires.gob.ar/imagenes/imagegallery/123a-dreadmari.jpg',
      name:'Dread mar i',
      likes: 200,
      comments:140,
    }
    const artists = Array(50).fill(artist);

    return (
      <View style={styles.container}>
        <ArtistList artists={artists}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },

});

AppRegistry.registerComponent('ejemplo_curso', () => ejemplo_curso);
