$(document).ready(function () {

    //下拉式選單
    $('.menu-ul >li>a').click(function (e) { 
        e.preventDefault();
        $(this).parent().find('.hide-ul').slideToggle();
        $(this).parent().siblings().find('.hide-ul').slideUp(1000);
    });

    //swiper 效果
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        speed: 500,
        loop: true,
        autoplay: {
             delay: 2000,
           },
        effect: 'coverflow',
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },        
    });

    //lightbox 效果
    lightbox.option({
        'resizeDuration': 300,
        'wrapAround': true
    })

    //scroll to top 效果
    $('.arrow-top').click(function (e) { 
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        },2000);  
    });

});