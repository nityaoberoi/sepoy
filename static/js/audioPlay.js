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

  var audioPlayer = audiojs.create($('.audio-player').get(0), {
    trackEnded: function() {
      var next = $('.track.playing').next();
      if (!next.length) next = $('.track').first();
      next.find('track-info').click();
    }
  });

  // Load the first track and play
  var audio = audioPlayer.element,
      firstTrack = $('.track').first();

  audioPlayer.setCurrentTrack(firstTrack);
  audioPlayer.load(firstTrack.data('track'));

  // // Load in a track on click
  $('.track-info').click(function(e) {
    e.preventDefault();
    var parentTrack = $(this).parents('.track');
    parentTrack.addClass('playing').siblings().removeClass('playing');
    audioPlayer.setCurrentTrack(parentTrack);
    audioPlayer.load(parentTrack.data('track'));
    audioPlayer.play();
  });

  // // Keyboard shortcuts
  $(document).keydown(function(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
       // right arrow
    if (unicode == 39) {
      var next = $('.track.playing').next();
      if (!next.length) next = $('.track').first();
      next.find('.track-info').click();
      // back arrow
    } else if (unicode == 37) {
      var prev = $('.track.playing').prev();
      if (!prev.length) prev = $('.track').last();
      prev.click();
      // spacebar
    } else if (unicode == 32) {
      audioPlayer.playPause();
    }
  });

});

