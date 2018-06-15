// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface, SurfaceShape} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const surface = new Surface(1024, 100, 'Flat');
  surface.setAngle(
    0, /* horiz angle */
      -Math.PI / 8,
  );
  surface.setDensity(4096);

    // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('background_demo', { /* initial props */ }),
    surface,
  );
}

window.React360 = {init};
