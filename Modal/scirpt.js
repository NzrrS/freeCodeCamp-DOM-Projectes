let modalBtn = document.getElementById("modalBtn")

let modalContainer = document.getElementById("modalContainer")

let closeBtn = document.getElementById("closeBtn")

modalBtn.onclick = function(){
    modalContainer.style.display = "block"
}

closeBtn.onclick = function(){
    modalContainer.style.display = "none"
}

document.addEventListener("click", (e)=>{
    if(e.target === modalContainer){
        modalContainer.style.display = "none"
    }
})

