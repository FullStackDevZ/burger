// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var newBurger = $(this).data("notEaten");

    var changedEatenState = {
      devoured: newBurger
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: changedEatenState
    }).then(
      function() {
        console.log("changed devoured to", newBurger);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var devoured = {
      burger_name: $("#name").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: devoured
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-cat").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted cat", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
