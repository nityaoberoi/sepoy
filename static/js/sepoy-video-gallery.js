$(document).ready(function() {

	var videos = [
	{
		videoUrl: "https://www.youtube.com/watch?v=D9S-x29fosQ",
        imageUrl: "http://img.youtube.com/vi/D9S-x29fosQ/0.jpg"
	}
	];

	$.each(videos, function(index, img) {
        var data = {
            'class': 'col-xs-12 col-sm-12 col-md-12',
            'data-src': img.videoUrl,
            'href': img.videoUrl
        };

        var listitem = $("<a/>", data);
        var image = $("<img/>", {
            class: "img-responsive center-block",
            src: img.imageUrl
        });
        var playButton = $('<div class="demo-gallery"><img src="/static/img/play-button.png" /></div>')
        listitem.append(image);
        listitem.append(playButton);
        $("#video-gallery").append(listitem);
    });

    $("#video-gallery").lightGallery({
        youtubePlayerParams: {
            modestbranding: 1,
            showinfo: 0,
            rel: 0,
            controls: 0
        }
    });
});