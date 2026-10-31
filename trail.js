
const panels=document.querySelectorAll(".panel")

panels.forEach((panel)=>{
    panel.addEventListener("mouseenter" ,()=>{
        removeActiveClasses();
        panel.classList.add("active")
    })
})

function removeActiveClasses(){
    panels.forEach((panel1)=>{
        panel1.classList.remove("active")
    })
}


