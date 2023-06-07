
    // Add event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get all menu items
    const menuItems = document.querySelectorAll(".menu li");
  
    // Add event listener to each menu item
    menuItems.forEach(function(item) {
      item.addEventListener("click", function() {
        // Remove 'active' class from all menu items
        menuItems.forEach(function(item) {
          item.classList.remove("active");
        });
  
        // Add 'active' class to the clicked menu item
        this.classList.add("active");
      });
    });
  });
