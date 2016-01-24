$(document).ready(function() {
    /*
    var images = [
        "/static/img/gallery/images/anupamkeysmercurylounge.jpg",
    ];*/

    var images = [
    {
        image: "/static/img/gallery/images/anupamkeysmercurylounge.jpg",
        caption: "Mercury Lounge, 15 Nov 2015"
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_Car_sitting.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_Goth.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_MG_Car_Standing.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_MG_Hand.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_MG_Side_Jacket.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_MG_Wall_Sleeping.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_Sit_Down.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_digital_small_Straight_jacket.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/sepoy_film_small03_Rock_sitting.jpg",
        kasiaCredit: true,
    },
    {
        image: "/static/img/gallery/images/ameylighter.jpg",
        caption: 'Fontanas, 26 July 2014'
    },
    {
        image: "/static/img/gallery/images/anupamkeys.jpg",
        caption: 'Fontanas, 23 April 2014'
    },
    {
        image: "/static/img/gallery/images/rata.jpg",
    },
    {
        image: "/static/img/gallery/images/all_fontanas.jpg",
        caption: 'Fontanas, 23 April 2014' 
    },
    {
        image: "/static/img/gallery/images/sepoytrashbar.jpg",
        caption: 'Trash Bar, 29 January 2015'
    },
    {
        image: "/static/img/gallery/images/amey_trashbar.jpg",
        caption: 'Trash Bar, January 2015'
    },
    {
        image: "/static/img/gallery/images/all_paperbox.jpg",
        caption: 'The Paper Box, 28 May 2015'
    },
    {
        image: "/static/img/gallery/images/anupam_paperbox.jpg",
        caption: 'The Paper Box, 28 May 2015'
    }
    ];

    var danWrightCopyright = 'Credit: Dan Wright, <a href="http://www.behindthescenepress.com">Behind The Scenes</a>';
    var kasiaCredit = 'Credit: <a href="http://www.kasiagrabek.com">Kasia Grabek</a>';

    $.each(images, function(index, img) {
        console.log('image', img.image);
        var data = {
            'class': 'col-xs-12 col-sm-6 col-md-4',
            'data-src': img.image,
        };

        // TODO(sri): Maybe allow captions along with credits.
        if (img.caption) {
            data['data-sub-html'] = '<div class="image-caption">' + img.caption + '</div>';
        }

        if (img.kasiaCredit) {
            data['data-sub-html'] = '<div class="image-caption">' + kasiaCredit + '</div>';
        } else if (img.danWrightCopyright) {
            data['data-sub-html'] = '<div class="image-caption">' + danWrightCopyright + '</div>';
        }

        console.log('data', data);

        var listitem = $("<li/>", data);
        var imageDiv = $("<div/>", {
            class: 'gallery-image'
        });

        var image = $("<img/>", {
            class: "img-responsive center-block",
            src: img.image
        })

        imageDiv.append(image);
        listitem.append(imageDiv);
        $("#lightGallery").append(listitem);
    });

    $("#lightGallery").lightGallery();
});
