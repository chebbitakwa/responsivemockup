// apparition lors de scrol
var scrollElements = document.querySelectorAll(".scroll");
setTimeout(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop()+ $(window).height();
        $(".scroll").each(function(){
            console.log($(this).offset().top)

            if(scroll>=$(this).offset().top +$(this).outerHeight()){
                console.log($(this))
                $(this).animate({'opacity':'1'},500);

            }
        })   
    })
},1000)

//rotation simple des icones

$('.rotation').mouseover(function() {
    $(this).animate(
      { deg: 360 },
      {
        duration: 1200,
        step: function(now) {
          $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
      }
    );
  });
  //apparition de text lors de survole
  $('.image').hover(function() {
      $(".text").show();},function(){
        $(".text").hide();
      });
