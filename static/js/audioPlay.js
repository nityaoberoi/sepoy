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
        var trackDuration = $trackElement.find('.track-duration'),
            duration = readableDuration(this.duration);
        $trackElement.attr('data-duration', duration)
        trackDuration.removeClass('is-loading');
        trackDuration.html(duration);
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
    ga('send', 'event', 'next', next.find('.track-title').text());
  }

  function playPreviousTrack() {
    var prev = $('.track.currently-playing').prev();
    if (!prev.length) prev = $('.track').last();
    prev.find('.track-info').click();
    ga('send', 'event', 'prev', prev.find('.track-title').text());
  }

  function trackPlayPause() {
      var track = $('.track.currently-playing');
      var playOrPause = audioPlayer.playing ? 'pausing': 'playing';
      ga('send', 'event', playOrPause, $(this).find('.track-title').text());
  }

  var audioPlayer = audiojs.create($('.audio-player').get(0), {
    trackEnded: function() {
      ga('send', 'event', 'trackEnded', $(this).find('.track-title').text());
      playNextTrack();
    },
    resetTracks: function() {
      var prevTrack = $('.previous-playing');
      prevTrack.find('.load-bar').css({ width: '0%'});
      prevTrack.find('.play-bar').css({ width: '0%'});
      prevTrack.find('.track-duration').html(prevTrack.data('duration'));
      prevTrack.removeClass('previous-playing');
    }
  });

  // Load the first track and play
  var audio = audioPlayer.element,
      firstTrack = $('.track').first();
  audioPlayer.load(firstTrack);

  // // Load in a track on click
  $(document).on('click', '.track-info', function(e) {
    e.preventDefault();
    var parentTrack = $(this).parents('.track');
    parentTrack.siblings('.currently-playing')
               .removeClass('currently-playing')
               .addClass('previous-playing');
    audioPlayer.load(parentTrack);
    audioPlayer.play();
    ga('send', 'event', 'play', $(this).find('.track-title').text());
  });

  $(document).on('click', '.button-play-pause', trackPlayPause);
  $(document).on('click', '.button-next', playNextTrack);
  $(document).on('click', '.button-previous', playPreviousTrack);
  // // Keyboard shortcuts
  $(document).keydown(function(e) {
    var track = $('.track.currently-playing');
    var unicode = e.charCode ? e.charCode : e.keyCode;
       // right arrow
    if (unicode == 39) {
      ga('send', 'event', 'key-next', $(this).find('.track-title').text());
      playNextTrack();
      // back arrow
    } else if (unicode == 37) {
      ga('send', 'event', 'key-prev', $(this).find('.track-title').text());
      playPreviousTrack();
      // spacebar
    } else if (unicode == 32) {
        var keyPlayOrPause = audioPlayer.playing ? 'key-pausing': 'key-playing';
        ga('send', 'event', keyPlayOrPause, $(this).find('.track-title').text());
        trackPlayPause();
        audioPlayer.playPause();
    }
  });
});

