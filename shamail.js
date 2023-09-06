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
        $(".sections").fadeIn(1000);
        $(".box").fadeIn(1000);
        $(".photo").fadeIn(1000);
    });
    console.log('hewwo 2');

    $('.box').on({
        'click': function(){
            $('#photo-1').attr('src','photo-2.png');
        }
    });
    
   $('.box').on({
        'click': function(){
            $('.photo-2').attr('src','photo-3.png');
        }
    });
    
   $('.box').on({
        'click': function(){
            $('.photo-3').attr('src','photo-4');
        }
    });
    
   $('.box').on({
        'click': function(){
            $('.photo-4').attr('src','photo-5.png');
        }
    });

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