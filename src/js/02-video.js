import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCAL_STORAGE_KEY = "videoplayer-current-time";
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_KEY) || 0).then(function (seconds) {    
}).catch(function (error) { console.log(error.message) });

const onTimeUpdate = function (data) {
    localStorage.setItem(LOCAL_STORAGE_KEY, data.seconds);   
};
player.on('timeupdate', throttle(onTimeUpdate,1000));



