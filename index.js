// Import a library to help create a component 
import React from 'react';
import {Text, AppRegistry} from 'react-native';

// Create said component (a thing that produces content)
const App = () => {
    return (
        <Text>Random Text</Text>
    );
};

// Render (Displey) to the device 
AppRegistry.registerComponent('Album', () => App);
