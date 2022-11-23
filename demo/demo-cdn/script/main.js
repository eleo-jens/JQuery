let $span;

window.onload = function() {
    // alert("Mon script est dans le head!");

    // récupération de span dasn document
    let $span = $('span');
    console.log($span);

    for (let i = 0; i < $span.length; i++) {
        console.log($span[i]);
    }

    console.log('span.urgent');
    console.log($span.html());
    $span[2].innerHTML = "Eleo";

    let $is_first_li = $('ul *:first').is('li');
    console.log(`le premier élement du ul est un li: ${$is_first_li}`);
    let $is_first_p = $('ul *:first').is('p');
    console.log(`le premier élement du ul est un p: ${$is_first_p}`);

    $('input').each( function () {
        console.log($(this).val());
    });

    $('input').each( function () {
        $(this).val('Toto');
    });
}