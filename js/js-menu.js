$(function(){
    $(window).scroll(function(){
        if ($('html,body').scrollTop()>300) {
            $('.top-header').addClass('anmenu');
            $('.top-header').removeClass('hienmenu');

            $('.logo').addClass('anlogo');
            $('.logo').removeClass('hienlogo');

            $('.btn-button').addClass('an-k-btn-button');
            $('.btn-button').removeClass('hien-k-btn-button');

            $('.top-search').addClass('an-search');
            $('.top-search').removeClass('hien-search');

            $('.form_search').addClass('an-form');
            $('.form_search').removeClass('hien-form');
        }
        else if($('html,body').scrollTop()<=100){
            $('.top-header').addClass('hienmenu');
            $('.top-header').removeClass('anmenu');

            $('.logo').addClass('hienlogo');
            $('.logo').removeClass('anlogo');

            $('.btn-button').addClass('hien-k-btn-button');
            $('.btn-button').removeClass('an-k-btn-button');

            $('.top-search').addClass('hien-search');
            $('.top-search').removeClass('an-search');

            $('.form_search').addClass('hien-form');
            $('.form_search').removeClass('an-form');
        }
    })
})