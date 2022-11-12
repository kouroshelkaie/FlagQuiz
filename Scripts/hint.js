const hintContainer =   document.querySelector(".hint_container")
const hintButton =      document.querySelector(".logo")

// print iso data on hint section
const hint = (data,hint)=>{
    hintButton.addEventListener("click",(e)=>{
        hintContainer.innerHTML = data[hint].iso2
    })
}

