$(function() {
    $(".change-eaten").on("click", function(event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newburger");

        var newBurgerState = {
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function() {
                console.log("changed burger state to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#devoured").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
