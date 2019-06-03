$(function() {

  // Add a new burger.
  $(".create-form").on("submit", function(event) {
      event.preventDefault();

      var newBurger = {
          burger_name: $(".devour").val().trim(),
          devoured: 0
      };

      // Send the POST request.
      $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
      }).then(function() {
          console.log("Added new burger");
          // Reload to get the updated burger list.
          location.reload();
      });
  });

  $(".devour").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");
      var devouredState = {
          devoured: $(".burgerEaten").val().trim,
          devoured: 1
      };

      // PUT request.
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
      }).then(function() {
          console.log("Burger devoured");
          location.reload();
      });
  });

  $(".delete").on("click", function(event) {
      event.preventDefault();

      var id = $(this).data("id");

      // Send the DELETE request.
      $.ajax({
          type: "DELETE",
          url: "/api/burgers/" + id
      }).then(location.reload());
  });

})