$(document).ready(function(){
    var page = 0

    function sliderFunc(){
        if(page<3){
            $('.slider-container').animate({
                left: '-=100%'
            }, 3000)
            page++
        }
        else{
            $('.slider-container').animate({
                left: '0'
            }, 3000)
            page=0
        }
    }

    setInterval(sliderFunc, 5000)

})