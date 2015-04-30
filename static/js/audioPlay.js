$(document).ready(function() {
  // Setup the player to autoplay the next track
  function loadTrackHTML() {
    var tracksWrapper = $('.tracks');
    tracksWrapper.children('.track').each(function(index, trackElement) {
      var $trackElement = $(trackElement),
          $progressBarWrapper = $('<div>', {class: 'track-progress-bar'}),
          $bgBar = $('<div>', {class: 'bg bar'}),
          $loadBar = $('<div>', {class: 'load-bar bar'})
          $playBar = $('<div>', {class: 'play-bar bar'}),
          $divWrapper = $('<div>', {class: 'track-info clearfix'}),
          trackTitle = $('<div>', {class: 'track-title'}),
          trackDuration = $('<div>', {class: 'track-duration is-loading'});

      var song = new Audio($trackElement.data('track'));
      song.onloadeddata = function() {
        var trackDuration = $trackElement.find('.track-duration');
        trackDuration.removeClass('is-loading');
        trackDuration.html(readableDuration(this.duration));
      }

      $progressBarWrapper.append($bgBar);
      $progressBarWrapper.append($loadBar);
      $progressBarWrapper.append($playBar);

      trackTitle.html($trackElement.data('title'));
      $divWrapper.append(trackTitle);
      $divWrapper.append(trackDuration);

      $trackElement.append($progressBarWrapper);
      $trackElement.append($divWrapper);
    });
  }

  loadTrackHTML();

  function readableDuration(seconds) {
    min = Math.floor(seconds / 60);
    sec = Math.floor(seconds % 60);
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
  }

  function playNextTrack() {
    var next = $('.track.currently-playing').next();
    if (!next.length) next = $('.track').first();
    next.find('.track-info').click();
  }

  function playPreviousTrack() {
    var prev = $('.track.currently-playing').prev();
    if (!prev.length) prev = $('.track').last();
    prev.find('.track-info').click();
  }

  var audioPlayer = audiojs.create($('.audio-player').get(0), {
    trackEnded: function() {
      var next = $('.track.currently-playing').next();
      if (!next.length) next = $('.track').first();
      next.find('.track-info').click();
    }
  });

  // Load the first track and play
  var audio = audioPlayer.element,
      firstTrack = $('.track').first();
  audioPlayer.load(firstTrack);

  // // Load in a track on click
  $('.track-info').click(function(e) {
    e.preventDefault();
    var parentTrack = $(this).parents('.track');
    parentTrack.addClass('currently-playing').siblings().removeClass('currently-playing');
    audioPlayer.load(parentTrack);
    audioPlayer.play();
  });

  $(document).on('click', '.button-next', playNextTrack);
  $(document).on('click', '.button-previous', playPreviousTrack);

  // // Keyboard shortcuts
  $(document).keydown(function(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
       // right arrow
    if (unicode == 39) {
      playNextTrack();
      // back arrow
    } else if (unicode == 37) {
      playPreviousTrack();
      // spacebar
    } else if (unicode == 32) {
      audioPlayer.playPause();
    }
  });

});

