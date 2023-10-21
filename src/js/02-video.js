import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_TIME = 'videoplayer-current-time';
const iframeElem = document.querySelector('#vimeo-player');
const player = new Player(iframeElem);


const onPlay = throttle(function (data) {
  localStorage.setItem(KEY_TIME, JSON.stringify(data.seconds));
}, 1000);
player.on('timeupdate', onPlay, { passive: false });

const storageCurrentTime = JSON.parse(localStorage.getItem(KEY_TIME)) ?? 0;

player
  .setCurrentTime(storageCurrentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });


//   Що робить this код?

// { passive: false }

// switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
