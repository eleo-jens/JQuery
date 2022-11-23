window.onload = function(){
    // consigne 1
    console.log(`Nombre de li: ${$('li').length}`);
    console.log($('span'));

    // consigne 2
    $('span').each( function () {
        let $text = $(this).text();
        $(this).html(`<strong>${$text}</strong>`); 
    });

    // consigne 3
    let $ol_content = $('ol').html();
    $('ol').html(`<ul>${$ol_content}</ul>`);
    
    // consigne 4
    let i = 1;
    $('li').each( function () {
        let $text = $(this).html();
        $text = i + ". " + $text;
        $(this).html($text);
        i++;
    });

    // consigne 5
    $('li').last().text("Toto");

    // consigne 6
    let email = $('input#email').val();
    let password = $('input#password').val();
    $('input#email').val(password);
    $('input#password').val(email);
    console.log($('input#password').val());
};