// script.js
document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.querySelector(".profile-pic");
  
    profilePic.addEventListener("mouseover", () => {
      profilePic.style.transition = "transform 0.5s";
      profilePic.style.transform = "scale(1.3)";
    });
  
    profilePic.addEventListener("mouseout", () => {
      profilePic.style.transform = "scale(1)";
    });
  });
  