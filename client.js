// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Location, Surface,Math as ReactMath ,} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here  
    fullScreen: true,
    ...options,
  });

  //flat surface 
  const myFlatSurface = new Surface(
    380, /* width */
    500, /* height */
    Surface.SurfaceShape.Flat   /* shape */
  );
  
  myFlatSurface.setAngle(
    0, /* yaw angle */
    Math.PI/12, /* pitch angle */
    0 /* roll angle */
  );
  
  
  r360.renderToSurface(
    r360.createRoot('UIScreen', {}),
    myFlatSurface
  );

  const currentLocation = new Location([-10, 55, 10]);

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e, r360, currentLocation,myFlatSurface)
  );

  r360.renderToLocation(
    r360.createRoot('ArtGallery'),
    currentLocation
  );

  //background video
  const player = r360.compositor.createVideoPlayer('myplayer');
  // Set the video to be played, and its format
  player.setSource('./static_assets/clouds.mp4', '2D', 'mp4', 'RECT');
  player.play();

  player.setLoop(true);

  // Load the initial environment
  r360.compositor.setBackgroundVideo('myplayer');

}

function onMessage(e, r360, currentLocation,myFlatSurface) {
  if (e.data.type === 'newPosition') {
    currentLocation.setWorldPosition(e.data.x, e.data.y, e.data.z);
  }
  if(e.data.type === 'newPic'){

    const cameraDirection = [0, 0, -1];
    const cameraQuat = r360.getCameraQuaternion();

    ReactMath.rotateByQuaternion(cameraDirection, cameraQuat);
  
  
         const x = cameraDirection[0];
         const y = cameraDirection[1];
         const z = cameraDirection[2];

         const yawAngle = Math.atan2(x, -z);
         const pitchAngle = Math.asin(y / Math.sqrt(x*x + y*y + z*z));

         myFlatSurface.setAngle(yawAngle, pitchAngle);

    r360.runtime.context.callFunction('RCTDeviceEventEmitter', 'emit', ['clickedImage', {thePicture: e.data.pic}]);
  }

}

window.React360 = { init }; 
