let panel = document.querySelector(".panel")
let panel_li = panel.querySelectorAll("li")
let btns = document.querySelectorAll(".btns li")
let ring = document.querySelector("#ring")

btns.forEach((el, index)=>{
    el.addEventListener("click", e=>{
        e.preventDefault();

        for(let el of btns)el.classList.remove("on");
        btns[index].classList.add("on")

        panel.style.marginLeft = "-100" * index + "%";
        panel.style.transition = "0.5s"
    })
})