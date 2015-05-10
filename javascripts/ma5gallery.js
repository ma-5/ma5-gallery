/*
*   MA5Gallery
*   v 1.3
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
    setTimeout(function() {$('.ma5-imgbox.ma5-previous').remove();$('body').removeClass('ma5-in');}, 1000);
    var ma5clone = $('.ma5-active img').clone().attr('src', $('.ma5-active img').attr('src').replace(/\-thumbnail./, '.')).addClass('ma5-clone');
    $('body').addClass('ma5-in').append('<div class="ma5-imgbox"></div>');
    $(ma5clone).appendTo($('.ma5-imgbox').last());
}
function ma5hideActive() {
    $('.ma5-imgbox').on('touch click', function() {
        $('figure').removeClass('ma5-active');    
        $('.ma5-imgbox').addClass('ma5-out');
        var content = $(".ma5-bg").contents();
        $('.ma5-tmp').addClass('ma5-out');
        setTimeout(function() {
            $('.ma5-tmp').remove();
        }, 800);
        setTimeout(function() {
            $('.ma5-imgbox').remove();
            $('body').removeClass('ma5-gallery-active')
        }, 800);
    });
}
$.fn.ma5gallery = function(atributes) {
    if(atributes.preload == true) {
        $(this).ma5preload();
    };
    var thisSelector = '.ma5-tmp '+this.selector;
    $(this).on('touch click', function() {
        if(!$('.ma5-imgbox').hasClass('ma5-out') && !$('body').hasClass('ma5-in') ) {
            if($(this).parent().parent().hasClass('ma5-gallery') || $(this).parent().parent().hasClass('ma5-bg')) {
                // gallery mode
                $(this).parent().addClass('ma5-active').parent().clone().appendTo($('body')).removeClass('ma5-gallery').addClass('ma5-tmp');
                $('.ma5-gallery .ma5-active').removeClass('ma5-active');
                if (!$('body').hasClass('ma5-gallery-active')) {
                    $('body').addClass('ma5-gallery-active');
                    $('.ma5-tmp').find('figure').wrapAll( '<div class="ma5-bg" />');
                    setTimeout(function() {$('.ma5-tmp').addClass('ma5-control');}, 800);
                    ma5showActive();
                    ma5hideActive();
                }
                $(thisSelector).on('touch click', function() {
                    if (!$(this).parent().hasClass('ma5-active')) {
                        $('.ma5-tmp figure').removeClass('ma5-active');
                        $(this).parent().addClass('ma5-active');
                        ma5showActive();
                        ma5hideActive(); 
                    }
                });
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
                if($('.ma5-tmp .ma5-active').prev().length) {
                    $('.ma5-tmp .ma5-active').removeClass('ma5-active').prev().addClass('ma5-active');
                    ma5showActive();
                    ma5hideActive();
                }
            }
            else if(e.keyCode == 39) {  
                if($('.ma5-tmp .ma5-active').next().length) {               
                    $('.ma5-tmp .ma5-active').removeClass('ma5-active').next().addClass('ma5-active');
                    ma5showActive();
                    ma5hideActive();
                }
            }  
        }
    });
};
