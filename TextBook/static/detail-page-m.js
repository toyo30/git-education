

var mql = window.matchMedia("screen and (max-width: 650px)");



// function resizeEvent() {
//     if (mql.matches) {
//         console.log("화면의 너비가 768px 보다 작습니다.");
//     } else {
//         console.log("화면의 너비가 768px 보다 큽니다.");
//         var swiper = new Swiper(".firstSwiper", {
//             navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//             },
//         });
        
//         var swiper = new Swiper(".secondSwiper", {
//             navigation: {
//             nextEl: ".button-next",
//             prevEl: ".button-prev",
//             },
//         });
//     }

// }


//$(window).resize(resizeEvent);




//$(document).ready(resizeEvent);


(function eventResize() {
    console.log('h1');


    function eventSize() {
        if (mql.matches) {
            console.log("화면의 너비가 650px 보다 작습니다.");
            window.swiper2 = new Swiper(".firstSwiper", {
                slidesPerView: "auto",
                spaceBetween: 0,
                pagination: {
                el: ".swiper-pagination",
                clickable: true,
                },
            });
            
            // var swiper = new Swiper(".secondSwiper", {
            //     navigation: {
            //     nextEl: ".button-next",
            //     prevEl: ".button-prev",
            //     },
            // });
            
        } else {
            console.log("화면의 너비가 650px 보다 큽니다.");
            var swiper = new Swiper(".firstSwiper", {
                navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
                },
            });
            
            var swiper = new Swiper(".secondSwiper", {
                navigation: {
                nextEl: ".button-next",
                prevEl: ".button-prev",
                },
            });
        }
    }

    eventSize();

    
})();

