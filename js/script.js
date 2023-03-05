$(document).ready(function(){
    var rollHeader = 850;
    $(window).scroll(function(){
        var scroll = getCurrentScroll();
        if ( scroll >= rollHeader ) {
            $('.nav').addClass('roll');
            }
            else {
            $('.nav').removeClass('roll');
            }
    });
        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
            }

    //메뉴버튼 활성화
    
    
    $(".close").click(function(){
        $(".nav-box").css({left:'1000px'})
    })
    $(".btn").click(function(){
        $(".close").css({'display':'block'})
    })
    $("header .nav .close").click(function(){
        $("header .nav .close").css({'display':'none'})
    })



    // best-item slide
    $(".best-list .items").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 2,
        pauseOnFocus: false,
        pauseOnHover : false,
        responsive:[{
            breakpoint:1024,
            settings:{
                slidesToShow:1,
                slidesToScroll:1
            }
        }]
    })

    $(".best_txt .items").slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        pauseOnHover : false,
        pauseOnFocus: false,
        fade:true
    })

    $('.store_slide').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        slidesToShow: 1,
        pauseOnHover : false,
        pauseOnFocus: false,
        fade:true
    })


    if (matchMedia("screen and (min-width: 850px)").matches) {
        $(".video-box .btn").click(function(){
            $(".nav-box").css({left:'550px'})
        })
        } else {
            $(".video-box .btn").click(function(){
                $(".nav-box").css({left:'250px'})
            })
        }

        window.onresize = function(){
            document.location.reload();
        };
});

