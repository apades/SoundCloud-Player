function focus() {
  $('.playbackSoundBadge__titleLink.sc-truncate')[0].click();
}

function isPlaying() {
  let cls = '.playControl';
  return $(cls).length != 0 ? $(cls)[0].title == 'Pause current' : false;
}

function getTitle() {
  return $('a.playbackSoundBadge__titleLink')[0].title;
}

function getArtist() {
  return $('a.playbackSoundBadge__lightLink')[0].title;
}

function getArtwork() {
  let a = $('.playbackSoundBadge span.sc-artwork').css('background-image');
  if (a != null && a.includes('120x120')) {
    a = a.replace('120x120', '500x500')
  }
  if (a != null && a.includes('50x50.')) {
    a = a.replace('50x50.', '500x500.');
  }
  return a;
}

function getLink() {
  let cls = '.playbackSoundBadge__titleLink.sc-truncate';

  if ($(cls).length == 0) return null;

  let url = new URL($(cls)[0].href), params = url.searchParams, in_system_playlist = params.get('in_system_playlist') != null;

  if (in_system_playlist) {
    params.delete('in_system_playlist');
  }

  url.searchParams = params;

  return url.href;
}

function isLiked() {
  let cls = '.playControls__soundBadge .sc-button-like';
  return $(cls).length != 0 ? $(cls)[0].title == 'Unlike' : false;
}

function getCurrentTime() {
  return $('.playbackTimeline__timePassed span[aria-hidden]').text();
}

function getEndTime() {
  return $('.playbackTimeline__duration span[aria-hidden]').text();
}

function getVolume() {
  return Number($('.volume__sliderWrapper')[0].getAttribute('aria-valuenow'))*100;
}

function isMuted() {
  let cls = '.volume';
  return $(cls).length != 0 ? $(cls)[0].className.includes('muted') : false;
}

function getRepeatMode() {
  return $('.repeatControl')[0].className.replace('repeatControl sc-ir m-', '').toLowerCase();
}

function isShuffling() {
  return $('.shuffleControl')[0].className.includes('m-shuffling');
}

function volumeDown() {
  input(40, 'ArrowDown', true);
}

function volumeUp() {
  input(38, 'ArrowUp', true);
}

function seekBack() {
  input(37, 'ArrowLeft');
}

function seekForward() {
  input(39, 'ArrowRight');
}

function input(keyCode, name, shiftKey) {
  document.dispatchEvent(
    new KeyboardEvent('keydown', {
      key: name,
      keyCode: keyCode, 
      code: name,
      which: keyCode,
      shiftKey: !shiftKey ? false : shiftKey,
    })
  );
}