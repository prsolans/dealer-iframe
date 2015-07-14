/**
 * Created by prsolans on 7/10/15.
 */

$(document).ready(function() {

    $('ul#carousel').carousel();
    $('#home-menu').homeMenu();

    $('.drawer-header').on('click', function() {
        var content = $(this).next('.drawer-content');
        if(!content.hasClass('drawer-open')) {
            $('.drawer-content.drawer-open').hide().removeClass('drawer-open');
            content.slideToggle('fast').addClass('drawer-open');
        }
        else { content.hide().removeClass('drawer-open'); }
    });
});

$.fn.homeMenu = function() {
    var menu = $(this);
    var items = menu.children('div');

    $.each(items, function() {
        var url = $(this).data('link')+'.html';
        $(this).on('click', function() {
            window.location.href = url;
        });
    });
}

$.fn.carousel = function() {
    var ul = $(this);
    var li = ul.children('li');

    var $current = li.first('li');
    $current.show();

    $('#next-slide').on('click', function(e) {
        e.preventDefault();
        $('#prev-slide').removeClass('disabled');

        if($current.next().length == 1) {
            li.hide();
            $current = $current.next();
            $current.show();
            if($current.next().length == 0){
                $(this).addClass('disabled');
            }
        }
    });

    $('#prev-slide').on('click', function(e) {
        e.preventDefault();
        $('#next-slide').removeClass('disabled');

        if($current.prev().length == 1) {
            li.hide();
            $current = $current.prev();
            $current.show();
            if($current.prev().length == 0){
                $(this).addClass('disabled');
            }
        }
    });
}