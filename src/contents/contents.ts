import * as utils from './utils'

window.onload = (async () => {
  console.log(prefix, "Hi.");

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
});

async function update() {
  json['title'] = utils.getTitle();
  json['artist'] = utils.getArtist();
  json['artwork'] = utils.getArtwork();
  json['link'] = utils.getLink();
  json['playing'] = utils.isPlaying();
  json['favorite'] = utils.isLiked();
  json['time']['current'] = utils.getCurrentTime();
  json['time']['end'] = utils.getEndTime();
  json['volume'] = utils.getVolume();
  json['mute'] = utils.isMuted();
  json['repeat'] = utils.getRepeatMode();
  json['shuffle'] = utils.isShuffling();
}

browser.runtime.onMessage.addListener(async function (request) {
  // Debug:
  // if (request.type != 'request-data') console.log('received:', request);

  let response: Record<string, any> = {};

  $(document).click();

  switch (request.type) {
    case 'request-data': {
      await update();
      response = json;
      break;
    }
    case 'smart-request-data': {
      response = {};

      if (utils.getTitle() != json['title']) {
        await update();
        response = json;
      }
      if (utils.isPlaying() != json['playing']) {
        response['playing'] = utils.isPlaying();
      }
      if (utils.isLiked() != json['favorite']) {
        response['favorite'] = utils.isLiked();
      }
      if (utils.getVolume() != json['volume']) {
        response['volume'] = utils.getVolume();
        response['mute'] = utils.isMuted();
      }
      if (utils.getCurrentTime() != json['time']['current']) {
        response['time'] = {
          'current': utils.getCurrentTime(),
          'end': utils.getEndTime()
        };
      }
      if (utils.isMuted() != json['mute']) {
        response['mute'] = utils.isMuted();
      }
      if (utils.getRepeatMode() != json['repeat']) {
        response['repeat'] = utils.getRepeatMode();
      }
      if (utils.isShuffling() != json['shuffle']) {
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
      let elem = $('.playControl.sc-ir.playControls__control.playControls__play')[0];
      elem.click();
      json['playing'] = elem.title.includes('Pause');

      response = { 'response': { 'playing': json['playing'], 'volume': json['volume'] } };
      break;
    }
    case 'prev': {
      $('.playControls__prev')[0].click();
      await update();
      response = json;
      break;
    }
    case 'next': {
      $('.playControls__next')[0].click();
      await update();
      response = json;
      break;
    }
    case 'unfav':
    case 'fav': {
      let btn = $('.playbackSoundBadge__like')[0];
      btn.click();
      json['favorite'] = btn.title == "Unlike";

      response = { 'response': { 'favorite': json['favorite'] } };
      break;
    }
    case 'repeat': {
      let btn = $('.repeatControl')[0];
      btn.click();
      json['repeat'] = utils.getRepeatMode(); // none -> one -> all

      response = { 'response': { 'repeat': json['repeat'] } };
      break;
    }
    case 'shuffle': {
      let btn = $('.shuffleControl')[0];
      btn.click();
      json['shuffle'] = utils.isShuffling();

      response = { 'response': { 'shuffle': json['shuffle'] } };
      break;
    }
    case 'mute':
    case 'unmute': {
      $('.volume button[type="button"]')[0].click();
      json['mute'] = $('.volume')[0].className.includes('muted');

      response = { 'response': { 'mute': json['mute'] } };
      break;
    }
    case 'up':
    case 'down': { // volume up/down
      request.type == 'up' ? utils.volumeUp() : utils.volumeDown();
      json['volume'] = utils.getVolume();
      json['time']['current'] = utils.getCurrentTime();
      json['time']['end'] = utils.getEndTime();

      response = { 'response': { 'time': json['time'], 'volume': json['volume'] } };
      break;
    }
    case 'seekb':
    case 'seekf': { // seek backward/forward
      if (request.type == 'seekb') {
        utils.seekBack();
      } else if (request.type == 'seekf') {
        utils.seekForward();
      }
      json['time']['current'] = utils.getCurrentTime();
      json['time']['end'] = utils.getEndTime();

      response = { 'response': { 'time': json['time'] } };
      break;
    }
    case 'ap': { // add to playlist
      focus();
      new Promise<void>((resolve) => {
        $('.sc-button-more.sc-button-secondary.sc-button.sc-button-medium.sc-button-responsive')[0].click();
        console.log('1');
        resolve();
      }).then(() => {
        console.log('2');
        $('.sc-button-addtoset.sc-button.moreActions__button.sc-button-medium.sc-button-tertiary')[0].click();
      });
      break;
    }
    default: {
      // console.log('default:', request);
      break;
    };
  }

  return response;
});

var prefix = '[SoundCloud Player] ',
  reloading = false,
  json: Record<string, any> = {
    'playing': false,
    'artwork': null,
    'link': null,
    'favorite': false,
    'shuffle': false,
    'repeat': 'none',
    'time': {
      'current': null,
      'end': null
    },
    'volume': 0,
    'mute': false
    // , "playlist": []
  };