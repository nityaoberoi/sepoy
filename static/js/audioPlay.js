$(function() {
  // Setup the player to autoplay the next track
  var as = audiojs.createAll({
    trackEnded: function() {
      var next = $('.track.playing').next();
      if (!next.length) next = $('.track').first();
      next.addClass('playing').siblings().removeClass('playing');
      audio.load($(next).find('.link').attr('data-src'));
      audio.play();
    }
  });

  // Load in the first track
  var audio = as[0];
      first = $('.track .link').attr('data-src');
  $('.track').first().addClass('playing');
  audio.load(first);

  // Load in a track on click
  $('.track').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    $this.addClass('playing').siblings().removeClass('playing');
    audio.load($this.find('.link').attr('data-src'));
    audio.play();
  });

  // Keyboard shortcuts
  $(document).keydown(function(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode;
       // right arrow
    if (unicode == 39) {
      var next = $('.track.playing').next();
      if (!next.length) next = $('.track').first();
      next.click();
      // back arrow
    } else if (unicode == 37) {
      var prev = $('.track.playing').prev();
      if (!prev.length) prev = $('.track').last();
      prev.click();
      // spacebar
    } else if (unicode == 32) {
      audio.playPause();
    }
  })
});

