$(document).ready(function() {
    var images = [
        "/static/img/gallery/images/anupamkeysmercurylounge.jpg",
        "/static/img/gallery/images/sepoy_digital_small_Car_sitting.jpg",
        "/static/img/gallery/images/sepoy_digital_small_Goth.jpg",
        "/static/img/gallery/images/sepoy_digital_small_MG_Car_Standing.jpg",
        "/static/img/gallery/images/sepoy_digital_small_MG_Hand.jpg",
        "/static/img/gallery/images/sepoy_digital_small_MG_Side_Jacket.jpg",
        "/static/img/gallery/images/sepoy_digital_small_MG_Wall_Sleeping.jpg",
        "/static/img/gallery/images/sepoy_digital_small_Sit_Down.jpg",
        "/static/img/gallery/images/sepoy_digital_small_Straight_jacket.jpg",
        "/static/img/gallery/images/sepoy_film_small03_Rock_sitting.jpg",
        "/static/img/gallery/images/ameylighter.jpg",
        "/static/img/gallery/images/anupamkeys.jpg",
        "/static/img/gallery/images/rata.jpg",
        "/static/img/gallery/images/all_fontanas.jpg",
        "/static/img/gallery/images/sepoytrashbar.jpg",
        "/static/img/gallery/images/amey_trashbar.jpg",
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
    });

    $("#lightGallery").lightGallery();
});
