const flagImage =               document.querySelector(".flag_image")
const itemContainer =           document.querySelector(".item_container")
const result =                  document.querySelector('.result')
let correctAnswerCounter = 0


const dom = (values)=>{

    // generate a random number to make flagImage and correnct answer to validate
    let correctAnswer = Math.round(Math.random() * 3)

    // put random values to dom
    values.map((item)=>{
        let li = document.createElement('li')
        li.innerHTML = `${item.name}`;
        itemContainer.append(li)
        li.classList.add("item")
    })

    // put flag image on dom
    flagImage.setAttribute("src",values[correctAnswer].flag)
    
    // get an array of li in dom
    const opItems = document.querySelectorAll(".item")
    
    // loop that array and validate each li to correct or wrong
    opItems.forEach((item,index)=>{
        item.addEventListener("click",()=>{
            if(index == correctAnswer) {
                item.style.color = "#fff"
                item.style.backgroundColor = "#60bf88"
                item.style.borderColor = "#60bf88"
                correctAnswerCounter += 1
            } else{
                item.style.color = "#fff"
                item.style.backgroundColor = "#ea8282"
                item.style.borderColor = "#ea8282"
                showCorrect()
            }

            // after choose the answer you cannot click anymore
            itemContainer.style.pointerEvents = "none"
        })
    })

    // show correct answer when you pick wrong
    const showCorrect = ()=>{
        opItems.forEach((item,index)=>{
            if(index == correctAnswer){
                item.style.borderColor = "#60bf88"
                item.style.backgroundColor = "#60bf88";
                item.style.color = "#fff"
            }
        })
    }
    // hint function get values and correct number to hint with iso
    hint(values,correctAnswer)
}
// show correct answers final count 
const results = ()=>{
    result.innerHTML = `${correctAnswerCounter}/10`
}