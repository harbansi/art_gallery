import React from 'react';
import {
  AppRegistry,
  View,
  PointLight,
  asset,
  AmbientLight,
} from 'react-360';
import Entity from 'Entity';

export default class Lights extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.6}
          style={{
            color: 'white',
            transform: [
              { translate: [0, 0, 0] }
            ],
          }}
        />
        <PointLight intensity={0.4}

          style={{
            color: 'white',
            transform: [
              { translate: [0, 0, 0] }
            ],

          }}
        />
      </View>
    );
  }
};