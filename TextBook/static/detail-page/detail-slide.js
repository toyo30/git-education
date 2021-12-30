alert(1)






// $(document).ready(function() {

    

//     let questionSize = 3;
//     let pageIndex = 1;


// function slideRight() {


//     $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': '-916px'}, 500);
//     let pageLeft = pageIndex * 916
//     $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': `-${pageLeft} + px`}, 500);

//         if(pageIndex < questionSize) {
//             pageIndex++;
//             $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': `-916 * ${pageIndex} + px`}, 500)
//         }
    

    
// }


// function slideLeft() {

//     $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': '0px'}, 500)
//     if(pageIndex > questionSize) {
//             pageIndex--;
//             $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': `-916 * ${pageIndex} + px`}, 500)
//     }

// }

// $(document).on('click', '.btn-right', slideRight);
// $(document).on('click', '.btn-left', slideLeft);






// })







$(document).ready(function() {

    

    let questionSize = 4;
    let pageIndex = 1;
    


function slideRight() {
    let pageLeft = pageIndex * 916


    // $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': '-916px'}, 500);
    
    console.log(pageLeft);
    // $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': -pageLeft + 'px'}, 500);

        if(pageIndex < questionSize) {
            pageIndex++;
            $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': -pageLeft + 'px'}, 500);
            // $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': `-916 * ${pageIndex} + px`}, 500)
        }
    

    
}


function slideLeft() {

    $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': '0px'}, 500)
    if(pageIndex > questionSize) {
            pageIndex--;
            $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': pageLeft + 'px'}, 500);
            // $(this).siblings('.slide-wrap').find('.slide-show-box').animate({'left': `-916 * ${pageIndex} + px`}, 500)
    }

}

$(document).on('click', '.btn-right', slideRight);
$(document).on('click', '.btn-left', slideLeft);






})








// $(document).ready(function(){


//     var question_size = 3;
//     var page_index = 0;

//     $('.next').click(function(){
//         if(page_index < question_size){
//             page_index++;
//             $('.slides_wrap > ul').animate({'left':(-590*page_index)+'px'},500);
//         } 

//         // if(page_index >= question_size) {
//         //     page_index = 0;
//         //     $('.slides_wrap > ul').animate({'right':(-1180*page_index)+'px'},500);
//         // }
//     })

//     $('.prev').click(function(){
//         if(page_index > 0){
//             page_index--;
//             $('.slides_wrap > ul').animate({'left':(-590*page_index)+'px'},500);
//         }
//     })




//     $('.hidemenu > ul > li').click(function(){
//         var li = $('.hidemenu > ul > li');
//         var height = parseInt(li.css("height").replace("px", ""));
//         var i = $(li).index(this);
//         $('.hidemenu > ul > .active').animate({'top':(i*height + 17)+'px'},300);
//     })




//     var count = 0;
//     $('.close_btn').click(function(){
//         count++;
//         if(count % 2 == 0){
//             $('.hidemenu').css('width','0px');
//             $('.hidemenu > ul > li').fadeOut(200);
//             $(this).css('opacity','0').stop().attr('src','../static/hide_arrow.png').animate({opacity:1},500);             
//             $('#nav').animate({'margin-left':'370px'},500);
//             $('#container').animate({'margin-left':'0px'},500);
//             $('.hidemenu > ul > .active').hide();
//         } 
//         else {
//             $('.hidemenu').css('width','300px');
//             $('.hidemenu > ul > li').fadeIn(1800);    
//             $(this).css('opacity','0').stop().attr('src','../static/hide_arrow_back.png').animate({opacity:1},500);
//             $('#nav').animate({'margin-left':'500px'},500);
//             $('#container').animate({'margin-left':'131px'},500);
//             $('.hidemenu > ul > .active').show();
//         }
//     })


// })