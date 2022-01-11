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
                <div class="amount-box">
                    <div class="amount-check">
                        <div class="sign sign-mius">
                            <img src="../static/detail-page/m-mius-btn.png" class="minus">
                        </div>
                        <div class="amount-num">
                            <input type="number"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" /
                            class="amount-count" maxlength="2" min="1" value="1">
                        </div>
                        <div class="sign sign-plus">
                            <img src="../static/detail-page/m-plus-btn.png" class="plus">
                        </div>
                    </div>
                </div>
            </div>
            <div class="m-component-price"><span class="muti-book-price">17,910</span>원</div>
        </div>

        <span class="remove-component"></span>
    </div>`

    $('.mobile-float .m-component-box').append(content);

    $('.label').text('분권 구매');

}

function removeContent() {
    $(this).parent().remove();
    listAddNum = 0;

    $('.m-component-title .point').each(function() {
        listAddNum++;
        $(this).val(listAddNum);
    });
}


$(document).on('click', '.mobile-float .optionItem', addContent);
$(document).on('click', '.remove-component', removeContent);








function calWholePrice() {
    let severalPrice = 0;
    $('.mobile-floation-box .muti-book-price').each(function() {
        console.log($(this).val());
    })

    $('.mobile-floation-box .m-whole-price-value').text();
}


$(document).on('click', '.m-whole-price-text', calWholePrice);