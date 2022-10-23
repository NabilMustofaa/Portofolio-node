const header = document.querySelector("nav");
const sectionOne = document.querySelector(".main");

const sectionOneOptions = {
  rootMargin: "-100px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);



const contactButton = document.querySelector("#contact-button");
contactButton.addEventListener("click", function() {
  
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  Email.send({
    SecureToken : "81edc703-b3e3-435a-8581-d5e2082b23ea",
    To : 'nabillegg@gmail.com',
    From : email,
    Subject : "New message from " + name,
    Body : "Name: " + name + "<br/>Email: " + email + "<br/>Phone: " + phone + "<br/>Message: " + message
}).then(
  message => alert("Thanks for contacting me, I will get back to you shortly!")
);
});

