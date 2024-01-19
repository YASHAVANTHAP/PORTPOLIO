let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  navbar.style.opacity = "1";
};
const sr = ScrollReveal({
  distance: "40px",
  duration: 2500,
  reset: true,
});

const btn = document.querySelector(".home-img img");
const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    console.log(now - prev, delay);

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};
btn.addEventListener(
  "mousemove" || "click",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imgDiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";
    var img = document.createElement("img");
    img.setAttribute("src", "free-instagram-like-icon-3507-thumb.png");
    div.appendChild(img);
    document.body.appendChild(div);
    gsap.to(img, {
      y: "0",
      rotate: "20",
    });
    gsap.to(img, {
      y: "100",
      delay: 0.6,
    });
    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 500)
);

sr.reveal(".logo", { delay: 200, origin: "left" });
sr.reveal(".navbar", { delay: 200, origin: "top" });
sr.reveal(".menu", { delay: 200, origin: "right" });
sr.reveal(".home-text span", { delay: 600, origin: "top" });
sr.reveal(".home-text h1", { delay: 600, origin: "right" });
sr.reveal(".home-text p", { delay: 750, origin: "left" });
sr.reveal(".menu-btn", { delay: 860, origin: "right" });
sr.reveal(".share", { delay: 950, origin: "bottom" });
sr.reveal(".home-img img", { delay: 1000, origin: "bottom" });
sr.reveal(".main", { delay: 600, origin: "left" });
sr.reveal(".home-text span", { delay: 600, origin: "left" });
