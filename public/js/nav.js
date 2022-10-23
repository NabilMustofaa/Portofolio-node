function myFunction() {
    var x = document.querySelector(".nav-container");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
    var y = document.querySelector("nav");
    y.classList.add("nav-scrolled")
    var z = document.querySelector(".nav-contact");
    z.classList.remove("nav-contact")

    
  }