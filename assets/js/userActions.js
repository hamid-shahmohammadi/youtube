function subscribe(userTo, userFrom, button) {
    
    if(userTo == userFrom) {
        alert("You can't subscribe to yourself");
        return;
    }

    $.post("ajax/subscribe.php", { userTo: userTo, userFrom: userFrom })
    .done(function(count) {
        if(count !=null){
            $(button).toggleClass("subscribe unsubscribe");
            var bottunText=$(button).hasClass("subscribe") ? "SUBSCRIBE" : "SUBSCRIBED";
            $(button).text(bottunText + " "+ count);
        }else {
            alert("Something went wrong");
        }
    });
}