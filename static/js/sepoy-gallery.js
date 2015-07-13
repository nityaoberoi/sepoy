$(document).ready(function() {
    $("#lightGallery").lightGallery();

    var images = ["/static/img/gallery/images/ameylighter.jpg",
        "/static/img/gallery/images/sepoyrivington.jpg",
        "/static/img/gallery/images/gears.jpg",
        "/static/img/gallery/images/anupamkeys.jpg",
        "/static/img/gallery/images/sepoyempirestate.jpg",
        "/static/img/gallery/images/rata.jpg",
        "/static/img/gallery/images/all_fontanas.jpg",
        "/static/img/gallery/images/sepoytrashbar.jpg",
        "/static/img/gallery/images/amey_trashbar.jpg",
        "/static/img/gallery/images/rata_pam_trashbar.jpg",
        "/static/img/gallery/images/all_paperbox.jpg",
        "/static/img/gallery/images/anupam_paperbox.jpg"
    ];

    $.each(images, function(index, img) {
        var listitem = $("<li/>", {
            'class': 'col-xs-12 col-sm-6 col-md-4',
            'data-src': img
        });

        var imageDiv = $("<div/>", {
            class: 'gallery-image'
        });

        var image = $("<img/>", {
            class: "img-responsive center-block",
            src: img
        })

        imageDiv.append(image);
        listitem.append(imageDiv);
        $("#lightGallery").append(listitem);
    })
});
