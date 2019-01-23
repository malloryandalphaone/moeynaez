$(document).ready(function() {
    $('head').append('<link href="https://i.imgur.com/0DG8zul.png" rel="shortcut icon" type="image/x-icon" />');

    $.getJSON("https://ptb.discordapp.com/api/guilds/264370940706553857/widget.json", function(result) {

        for(i=0; i < result.channels.length; i++){
            if(result.channels[i].position === 0){
                var serverNum = result.channels[i].name.replace(":", "");
            } else if (result.channels[i].position === 1){
                var usersNum = result.channels[i].name.replace(":", "");
            } else if(result.channels[i].position === 2){
                var channelsNum = result.channels[i].name.replace(":", "");
            }
        }

        $('.statsServersNum').text(numberWithCommas(serverNum));
        $('.statsUsersNum').text(numberWithCommas(usersNum));
        $('.statsChannelsNum').text(numberWithCommas(channelsNum));

        console.log("[x] Data success. ")
    });

    $('.topBar-GetBaron').on('click', function() {
        window.open("https://discordapp.com/oauth2/authorize?client_id=435392018693488641&scope=bot&permissions=2146958591", '_blank');
    });

    $(".topBar-Commands").click(function() {
        $('html, body').animate({
            scrollTop: $("#commands").offset().top
        }, 2000);
    });

    $(".topBar-About").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
