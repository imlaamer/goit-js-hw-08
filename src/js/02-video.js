import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_TIME = 'videoplayer-current-time';
const iframeElem = document.querySelector('#vimeo-player');

const player = new Player(iframeElem);

const onPlayThrottled = throttle(function (data) {
  localStorage.setItem(KEY_TIME, JSON.stringify(data.seconds));
}, 1000);
player.on('timeupdate', onPlayThrottled);

const storageCurrentTime = JSON.parse(localStorage.getItem(KEY_TIME)) ?? 0;
player.setCurrentTime(storageCurrentTime);
