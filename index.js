import {catsData} from "/data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImage = document.getElementById('get-image-btn')


emotionRadios.addEventListener('change', highlightCheckedOption)

function highlightCheckedOption(e){
    const radioClasses = document.getElementsByClassName('radio')
    
    for (let radio of radioClasses){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}


getImage.addEventListener("click", getMatchingCatsArray)

function getMatchingCatsArray(){
    const checkedRadio = document.querySelector("input[type='radio']:checked")
    console.log(checkedRadio.value)
}


function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats){
        for (let emotion of cat.emotionTags){
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        }
    }
    return emotionsArray
}


function renderEmotionsRadios(cats){
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
        <div class="radio">
            <label for="${emotion}">${emotion}</label>
            <input
                type="radio"
                id="${emotion}"
                value="${emotion}"
                name="choice-emotion"
            >
        </div>
        ` 
    }
    emotionRadios.innerHTML = radioItems
}

console.log(renderEmotionsRadios(catsData))

