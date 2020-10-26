import React from 'react';
import {
  AppRegistry,
  View,
  asset,
} from 'react-360';
import Entity from 'Entity';

export default class ArtGalleryModel extends React.Component {
  render() {
    return (
      <View>
        <Entity
          source={{
            obj: asset('art alive gallery.obj'),
            mtl: asset('art alive gallery.mtl'),

          }}
          lit={true}
          style={{
            transform: [
              { translate: [80, -67, -150] },
              { scale: 0.11 }
            ]
          }}
        />
      </View>
    );
  }
};