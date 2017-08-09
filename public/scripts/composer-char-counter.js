$(function() {
  $('textarea').on("keyup", function(event){
    let wordLength = $(".new-tweet").find("textarea").val().length;
    const charLimit = 140;
    const newValue = charLimit - wordLength;
    $(".new-tweet .counter").text(newValue);
    if (newValue <= 0){
      $(".counter").css('color', 'red');
    } else {
      $('.counter').css('color', 'black');
    }
  });
});
