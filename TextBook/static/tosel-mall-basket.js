// (() => {  

let allPrice = 33500;
let deliveryFee = 3500;
let wholePrice = 40000;
let salePrice = 100000;




$('.whole-sale-value').text(salePrice);
$('.whole-product-value').text(wholePrice);
$('.delivery-value').text(deliveryFee);
$('.whole-price-value').text(allPrice);


//----------------로드될 때부터 check되게 만들기

$(window).on('load', function() {
    $('#allCheck').prop("checked", true);
    allCheck();
    sumPrice();



});


/* ----------------전체선택 -------------- */

$(document).on('click', '#allCheck', function() {
    allCheck();
});

function allCheck() {
    let checked = $('#allCheck').is(":checked");

    if(checked) {
        $('#allCheck').parents(".table-area").find('input').prop("checked", true)
    } else {
        $('#allCheck').parents(".table-area").find('input').prop("checked", false)
    }
}



/* ---------------- 부분선택 -------------- */
$(document).on('click', '.oneCheck', function() {
    let oneChecked = $(this).is(":checked");

    if (!oneChecked) {
        $('#allCheck').prop('checked', false)
    } else {
        let is_checked = true;
        $(".table-area .oneCheck").each(function() {
            is_checked = is_checked && $(this).is(":checked");
        });

    
        $('#allCheck').prop("checked", is_checked);

    }
});



//---------------------- 삭제 취소하기 -------------------- //

$(document).on('click', '.remove-btn', function() {
    
    if (confirm('해당 상품을 삭제하시겠습니까?')) {
        $(this).parent().parent().remove();

        sumPrice();

    } else {

    }

    // plusAllPrice();
});



//---------------------- 각자 더하기 -------------------- //


$(document).on('click', '.sign-mius', function(e){
    e.preventDefault();
    let stat = $(this).next().children('.amount-count').val();
    if(stat == NaN || stat == "") {
    //pass
    } else {
        let num = parseInt(stat,10);
            
        num--;
        if(num<=1){
            num = 1;
        }

        $(this).parents().eq("3").find('.amount-count').val(num);

    }

    // plusAllPrice();
    


    // calWholePrice();
    sumPrice();
});



$(document).on('click', '.sign-plus', function(e){
    e.preventDefault();
    let stat = $(this).prev().children('.amount-count').val();
    if(stat == NaN || stat == "") {
        //pass
    } else {
        let num = parseInt(stat,10);
        // $('.amount-count').val(num + 1);
        num++;
        if(num>=999){
            num = 999;
        }

        
        $(this).parents().eq("3").find('.amount-count').val(num);


    }

    // plusAllPrice();
    sumPrice();

});



//----------- checked된 요소들을 더하기 

$(document).on('click', '.oneCheck', function() {
    sumPrice();
    

    

});


function sumPrice() {
    let checks = $('.table-area .oneCheck');
    
    allPrice = 0;
    
    let allOriginPrice = 0;

    checks.each(function(item, check) {
        let allSale = 0;
        
        if($(check).is(":checked")) {
            
            let bookLevelEach = $(check).parents().eq('1').find('.book-level').text();
            let bookAmountEach = parseInt($(check).parents().eq('1').find('.amount-count').val());
            let bookPriceEach = $(check).parents().eq('1').find('.sale-price').eq('1').text();

            let bookOriginEach = $(check).parents().eq('1').find('.original-value').eq('1').text();
    

            bookOriginEach = parseInt(bookOriginEach.replace(/,/g, ''))
            bookPriceEach = parseInt(bookPriceEach.replace(/,/g, ''))
            
            console.log(bookLevelEach);

            /* 총 상품금액 */
            allPrice += bookPriceEach * bookAmountEach;


            allOriginPrice += bookOriginEach * bookAmountEach;
            


        }
        else {
            console.log('else');
            
        }
        
    });


    $('.whole-sale-value').text(allOriginPrice - allPrice)
    $('.whole-product-value').text(allPrice);
    $('.whole-price-value').text(allPrice + parseInt($('.delivery-value').text()));
    console.log('allOriginPrice' + allOriginPrice);
    console.log('allPrice' + allPrice);
}



//}