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
        plusAllPrice();


    
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
    $(document).on('click', '#oneCheck', function() {
        let oneChecked = $(this).is(":checked");
    
        if (!oneChecked) {
            $('#allCheck').prop('checked', false)
        } else {
            let is_checked = true;
            $(".table-area #oneCheck").each(function() {
                is_checked = is_checked && $(this).is(":checked");
            });
    
        
            $('#allCheck').prop("checked", is_checked);
    
        }
    });



    //---------------------- 삭제 취소하기 -------------------- //

   $(document).on('click', '.remove-btn', function() {
        
        if (confirm('해당 상품을 삭제하시겠습니까?') == true) {
            $(this).parent().parent().remove();
        } else {

        }

        plusAllPrice();
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

        plusAllPrice();
       


        // calWholePrice();
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

        plusAllPrice();

    });



    //----------- checked된 요소들을 더하기 

    $(document).on('click', '#oneCheck', function() {
        let checks = $('.table-area #oneCheck');
       

        
        let allPrice = 0;
        checks.each(function(item, check) {
            
            if($(check).is(":checked")) {
                
                let bookLevelEach = $(check).parents().eq('1').find('.book-level').text();
                let bookAmountEach = Number($(check).parents().eq('1').find('.amount-count').val());
                let bookPriceEach = $(check).parents().eq('1').find('#bookPrice').text();

                bookPriceEach = parseInt(bookPriceEach.replace(',', ''))
                

                console.log(typeof bookPriceEach)
                console.log(bookPriceEach * bookAmountEach);

                allPrice += bookPriceEach * bookAmountEach;
                console.log(allPrice);


            }
            else {
                
                
            }
            // $('.whole-price-value').text(allPrice);
        
        });

    });

    // function plusAllPrice() {
    //     let checks = $('.table-area #oneCheck');
    //     let allPrice = 0;
    //     checks.each(function(item, check) {
    //         let bookLevelEach = $(check).parents().eq('1').find('.book-level').text();
    //         if(!$(check).is(":checked")) {
    //             console.log(bookLevelEach);
           

    //         }
    //         else {
    //             console.log(bookLevelEach);
                
    //             let bookAmountEach = Number($(check).parents().eq('1').find('.amount-count').val());
    //             let bookPriceEach = $(check).parents().eq('1').find('#bookPrice').text();
    //             bookPriceEach = parseInt(bookPriceEach.replace(',', ''))
                
    //             console.log(bookPriceEach, typeof bookPriceEach);

    //             allPrice += bookPriceEach * bookAmountEach;
    //             console.log(allPrice);
   
    //         }
    //         $('.whole-price-value').text(allPrice);
        
    //     });
    // }


    // function calSeveralPrice(num, target) {
    //     let Price = $(target).parent().parent().parent().prev().children().find('#bookPrice').text();
    //     Price = parseInt(Price.replace(',', ''));
    //     let severalPrice = num * Price;

    //     let number = String(severalPrice);
    //     let point = ',';

    //     if (number.length > 3 ) {
    //         let output = [number.slice((-number.length), -3), point, number.slice(-3)].join('');
    //         $('.whole-price-value').text(output);
    //         // console.log(output);
            
    //     } 

    // }


    // $(document).on('click', '#oneCheck', function() {
    //     //*********************  mobile *********************

     

    //     let test = $(this).parents().eq("1").find('.amount-box .amount-count').val();

    //     let point = $(this).parents('tr').find('#bookPrice').text();


    // });

