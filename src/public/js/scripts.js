$(document).ready(function(){
    $('.navbar-nav li a').on('click', this, function(event){
        $target = $(event.target);
        $parent = $target.parent();

        $active = $('.active');
        if (!$parent.hasClass('active')) {
            $active.removeClass('active');
            $parent.addClass('active');
        }
    });
});
