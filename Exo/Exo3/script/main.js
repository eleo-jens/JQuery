$('button').each(function(){
    $(this).on("click", function (event) {
        console.log("test");
        console.log(event.target);
        console.log($(event.target).parent().prevAll());
    });
})