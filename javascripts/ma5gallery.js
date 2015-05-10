/*
*   MA5Gallery
*   v 1.2
*   Copyright (c) 2015 Tomasz Kalinowski
*   http://galeria.ma5.pl
*   GitHub: https://github.com/ma-5/ma5-gallery
*/ 
;
$.fn.ma5preload = function() {
    $('body').append('<div class="ma5-preloadbox"></div>');
    this.each(function(){$(this).clone().attr('src', $(this).attr('src').replace(/\-thumbnail./, '.')).appendTo('.ma5-preloadbox');});  
}
function ma5showActive() {
    $('.ma5-imgbox').addClass('ma5-previous');
    $('body').addClass('ma5-in').append('<div class="ma5-imgbox"></div>');
    setTimeout(function() {$('.ma5-imgbox.ma5-previous').remove();$('body').removeClass('ma5-in');}, 1000);
    var last = $('.ma5-imgbox').last();
    $('.ma5-active img').clone().attr('src', $('.ma5-active img').attr('src').replace(/\-thumbnail./, '.')).addClass('ma5-clone').appendTo(last);
}
function ma5hideActive() {
    $('.ma5-imgbox').on('touch click', function() {
        $('figure').removeClass('ma5-active');    
        $('.ma5-imgbox').addClass('ma5-out');
        var content = $(".ma5-bg").contents();
        $('.ma5-gallery').addClass('ma5-out');
        setTimeout(function() {
            $('.ma5-gallery figure').removeClass('ma5-active');
            $('.ma5-gallery').removeClass('ma5-control').removeClass('ma5-out');
            $(".ma5-bg").replaceWith(content);
        }, 800);
        setTimeout(function() {
            $('.ma5-imgbox').remove();
            $('.ma5-control figure').removeClass('ma5-active');
            $('body').removeClass('ma5-gallery-active')
        }, 1600);
    });
}
$.fn.ma5gallery = function(atributes) {
    if(atributes.preload == true) {
        $(this).ma5preload();
    }
    $(this).on('touch click', function() {
        if(!$('.ma5-imgbox').hasClass('ma5-out') && !$('body').hasClass('ma5-in') ) {
            if($(this).parent().parent().hasClass('ma5-gallery') || $(this).parent().parent().hasClass('ma5-bg')) {
                // gallery mode
                if (!$(this).parent().hasClass('ma5-active')) {
                    $('.ma5-gallery figure').removeClass('ma5-active');
                    $(this).parent().addClass('ma5-active');
                    if (!$('body').hasClass('ma5-gallery-active')) {
                        $('body').addClass('ma5-gallery-active');
                        $(this).parent().parent().find('figure').wrapAll( '<div class="ma5-bg" />');
                    }
                    ma5showActive();
                    var fThis = $(this);
                    setTimeout(function() {$(fThis).parent().parent().parent().addClass('ma5-control')}, 800);
                    ma5hideActive();
                }
            } else {
                //single mode
                $(this).parent().addClass('ma5-active');
                ma5showActive();
                ma5hideActive();
            }
        }
    });
    //navigate
    $("body").keydown(function(e) {
        if($("body").hasClass('ma5-gallery-active') && !$("body").hasClass('ma5-in')) {
            if(e.keyCode == 37) {  
                if($('.ma5-active').prev().length) {
                    $('.ma5-active').removeClass('ma5-active').prev().addClass('ma5-active');
                    ma5showActive();
                    ma5hideActive();
                }
            }
            else if(e.keyCode == 39) {  
                if($('.ma5-active').next().length) {               
                    $('.ma5-active').removeClass('ma5-active').next().addClass('ma5-active');
                    ma5showActive();
                    ma5hideActive();
                }
            }  
        }
    });
};
