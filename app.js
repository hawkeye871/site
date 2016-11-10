/**
 * Created by Admin on 10.11.2016.
 */
$(document).ready(function(){
    $(".js-like").on('click', function(event){
        event.preventDefault();

        $(this).text('Liked!')
            .closest('.news-item')
            .addClass('is-liked');
    })

});
