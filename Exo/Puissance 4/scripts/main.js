const jeton_color = ["red", "yellow"];
let turn = 0;

const add_jeton = function (e) {
  let $jeton = $("<div>")
    .css({
      "width": "100px",
      "height": "100px",
      "border-radius": "50%",
      "margin-left": "10px",
      "margin-bottom": "20px",
      "position": "absolute",
    })
    .addClass(jeton_color[turn % 2]); // compteur limité à la longueur du tableau: modulo parfait pour parcourir les index d'un tableau [turn%jeton_color.length]
  $(this).append($jeton);
  let count = $(this).children().length;
  $jeton.animate({ top: `${620 - count * 100}px` }, 500, "easeOutBounce");
  turn++;
  if (count == 6) {
    $(this).off("click", add_jeton);
  }
};

window.onload = function () {
  $("body>div").on("click", add_jeton);
};
