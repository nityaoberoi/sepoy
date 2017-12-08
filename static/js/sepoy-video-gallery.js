$(document).ready(function() {

	var videos = [
    {
        videoUrl: "https://www.youtube.com/watch?v=D9S-x29fosQ",
        imageUrl: "http://img.youtube.com/vi/D9S-x29fosQ/0.jpg",
        title: "Loved In The USA, Live Studio Recording (Jun 2015)"
    },
    {
        videoUrl: "https://www.youtube.com/watch?v=6v88tNhkzWw",
        imageUrl: "http://img.youtube.com/vi/6v88tNhkzWw/0.jpg",
        title: "Hopeless Romantic, Live Studio Recording (Jun 2015)"
    },
	{
	    videoUrl: "https://www.youtube.com/watch?v=MSJRSQsOafs",
	    imageUrl: "http://img.youtube.com/vi/MSJRSQsOafs/0.jpg",
        title: "Come Home, Live at Arlene's Grocery (Jul 2015)"
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
            'data-src': video.videoUrl,
            'href': video.videoUrl
        };

        /*
        var title = $('<p/>', {
            class:'video-title',
            text: video.title
        });
        title.off("click");
        */

        var listitem = $("<a/>", data);
        var image = $("<img/>", {
            class: "img-responsive center-block",
            src: video.imageUrl
        });
        var playButton = $('<div class="demo-gallery"><img src="/static/img/play-button.png" /></div>')

        listitem.append(image);
        listitem.append(playButton);

        $("#video-gallery").append(listitem);
    });

    $("#video-gallery").click(function() {
        $("p").off("click");
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
