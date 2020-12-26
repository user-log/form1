$(function() {


    $("#my-text").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    $("#complite").click(function() {
        alert("Sorry, you did not post the message in 5 comments to complete the terms of the competition. Please post the message and come back again");

    });


});