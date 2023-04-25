let panel = document.querySelector(".panel")
let panel_li = panel.querySelectorAll("li")
let btns = document.querySelectorAll(".btns li")


// 유사배열로 li를 모두 바인딩해서 반환한값이 btns
btns.forEach(function(el, index){
    el.addEventListener("click", function(e){
        e.preventDefault();
        //모든 버튼을 반복을 돌면서 비활성화 시킨뒤
        for(let el of btns){el.classList.remove("on")}
        //클릭한 순번의 버튼만 활성화를 시킨다
        btns[index].classList.add("on")

        panel.style.marginLeft = "-100" * index + "%";
        
    })
})

// btns.addEventListener("click",function(){
// let inOn = btns.classList.contains("on")
// let go = (inOn) ? btns.classList.remove("on") : btns.classList.add("on")
// }) 