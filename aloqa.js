const socialLinks = document.querySelectorAll(".social-link");

socialLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const platform = link.getAttribute("data-platform");
    alert(platform + "  Profilga o'tilmoqda...");
  });
});