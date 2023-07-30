// const img = document.querySelector("#profile img")
const switchButton = document.querySelector("#switch")
const html = document.documentElement

switchButton.addEventListener("click", () => {
  // let htmlContainsLight = html.classList.contains('light');

  // htmlContainsLight :
  // img.setAttribute("src", "") ?
  // img.setAttribute("src", "")

  html.classList.toggle("light")
})
