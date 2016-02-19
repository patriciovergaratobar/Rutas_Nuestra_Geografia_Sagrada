
var soundOn = true;
var sound = new Howl(
	{
		urls: ['sound/sound.mp3'],
	}
);

function sondOn(){
  if (soundOn) {
    soundOn = false;
    sound.stop();

    $("#btSoundId").get(0).innerHTML = '<img src="img/sound-off.png" width="25px" /> Sonido desactivado';
  }else{
    soundOn = true;
    sound.play();
    $("#btSoundId").get(0).innerHTML = '<img src="img/sound-on.png" width="25px" /> Sonido activado';
  }
}
