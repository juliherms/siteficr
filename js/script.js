(function($){

    var contentWayPoint = function(){

        $('.paroller').paroller()

        $('.element-animate').waypoint( function(direction){
            console.log(direction)
            console.log(this)
            console.log(this.element)

            const $element = $(this.element);
            let effect = $element.data('animate-effect') || 'fadeInUp';

            if(direction == 'down' && !$(this.element).hasClass('element-animated')){
                $(this.element).removeClass('element-animate').addClass('element-animated ' + effect)
            }

        },{
            offset: '90%'
        })
    }

    contentWayPoint();

})(jQuery)