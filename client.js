// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location,Surface,Math as reactMath} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here  
    fullScreen: true,
    ...options,
  });

  const currentLocation= new Location([-10,55,10]);

  r360.runtime.executor._worker.addEventListener(
    'message',
    (e) => onMessage(e, r360, currentLocation)
  );

  r360.renderToLocation(
    r360.createRoot('ArtGallery'),
    currentLocation

  );

  //background video
  const player = r360.compositor.createVideoPlayer('myplayer');
  // Set the video to be played, and its format
  player.setSource('./static_assets/clouds.mp4', '2D', 'mp4','RECT');
    player.play();

  player.setLoop(true);

  // Load the initial environment
  r360.compositor.setBackgroundVideo('myplayer');

}

function onMessage(e, r360, currentLocation) {
  if(e.data.type === 'newPosition') {
    currentLocation.setWorldPosition(e.data.x, e.data.y, e.data.z);
  }


}

window.React360 = {init};
