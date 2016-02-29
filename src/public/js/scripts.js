$(document).ready(function(){
    $('.navbar-nav li a').on('click', this, function(event){
        $target = $(event.target);
        $parent = $target.parent();

        if ($parent.hasClass('active')) {
            console.log('active');
        }
    });
});
