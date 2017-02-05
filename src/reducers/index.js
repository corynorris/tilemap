import { combineReducers } from 'redux'
import { map } from './map.js';
import { texture } from './texture.js';
import { settings } from './settings.js';
import { textureMap } from './textureMap.js';
import { application } from './application.js';

const roguelikeApp = combineReducers({
  application,
  map,
  settings,
  textureMap,
  texture,
});

export default roguelikeApp;