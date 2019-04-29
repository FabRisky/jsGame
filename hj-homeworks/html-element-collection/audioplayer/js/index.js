'use strict';

const playList = [
{
	path: 'mp3/LA_Chill_Tour.mp3',
	title: 'LA Chill Tour'
},
{
	path: 'mp3/LA_Fusion_Jam.mp3',
	title: 'LA Fusion Jam'
},
{
	path: 'mp3/This_is_it_band.mp3',
	title: 'This is it band'
}
];

const visualPlay = document.getElementsByClassName('mediaplayer')[0],
audio = document.getElementsByTagName('audio')[0],
playPause = document.getElementsByClassName('playstate')[0],
nextTrack = document.getElementsByClassName('next')[0],
prevTrack = document.getElementsByClassName('back')[0],
stopPlayer = document.getElementsByClassName('fa-stop')[0],
title = document.getElementsByClassName('title')[0];

playPause.onclick = function() {
	if (!visualPlay.classList.contains('play')) {
		visualPlay.classList.toggle('play');
		audio.play();
	}else {
		visualPlay.classList.contains('play')
		visualPlay.classList.toggle('play');
		audio.pause();
	}
}

stopPlayer.onclick = function() {
	visualPlay.classList.remove('play');
	audio.pause();
	audio.currentTime = 0;
};

const playListLength = playList.length - 1;
let i = 0;

nextTrack.onclick = function() {
	playPause.click();
	i === playListLength ? i = 0 : i++;
	audio.src = playList[i].path;
	title.title = playList[i].title;
	playPause.click();
}

prevTrack.onclick = function() {
	playPause.click();
	i === 0 ? i = playListLength : i--;
	audio.src = playList[i].path;
	title.title = playList[i].title;
	playPause.click();
}