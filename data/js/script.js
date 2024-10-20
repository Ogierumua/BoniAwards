/*$(document).ready(function(){
    alert("welcome")
});
document.getElementbyById("cyber");

*/
$(window).on("scroll", function(){
    var scrollTop = $(window).scrollTop();
    if(scrollTop >= 100){
        $('body').addClass('fixed-header');
    } else {
        $('body').removeClass('fixed-header')
    }
});

