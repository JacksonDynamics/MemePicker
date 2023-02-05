import {catsData} from "/data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImage = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')


emotionRadios.addEventListener('change', highlightCheckedOption)

getImage.addEventListener("click", renderCat)

function highlightCheckedOption(e){
    const radioClasses = document.getElementsByClassName('radio')
    
    for (let radio of radioClasses){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray(){
    const selectedEmotion = 
          document.querySelector('input[type="radio"]:checked')

    if(selectedEmotion){
        const isGif = gifsOnlyOption.checked

        const matchingCatsArray = catsData.filter(function(cat){
            if(isGif) {
                return cat.emotionTags.includes(selectedEmotion.value) && cat.isGif
            }           
            return cat.emotionTags.includes(selectedEmotion.value)
        })
        return matchingCatsArray
    }
}

function getSingleCatObject(){
    
    const catsArray = getMatchingCatsArray()
    
    if (catsArray.length === 1){
        console.log(catsArray[0])
    }
    
}

function renderCat(){
    getSingleCatObject() // temporary 
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

