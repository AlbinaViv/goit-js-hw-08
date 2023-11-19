import throttle from "lodash.throttle";

<iframe
    id="vimeo-player"
    src="https://player.vimeo.com/video/236203659"
    width="640"
    height="360"
    frameborder="0"
    allowfullscreen
    allow="autoplay; encrypted-media"
></iframe>

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('play', function () {
    console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
    console.log('title:', title);
});


const idPlayer = new Vimeo.Player('player1');