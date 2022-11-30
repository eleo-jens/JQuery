let $total = 0;
$('button').each(function(){
    $(this).on("click", function (event) {
        
        let $row = $(event.target).parent().parent();
        let $panier = $('div#panier table');
        let $row_copy = $($row).clone();
        let $row_copy_tds = $row_copy.children();
        let $price = parseInt($row_copy_tds[1].innerText);
        
        $row_copy_tds[2].remove();
        $panier.append($row_copy);
        $total = $total + $price;
        $('input#prix').val($total);
    });
})