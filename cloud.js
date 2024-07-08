window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY + window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const clouds = document.querySelectorAll(".cloud");

  const triggerPoint = documentHeight * 0.8; // 80% of the page height

  clouds.forEach((cloud) => {
    if (scrollPosition > triggerPoint) {
      const opacity = Math.min(
        1,
        (scrollPosition - triggerPoint) / (documentHeight - triggerPoint)
      );
      cloud.style.opacity = opacity;
    } else {
      cloud.style.opacity = 0;
    }
  });
});
