$(document).ready(function(){
    //메뉴버튼 활성화
    
    $(".close").click(function(){
        $(".nav-box").css({left:'1000px'})
    })
    $(".btn").click(function(){
        $("header .nav .close").css({'display':'block'})
    })

    

    if (matchMedia("screen and (min-width: 850px)").matches) {
        $(".btn").click(function(){
            $(".nav-box").css({left:'550px'})
        })
        } else {
            $(".btn").click(function(){
                $(".nav-box").css({left:'250px'})
            })
        }

        window.onresize = function(){
            document.location.reload();
        };
})