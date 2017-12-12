$(document).ready(function() {

	var videos = [
    {
        videoUrl: "https://www.youtube.com/watch?v=D9S-x29fosQ",
        imageUrl: "http://img.youtube.com/vi/D9S-x29fosQ/0.jpg",
        title: "Loved In The USA"
    },
    {
        videoUrl: "https://www.youtube.com/watch?v=6v88tNhkzWw",
        imageUrl: "http://img.youtube.com/vi/6v88tNhkzWw/0.jpg",
        title: "Hopeless Romantic"
    },
	{
	    videoUrl: "https://www.youtube.com/watch?v=MSJRSQsOafs",
	    imageUrl: "http://img.youtube.com/vi/MSJRSQsOafs/0.jpg",
        title: "Come Home"
	},
    /* private video
    {
        videoUrl: "https://www.youtube.com/watch?v=HgZcqLSlcPE",
        imageUrl: "http://img.youtube.com/vi/HgZcqLSlcPE/0.jpg",
        title: "Lingering On, Live at Mercury Lounge (March 2016)"
    }*/
	];

	$.each(videos, function(index, video) {
        var data = {
            'class': 'col-xs-12 col-sm-12 col-md-12 video-row',
            'data-src': video.videoUrl
        };

        var listitem = $("<li/>", data);

        var title = $('<h3/>', {
            class: 'video-title',
            text: video.title
        });
        var containerDiv = $('<div />', {
            class: 'demo-gallery'
        });
        var image = $("<img/>", {
            class: "img-responsive center-block",
            src: video.imageUrl
        });
        var playButton = $('<img />', {
            class: 'play-button',
            src: "/static/img/play-button.png"
        })

        listitem.append(title);
        listitem.append(containerDiv);

        containerDiv.append(image);
        containerDiv.append(playButton);

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
