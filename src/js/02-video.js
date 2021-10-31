import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_TIME_ON_EXIT = 'videoplayer-current-time';

const iframe = document.querySelector('iframe')
const player = new Player(iframe);


const onVideoPlay = () => {
    if(localStorage.getItem(PLAYER_TIME_ON_EXIT)) {
        player.setCurrentTime(localStorage.getItem(PLAYER_TIME_ON_EXIT));
    }
}

const getCurrentTime = (data) => {
    console.log(data.seconds)
    localStorage.setItem(PLAYER_TIME_ON_EXIT, data.seconds)
}
player.on('play', onVideoPlay)

player.on('timeupdate', throttle(getCurrentTime, 1000))
