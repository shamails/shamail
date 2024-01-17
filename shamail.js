console.log('hewwo')

// new CircleType(document.getElementById('welcome'));

// $(document).ready(function(){
//     $("#welcome").click(function(){
//       $(this).hide();
//       console.log('hewwo 2');
//     });
// }); 

// jquery work sham!! from on you need to test other things hehe haha

//delay function for the intro to disappear

// $(document).ready(function(){
//     $(".intro").click(function(){
//       $(this).hide();
//       console.log('hewwo 2');
//     });
// }); 

$(document).ready(function(){
    $(".intro").fadeOut(3750 , function(){
        $(".sections").fadeIn(500);
        $(".title").fadeIn(500);
        $(".box").fadeIn(500);
        $(".photo").fadeIn(500);
        $(".shamail").fadeIn(500);
    });
    console.log('hewwo 2');

    $(".shamail").on("scroll", function(){
        $(".shamail").fadeOut(1000);
        console.log('hewwo 3');
    })
    $(window).scroll(function () {

    if ($(window).scrollTop() >= 850) {
        $('body').css('background-color','#FFF3DA');
        } else {
        $('body').css('background-color','#270029');
        }
    });

//    



Resources

    // var images = [
    //     'photo-2.png' ,
    //     'photo-3.png' ,
    //     'photo-4.png' ,
    //     'photo-5.png' ,
    //     'shamail.png'
    // ]

    // for ( img in images ) {
    //     // show the first image, hide the rest
    //     if ( img == 0 ) {
    //         'click' : function(){
    //         $('#photo-1').attr('src','photo-2.png') ;
    //     } }
    //     if ( img == 1) {
    //         'click' : function(){
    //         $('#photo-1').attr('src','photo-3.png') ;
    //     }}
    //      if ( img == 2) {
    //         'click' : function(){
    //         $('#photo-1').attr('src','photo-4.png') ;
    //     }}
    //     if (img == 3) {
    //         'click' : function(){
    //         $('#photo-1').attr('src','photo-5.png') ;
    //     }}
    // }
        var photo2 = 'photo-2.png'
        var photo3 = 'photo-3.png'
        var photo4 = 'photo-4.png'
        var photo5 = 'photo-5.png'
    $('.box').on({
        'click': function(){
            $('#photo-1').attr('src','photo-5.png');
            // $('#photo-1').attr('id','photo-2');
            // $('.photo').replaceWith($(".photo2"));
        } ,
        'mouseover': function(){
            $('#photo-1').attr('src','photo-3.png');
            // $('#photo-1').attr('id','photo-2');
            // $('.photo').replaceWith($(".photo2"));
        } ,
        'mouseleave': function(){
            $('#photo-1').attr('src','sham.png');
            // $('#photo-1').attr('id','photo-2');
            // $('.photo').replaceWith($(".photo2"));
        } 
        // 'click': function(){
        //     $('#photo-1').attr('src','photo-4.png');
        //     // $('#photo-1').attr('id','photo-2');
        //     // $('.photo').replaceWith($(".photo2"));
        // } 
        // 'click': function(){
        //     $('#photo-1').attr('src','photo-5.png');
        //     // $('#photo-1').attr('id','photo-2');
        //     // $('.photo').replaceWith($(".photo2"));
        // }
    });
    
   
    
//    $('.box').on({
//         'click': function(){
//             $('#photo-3').attr('src','photo-4.png');
//             $('#photo-3').attr('id','photo-4');
//             // $('.photo3').replaceWith($(".photo4"));
//         }
//     });
    
//    $('.box').on({
//         'click': function(){
//             $('#photo-4').attr('src','photo-5.png');
//             $('#photo-4').attr('id','photo-5');
//             // $('.photo4').replaceWith($(".photo5"));
//         }
//     });

    // function transformScroll(event) {
    //     if (!event.deltaY) {
    //       return;
    //     }
      
    //     event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
    //     event.preventDefault();
    //   }
      
    //   var element = document.scrollingElement || document.documentElement;
    //   element.addEventListener('wheel', transformScroll);

    // $(".photo").click(function(){
    //     $(".photo").hide();
    //     $(".photo-3").hide();
    //     $(".photo-4").hide();
    //     $(".photo-2").hide();
    //     $(".photo-5").css("visibility" , "visible")
    // });

    // $(".toys").click(function(){
    //     $(".interactive").hide();
    //     $(".toys").hide();
    //     $(".editorial").hide();
    //     $(".about").hide();
    // });

    // $(".editorial").click(function(){
    //     $(".interactive").hide();
    //     $(".toys").hide();
    //     $(".editorial").hide();
    //     $(".about").hide();
    // });

    // $(".about").click(function(){
    //     $(".interactive").hide();
    //     $(".toys").hide();
    //     $(".editorial").hide();
    //     $(".about").hide();
    // });
});

//ummm so basically the .click is bascially to hide to main menu for the individual sections to come up