const pianokeys = document.querySelectorAll(".piano-keys .key"); 
const volumeSlider = document.querySelector(".volume-slider input")
const keyCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("./src/tunes/a.wav")


const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play();


    const clicKedKey = document.querySelector(`[data-key="${key}"]`);
    clicKedKey.classList.add("active");
    setTimeout(()=>{
        clicKedKey.classList.remove("active");
    },150)
}

pianokeys.forEach((key)=> {
    key.addEventListener("click",()=> playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e)=>{
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume)


const showHideKeys = () =>{
    pianokeys.forEach(key => key.classList.toggle('hide'))
}
keyCheck.addEventListener("click", showHideKeys)
