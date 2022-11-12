const nextButton =      document.querySelector(".next_stage")
const itemsContainer =  document.querySelector(".item_container")
const hintLogo =        document.querySelector('.hint_container')
const stage_counter =   document.querySelector('.stage_counter')
const backDrop =        document.querySelector('.back_drop')
const modal =           document.querySelector('.modal_container')
const tryAgain =        document.querySelector('.try_again')

let counter = 0
let stageCounter = 1

fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
.then((Response)=>{
    Response.json().then((data)=>{
        // the first time that run functions and put data on dom after page reloaded
        fetchData(data.data)
        // stage counter
        nextButton.addEventListener("click",()=>{
            stageCounter += 1
            stage_counter.innerHTML = `${stageCounter}/10`
            // The condition to keep lower than 10 stage
            if(counter <= 8){
                itemsContainer.innerHTML = " "
                hintLogo.innerHTML = " "
                itemsContainer.style.pointerEvents = "auto"
                fetchData(data.data)
                // reload dom with clear and call "fetchdata" again
                counter += 1
            }else{
                // open modal after 10 stage
                backDrop.style.opacity = "1"
                backDrop.style.pointerEvents = "auto"
                modal.style.opacity = "1"
                modal.style.pointerEvents = "auto"
                // call reults function to calculate correct answers
                results()
            }
        })
        
    })
})

// modal try again button to reload page
tryAgain.addEventListener("click",()=>{
    location.reload()
})