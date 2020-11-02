import React from 'react';
 import {
   AppRegistry,
   View,
   asset,
   VrButton,
 } from 'react-360';
 import Entity from 'Entity';

 import {NativeModules} from 'react-360';

 const {AudioModule} = NativeModules;

 export default class PictureButtonObject extends React.Component {
   render() {
      return (
        <View>

        <VrButton onClick = {() => {
          postMessage({type: "newPic", pic: this.props.pic});
          AudioModule.playOneShot({
           source: asset('click.mp3'),
          });
        }}>

           <Entity
 style={{
   transform: [
     {translate: [this.props.x, this.props.y, this.props.z]},
     {scale: 1},
     {scaleY: 1.5}
   ],
 }}
 source={{
   obj: asset('PictureButton.obj'),
   mtl: asset('PictureButton.mtl')
 }}
 lit={true}
 />

 </VrButton>

        </View>
      );
    }
  };