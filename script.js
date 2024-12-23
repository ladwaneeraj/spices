document.addEventListener("DOMContentLoaded", () => {
  console.log("Shree Spices and Snacks website loaded successfully!");
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelector(".slides");
  const slideImages = document.querySelectorAll(".slides img");
  let index = 0;

  function slide() {
    index++;
    if (index >= slideImages.length) index = 0; // Loop back to the first image
    slides.style.transform = `translateX(${-index * 100}%)`;
  }

  setInterval(slide, 3000); // Change image every 3 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  // Toggle menu visibility
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("show");
    }
  });
});

document.getElementById("send-whatsapp").addEventListener("click", function () {
  const product = document.getElementById("product").value.trim();
  const quantity = document.getElementById("quantity").value.trim();

  if (!product || !quantity) {
    alert("Please select a product and enter the quantity.");
    return;
  }

  if (isNaN(quantity) || parseInt(quantity) <= 0) {
    alert("Please enter a valid quantity greater than 0.");
    return;
  }

  // Replace with your WhatsApp number
  const phoneNumber = "6361800647";
  const message = `Hello, I would like to order:\n- Product: ${product}\n- Quantity: ${quantity}`;

  // Use encodeURIComponent to ensure special characters are handled correctly
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  // Debugging: Log the generated URL
  console.log("Generated WhatsApp URL:", whatsappURL);

  // Open WhatsApp URL
  window.open(whatsappURL, "_blank");
});
