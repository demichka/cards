const switchLang = () => {
  let eng = document.getElementById("eng");
  let swe = document.getElementById("swe");
  let switcher = document.getElementById("switcher");

  if (eng.style.display === "none") {
    swe.style.display = "none";
    eng.style.display = "block";
    switcher.innerHTML = "Svenska";
  } else if (swe.style.display === "none") {
    eng.style.display = "none";
    swe.style.display = "block";
    switcher.innerHTML = "English";
  }
}