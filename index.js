import {catsData} from "/data.js"

const emotionRadios = document.getElementById('emotion-radios')
const getImage = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')


emotionRadios.addEventListener('change', highlightCheckedOption)

memeModalCloseBtn.addEventListener('click', function(){
    memeModal.style.display = 'none'
})

getImage.addEventListener("click", renderCat)

function highlightCheckedOption(e){
    const radioClasses = document.getElementsByClassName('radio')
    
    for (let radio of radioClasses){
        radio.classList.remove('highlight')
    }

    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML =  `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
    memeModal.style.display = 'flex'
}

function getSingleCatObject(){    
    const catsArray = getMatchingCatsArray()
    
    if (catsArray.length === 1){
        return catsArray[0]
    }
    else {
        return catsArray[Math.floor(Math.random() * catsArray.length)]
    }
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

