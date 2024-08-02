
// const pressedkey =document.querySelector(".pressed-key-name");
// const pressedKeyNumber =document.querySelector(".pressed-key-number");


// pressedKeyNumber.style.display = "none";
// window.addEventListener("keydown",(e)=>{
//     pressedKeyNumber.style.display = "block";

//     pressedkey.innerHTML = `You Pressed <span style='color: #5bbd7a'>${e.key}</span>`;
//     pressedKeyNumber.innerHTML=`${e.keyCode}`;

// })


document.addEventListener("DOMContentLoaded", function() {

    const pressedKey = document.querySelector(".pressed-key-name");
    const pressedKeyNumber = document.querySelector(".pressed-key-number");
    const keyHistoryContainer = document.querySelector(".key-history");
    const keypressSound = document.getElementById("keypress-sound");
    let keyHistory = [];

    pressedKeyNumber.style.display = "none";
    keyHistoryContainer.style.display="none";
    
    window.addEventListener("keydown", (e) => {

        keypressSound.currentTime = 0;
        keypressSound.play();


        pressedKeyNumber.style.display = "block";
        keyHistoryContainer.style.display="block";



        let keyCombination = e.key;
        if (e.ctrlKey) keyCombination = `Ctrl + ${keyCombination}`;
        if (e.shiftKey) keyCombination = `Shift + ${keyCombination}`;
        if (e.altKey) keyCombination = `Alt + ${keyCombination}`;
        if (e.metaKey) keyCombination = `Meta + ${keyCombination}`;

        pressedKey.innerHTML = `You Pressed <span style='color: #5bbd7a'>${keyCombination}</span>`;
        pressedKeyNumber.innerHTML = `${e.keyCode}`;


        keyHistory.push(keyCombination);
        if (keyHistory.length > 10) {
            keyHistory.shift();
        }
        displayKeyHistory();
    });

    function displayKeyHistory() {
        keyHistoryContainer.innerHTML = `<span style='color:rgb(55, 43, 43); text-decoration: underline; '>Key History : </span> ${keyHistory.join(', ')}`;
    }
});
