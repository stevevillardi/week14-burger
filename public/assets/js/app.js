// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
	$(".devour-burger").on("click", function(event) {
		const id = $(this).data("id");
		const burgerName = $(this)
			.prev()
			.text();
		let devoured = $(this).data("devoured");
		devoured === 0 ? (devoured = 1) : (devoured = 0);
		const updateBurger = {
			burgerName: burgerName,
			devoured: devoured
		};

		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: updateBurger
		}).then(function() {
			console.log("changed devour state to", devoured);
			location.reload();
		});
	});

	$(".create-form").on("submit", function(event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		const newBurger = {
			burgerName: $("#burger")
				.val()
				.trim(),
			devoured: 0
		};

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function() {
			location.reload();
		});
	});
});
