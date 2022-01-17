(() => {  



    /* ----------------전체선택 -------------- */

    $(document).on('click', '#allCheck', function() {
        let checked = $(this).is(":checked");
    
        if(checked) {
            $(this).parents(".table-area").find('input').prop("checked", true)
        } else {
            $(this).parents(".table-area").find('input').prop("checked", false)
        }
    
        // console.log('asdf')
        // $('input:checkbox').not(this).prop('checked', this.checked);
    });
    
    
    
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
        console.log(num);

        $(this).next().children('.amount-count').val(num);

    }

    
    


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

        console.log(num);

        $(this).prev().children('.amount-count').val(num);
  

        
    }

});







   //---------------------- 삭제 취소하기 -------------------- //

   $(document).on('click', '.remove-btn', function() {
        
        if (confirm('해당 상품을 삭제하시겠습니까?') == true) {
            $(this).parent().parent().remove();
        } else {

        }
   });



  

})()

