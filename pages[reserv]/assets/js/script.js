
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);


  var audio = document.getElementById("audio");
  audio.play().catch(error => {
      console.log("Autoplay was prevented:", error);
  });
};