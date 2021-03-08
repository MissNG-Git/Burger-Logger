// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }
});

// CRUD!!!

// UPDATE
const changeDevourBtns = document.querySelectorAll(".change-devoured");

// Set up the event listener for the create button
if (changeDevourBtns) {
  changeDevourBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Grabs the id of the element that goes by the name, "id"
      const id = e.target.getAttribute("data-id");
      const newDevoured = e.target.getAttribute("data-newdevour");

      const newDevouredStatus = {
        devoured: newDevoured,
      };

      fetch(`/api/burgers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        // make sure to serialize the JSON body
        body: JSON.stringify(newDevouredStatus),
      }).then((response) => {
        // Check that the response is all good
        // Reload the page so the user can see the new quote
        if (response.ok) {
          console.log(`New devoured status: ${newDevoured}`);
          location.reload("/");
        } else {
          alert("ERROR!");
        }
      });
    });
  });
}

// CREATE
const createBurgerBtn = document.getElementById("create-form");

if (createBurgerBtn) {
  createBurgerBtn.addEventListener("submit", (e) => {
    e.preventDefault();

    // Grabs the value of the textarea that goes by the name, "quote"
    const newBurger = {
      name: document.getElementById("bu").value.trim(),
      devoured: document.getElementById("devoured").checked,
    };

    // Send POST request to create a new quote
    fetch("/api/burgers", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      // make sure to serialize the JSON body
      body: JSON.stringify(newBurger),
    }).then(() => {
      // Empty the form
      document.getElementById("bu").value = "";

      // Reload the page so the user can see the new quote
      console.log("New burger added!");
      location.reload();
    });
  });
}

// DELETE
// Set up the event listeners for each delete button
// Send the delete request
// Reload the page
