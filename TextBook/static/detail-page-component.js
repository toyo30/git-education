let listAddNum = 0;
let bookTitle = $('#bookTitle').text() + ' ' + $('#bookLevel').text();
function addContent(){
    let bookInfo = $(this).text();
    listAddNum++;
    let content = `
    <div class="m-component-area">
                            <p class="m-component-title"><span class="point">${listAddNum}</span>. ${bookTitle}</p>
                            <p class="m-component-subtitle">${bookInfo}</p>
                            <div class="m-component-select">
                                <div class="m-component-amount">
                                    <div class="amount-box1">
                                        <div class="amount-check1">
                                            <div class="sign1 sign-mius1">
                                                <img src="../static/detail-page/m-mius-btn.png" class="minus1">
                                            </div>
                                            <div class="amount-num1">
                                                <input type="number"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" /
                                                class="amount-count1" maxlength="2" min="1" value="1">
                                            </div>
                                            <div class="sign1 sign-plus1">
                                                <img src="../static/detail-page/m-plus-btn.png" class="plus1">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="m-component-price"><span class="muti-book-price">17,910</span>원</div>
                            </div>
                    
                            <span class="remove-component"></span>
                        </div>`

    $('.mobile-float .m-component-box').prepend(content);

    $('.label').text('분권 구매');
    calWholePrice();
}



function removeContent() {
    $(this).parent().remove();
    listAddNum = 0;
    // $(.m-whole-price-value').text(output);
    $($('.m-component-title .point').get().reverse()).each(function(index, item) {
        listAddNum++;
        $(item).text(listAddNum);
    });


    distributionContent(listAddNum);
    

    calWholePrice();
}

function distributionContent(point) {
    $('.m-component-title .point').each(function(index, item) {
        point++;
        $(item).val(listAddNum);
    });

}


$(document).on('click', '.mobile-float .optionItem', addContent);
$(document).on('click', '.remove-component', removeContent);




//---- 책 각자 수량 ---------------------------




$(document).on('click', '.sign-mius1', function(e){
    e.preventDefault();
    let stat = $(this).next().children('.amount-count1').val();
    if(stat == NaN || stat == "") {
    //pass
     } else {
        let num = parseInt(stat,10);
            
        num--;
        if(num<=1){
            num = 1;
        }
        // console.log(num);
        $(this).next().children('.amount-count1').val(num);
        //$('.amount-count').val(num);
        // calSeveralPrice(num);
        // let Price = $('.sale-price').text();    
        // Price = parseInt(Price.replace(',', ''));
        // let severalPrice = num * Price;
        // let number = String(severalPrice);
        // let point = ',';

        // if (number.length > 3 ) {
        // output = [number.slice((-number.length), -3), point, number.slice(-3)].join('');
        // } 

        // $(this).parent().parent().parent().parent().children().next().children('.muti-book-price').text(output);
        calSeveralPrice(num, this);
  
    }

    
    


    calWholePrice();
});



$(document).on('click', '.sign-plus1', function(e){
    e.preventDefault();
    let stat = $(this).prev().children('.amount-count1').val();
    if(stat == NaN || stat == "") {
        //pass
    } else {
        let num = parseInt(stat,10);
        $('.amount-count').val(num + 1);
        num++;
        if(num>=999){
            num = 999;
        }
        //$('.amount-count').val(num);
        //$(this).parent().parent().children().find('.amount-count').val(num);
        // caluPrice(num)
        $(this).prev().children('.amount-count1').val(num);
        // calSeveralPrice(num);
    //     let Price = $('.sale-price').text();    
    // Price = parseInt(Price.replace(',', ''));
    // let severalPrice = num * Price;
    // let number = String(severalPrice);
    // let point = ',';

    // if (number.length > 3 ) {
    //     output = [number.slice((-number.length), -3), point, number.slice(-3)].join('');
    // } 
    
    // $(this).parent().parent().parent().parent().children().next().children('.muti-book-price').text(output);
    calSeveralPrice(num, this);
        
    }
    calWholePrice();
});


function calSeveralPrice(num, target) {
    let Price = $('.sale-price').text();    
    Price = parseInt(Price.replace(',', ''));
    let severalPrice = num * Price;

    let number = String(severalPrice);
    let point = ',';

    if (number.length > 3 ) {
        output = [number.slice((-number.length), -3), point, number.slice(-3)].join('');
    } 

    $(target).parent().parent().parent().parent().children().next().children('.muti-book-price').text(output);

}






// 전체 계산 
function calWholePrice() {
    let severalPrice = 0;
    $('.mobile-floation-box .muti-book-price').each(function() {
        let Price = $(this).text();
        Price = parseInt(Price.replace(',', ''))
        severalPrice += Price;
    })


    let number = String(severalPrice);
    let point = ',';

    if (number.length > 3 ) {
        output = [number.slice((-number.length), -3), point, number.slice(-3)].join('');
    } 

    if($('.m-component-box').children().length < 1){
        output = 0;   
    }

    $('.mobile-floation-box .m-whole-price-value').text(output);

    
}


$(document).on('click', '.m-whole-price-text', calWholePrice);