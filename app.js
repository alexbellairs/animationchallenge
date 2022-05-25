const web = document.getElementById("web1");
const fb = document.getElementById("fb1");
const twit = document.getElementById("twit1");
const insta = document.getElementById("insta1");

let index = 0;

web.addEventListener("click", () => {
  if (web.style.backgroundColor == "lawngreen") {
    web.style.backgroundColor = "green";
    web.style.color = "white";
  } else {
    web.style.backgroundColor = "lawngreen";
    web.style.color = "black";
  }
});
fb.addEventListener("click", () => {
  if (fb.style.backgroundColor == "yellow") {
    fb.style.backgroundColor = "goldenrod";
    fb.style.color = "white";
  } else {
    fb.style.backgroundColor = "yellow";
    fb.style.color = "black";
  }
});
twit.addEventListener("click", () => {
  if (twit.style.backgroundColor == "pink") {
    twit.style.backgroundColor = "plum";
    twit.style.color = "white";
  } else {
    twit.style.backgroundColor = "pink";
    twit.style.color = "black";
  }
});
insta.addEventListener("click", () => {
  if (insta.style.backgroundColor == "red") {
    insta.style.backgroundColor = "maroon";
    insta.style.color = "white";
  } else {
    insta.style.backgroundColor = "red";
    insta.style.color = "black";
  }
});
