import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime != null) {
    player.setCurrentTime(parseFloat(currentTime));
};

const deleyedUpdate = throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', function (data) {
    deleyedUpdate(data);
});