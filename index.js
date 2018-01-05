// Import a library to help create a component 
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create said component (a thing that produces content)
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render (Display) to the device 
AppRegistry.registerComponent('Album', () => App);
