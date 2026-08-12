const cafeCat = document.getElementById('cafe-cat');
const title = document.getElementById('letter-title');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const catImg = document.getElementById('letter-cat');
const letter = document.getElementById('letter-container');
const buttons = document.getElementById('final-buttons');
const finalText = document.getElementById('final-text');
const fullEnvelope = document.getElementById('cafe-container');
const startButton = document.querySelector('.start-btn');
const matchaLatteBtn = document.getElementById('matcha-latte');
const finalRecipt = document.getElementById('recipt-container');
const sakuraBtn = document.getElementById('sakura-matcha');
const matchaGif = document.getElementById('matcha-sip');
const sakuraGif = document.getElementById('sakura-sip');
const strawGif = document.getElementById('straw-sip')
const strawBtn = document.getElementById('strawberry-matcha');
const bobaBtn = document.getElementById('matcha-boba');
const bobaGif = document.getElementById('boba-sip');
const allMatchaGifs= document.getElementsByClassName('gif-sip');

startButton.addEventListener('click', () => {
    fullEnvelope.style.display = 'none';
    letter.style.display = 'flex';

    setTimeout(() => {

        document.querySelector(".letter-window").classList.add('open');

    }, 50);

});



matchaLatteBtn.addEventListener('click', () => {
    letter.style.display = 'none';
    finalRecipt.style.display='flex';
    matchaGif.style.display='block';

});



sakuraBtn.addEventListener('click', () => {
    letter.style.display = 'none';
    finalRecipt.style.display='flex';
    sakuraGif.style.display='block';


});

bobaBtn.addEventListener('click', () => {
    letter.style.display = 'none';
    finalRecipt.style.display='flex';
    bobaGif.style.display='block';
});


strawBtn.addEventListener('click', () => {
    letter.style.display = 'none';
    finalRecipt.style.display='flex';
    strawGif.style.display='block';

});

noBtn.addEventListener('mouseenter', () => {

   const distance = Math.floor(Math.random() * 100) + 50;
    
    // Generate a random angle in radians (0 to 360 degrees)
    const angle = Math.random() * 2 * Math.PI;
    
    // Calculate X and Y coordinates based on the angle
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    // Apply the translation to move it away
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

});

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    for (let i = 0; i < allMatchaGifs.length; i++) {
    allMatchaGifs[i].style.display = 'none';
}

    catImg.style.display='block';

    document.querySelector(".recipt-window").classList.add("final");

    buttons.style.display = "none";



});
