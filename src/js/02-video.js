import Vimeo from '@vimeo/player';
console.log(Vimeo);
const iframe = document.querySelector('#vimeo-player');
console.log(iframe);
let currentTime;
const player = new Vimeo(iframe);
    const onTimeUpdate = function(data) {
    // data is an object containing properties specific to that event
};

player.on('timeupdate', onTimeUpdate);

    

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });
