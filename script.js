$(document).ready(function() {
        $('h2').mouseenter(function() {
                $('h2').fadeTo('fast',1.00);
    });
        $('h2').mouseleave(function() {
                $('h2').fadeTo('slow',0.5);
    });
});

$(document).ready(function() {
        $('h1').click(function() {
                $('h1').fadeOut('fast',1.00);
        });
});

$(document).ready(function() {
        $('div').click(function() {
                $('this').fadeOut('fast');
        });
});
