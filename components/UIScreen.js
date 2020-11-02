import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  asset,
  VrButton,
  Image
} from 'react-360';

const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

export default class UIscreen extends React.Component {

  constructor() {
    super();
    this.state = {
      ImageView : true,
    };

    RCTDeviceEventEmitter.addListener('clickedImage', (e) => {this.changeImage(e);});
  }

  hideImage()
  {
    this.setState({
      ImageView: false
    });
  }

  changeImage(e)
  {
    this.setState({
      ImageView: true,
      pictName: e.thePicture
    });
  }

  render() {
    return (

      <View style={{backgroundColor: '#000000'}}>
        
        {this.state.ImageView && <View>
          <VrButton onClick={() => {
            this.hideImage();
          }}>
          <Text>X</Text>
          </VrButton>
          <Image source={asset('this.state.pictName')}
            style={{
              width: 512,
              height: 340
            }}
          />

          
        </View>
      }

      </View>

    );
  }
};
