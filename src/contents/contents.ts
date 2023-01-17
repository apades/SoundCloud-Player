import { PlayerState } from '@root/store/playerState';
import * as utils from './utils';

let prefix = '[SoundCloud Player] ',
  reloading = false,
  playerState = new PlayerState();

window.onload = async () => {
  console.log(prefix, 'Hi.');

  // Check if extension is reloaded
  setInterval(async () => {
    try {
      let shit = await browser.runtime.getManifest();
    } catch {
      // if so -> reload content.js but it can only reload in once
      if (reloading == false) {
        location.reload();
        reloading = true;
        console.info(prefix, 'reloading...');
      }
    }
  }, 10000);
};

async function update() {
  playerState['title'] = utils.getTitle();
  playerState['artist'] = utils.getArtist();
  playerState['artwork'] = utils.getArtwork();
  playerState['link'] = utils.getLink();
  playerState['playing'] = utils.isPlaying();
  playerState['favorite'] = utils.isLiked();
  playerState['time']['current'] = utils.getCurrentTime();
  playerState['time']['end'] = utils.getEndTime();
  playerState['volume'] = utils.getVolume();
  playerState['mute'] = utils.isMuted();
  playerState['repeat'] = utils.getRepeatMode();
  playerState['shuffle'] = utils.isShuffling();
}

browser.runtime.onMessage.addListener(async function (request) {
  // Debug:
  // if (request.type != 'request-data') console.log('received:', request);

  let response: Record<string, any> = {};

  $(document).click();

  switch (request.type) {
    case 'request-data': {
      await update();
      response = playerState;
      break;
    }
    case 'smart-request-data': {
      response = {};

      if (utils.getTitle() != playerState['title']) {
        await update();
        response = playerState;
      }
      if (utils.isPlaying() != playerState['playing']) {
        response['playing'] = utils.isPlaying();
      }
      if (utils.isLiked() != playerState['favorite']) {
        response['favorite'] = utils.isLiked();
      }
      if (utils.getVolume() != playerState['volume']) {
        response['volume'] = utils.getVolume();
        response['mute'] = utils.isMuted();
      }
      if (utils.getCurrentTime() != playerState['time']['current']) {
        response['time'] = {
          current: utils.getCurrentTime(),
          end: utils.getEndTime(),
        };
      }
      if (utils.isMuted() != playerState['mute']) {
        response['mute'] = utils.isMuted();
      }
      if (utils.getRepeatMode() != playerState['repeat']) {
        response['repeat'] = utils.getRepeatMode();
      }
      if (utils.isShuffling() != playerState['shuffle']) {
        response['shuffle'] = utils.isShuffling();
      }
      break;
    }
    case 'open': {
      focus();
      break;
    }
    case 'play':
    case 'pause':
    case 'toggle': {
      let elem = $(
        '.playControl.sc-ir.playControls__control.playControls__play'
      )[0];
      elem.click();
      playerState['playing'] = elem.title.includes('Pause');

      response = {
        response: {
          playing: playerState['playing'],
          volume: playerState['volume'],
        },
      };
      break;
    }
    case 'prev': {
      $('.playControls__prev')[0].click();
      await update();
      response = playerState;
      break;
    }
    case 'next': {
      $('.playControls__next')[0].click();
      await update();
      response = playerState;
      break;
    }
    case 'unfav':
    case 'fav': {
      let btn = $('.playbackSoundBadge__like')[0];
      btn.click();
      playerState['favorite'] = btn.title == 'Unlike';

      response = { response: { favorite: playerState['favorite'] } };
      break;
    }
    case 'repeat': {
      let btn = $('.repeatControl')[0];
      btn.click();
      playerState['repeat'] = utils.getRepeatMode(); // none -> one -> all

      response = { response: { repeat: playerState['repeat'] } };
      break;
    }
    case 'shuffle': {
      let btn = $('.shuffleControl')[0];
      btn.click();
      playerState['shuffle'] = utils.isShuffling();

      response = { response: { shuffle: playerState['shuffle'] } };
      break;
    }
    case 'mute':
    case 'unmute': {
      $('.volume button[type="button"]')[0].click();
      playerState['mute'] = $('.volume')[0].className.includes('muted');

      response = { response: { mute: playerState['mute'] } };
      break;
    }
    case 'up':
    case 'down': {
      // volume up/down
      request.type == 'up' ? utils.volumeUp() : utils.volumeDown();
      playerState['volume'] = utils.getVolume();
      playerState['time']['current'] = utils.getCurrentTime();
      playerState['time']['end'] = utils.getEndTime();

      response = {
        response: { time: playerState['time'], volume: playerState['volume'] },
      };
      break;
    }
    case 'seekb':
    case 'seekf': {
      // seek backward/forward
      if (request.type == 'seekb') {
        utils.seekBack();
      } else if (request.type == 'seekf') {
        utils.seekForward();
      }
      playerState['time']['current'] = utils.getCurrentTime();
      playerState['time']['end'] = utils.getEndTime();

      response = { response: { time: playerState['time'] } };
      break;
    }
    case 'ap': {
      // add to playlist
      focus();
      new Promise<void>((resolve) => {
        $(
          '.sc-button-more.sc-button-secondary.sc-button.sc-button-medium.sc-button-responsive'
        )[0].click();
        console.log('1');
        resolve();
      }).then(() => {
        console.log('2');
        $(
          '.sc-button-addtoset.sc-button.moreActions__button.sc-button-medium.sc-button-tertiary'
        )[0].click();
      });
      break;
    }
    default: {
      // console.log('default:', request);
      break;
    }
  }

  return response;
});
