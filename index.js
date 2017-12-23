// Import a library to help create a component 
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header';

// Create said component (a thing that produces content)
const App = () => {
    return (
        <Header />>
    );
};

// Render (Displey) to the device 
AppRegistry.registerComponent('Album', () => App);
