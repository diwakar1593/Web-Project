var words = ['Absence','Approval','Amount','Borrow','Ban','Banter','Cars','Care','Cease','Dialogue'];
var meaning = ['The lack or unavailability of something or someone.','Having a positive opinion of something or someone.','A mass or a collection of something','To take something with the intention of returning it after a period of time.','An act prohibited by social pressure or law.','Conversation that is teasing and playful.','Four-wheeled vehicles used for traveling.','extra responsibility and attention.','to eventually stop existing. ','A conversation between two or more people.']

var word = [];
var lives = 6;
var ansWord = [];
var imglevel = 1;

var textbox = document.getElementById("textbox");
var image = document.getElementById('image');
var keywords = document.getElementById("words_char");
var hint = document.getElementById('hint');
var restart = document.documentElement.querySelector('#restart');
// var real_word = document.documentElement.querySelector('#realword');


function randomWord() {
    var random = Math.floor(Math.random() * words.length);
    word = words[random].toLowerCase();
    hint.innerText = 'Hint : '+meaning[random];
}

function blanks(word) {
    for (var i = 0; i<word.length; i++){
        textbox.innerHTML += '<span class="word">_</span>';
    }
}

function checkLetter(letter) {
    var index = [];
    // console.log(array);
    for (var i = 0; i<word.length; i++){
        if (word[i] === letter) {
        // console.log("present");
        ansWord.push(letter);
        index.push(i);
        }
    }
    return index;
}

function keyboard() {
    var arr = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < arr.length; i++) {
        keywords.innerHTML += `<button class="btn">${arr[i]}</button`;
    }
}

function livesUpdate() {
    lives--;
    document.getElementById('lives').innerText = lives;
    if (lives === 0){
        textbox.innerHTML = 'Game Over!';
        buttons.forEach(button => {
            button.classList.add('disabled');
        });
        image.src="Assets/hangman_img/lost.png";
        restart.classList.toggle("hidden");
        hint.innerText = "Your Answer is : "+word ;
    }
}

function imageUpdate() {
    image.src="Assets/hangman_img/"+imglevel+".png";
    imglevel++;
}

randomWord();
keyboard();
blanks(word);

var wordIndex = document.querySelectorAll(".word");
var buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click",() => {
        button.classList.add('disabled');
        var letter = button.innerText;
        if (word.includes(letter)){
            var index = checkLetter(letter);
            index.forEach(i => {
                wordIndex[i].innerText = letter;
            });
        } else {
            imageUpdate();
            livesUpdate();
        }
        
        if (word.length === ansWord.length) {
            textbox.innerHTML = 'Game Won!';
            buttons.forEach(button => {
                button.classList.add('disabled');
            });
            image.src="Assets/hangman_img/won.png";
            restart.classList.toggle("hidden");
        }
    });
});


restart.addEventListener("click" , ()=>{
    window.location.reload();
})