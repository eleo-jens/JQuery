window.onload = function (){
    $('button').click( function (e){
        let $value = $('input#item').val();
        $('p').remove();
        $('input').val("");
        //if ($value.trim().length > 0)
        if ($value != "" && ($value.trim().length === 0) == false){
            $(`<li>${$value}</li>`).appendTo($('ul'));
        }
        else {
            $('<p class="alert">Veuillez remplir le champ!</p>').appendTo($('body'));
            $('p').css('color', 'red').css('font-weight','bold');
        }
    });
};

/* Chainage en JS
let text = "Hello world!"
let modified_text = text.replace('o','0')
                        .slice(0,5)
                        .concat('!')
                        .replace('l','1');
*/