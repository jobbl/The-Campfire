
let btn1 = document.getElementById('btn1');
let check1 = false;
let speed = 50;
let msg1 = "The serenity of the scene is outlandish.                   Soft blades of green grass are waving gently in the mild breeze on the sloping hillside, the faint choir of the countless leafs of the oaks and birches in the distant forest mingles with the sullen flapping of the banners behind me. \" A forest of men behind me and a forest of shadow in front\", I muse. \" Er? \", asks Robin on my left, on his black stallion, that he so very diplomaticaly christened \"Nightmare of the Saxons \". \" Its nothing, my dear Robin, its just my mind, that tends to get poetic in the moments before battle. It must be the knocking of the reaper that tunes its rhymes! \". \" The Reaper!!! \", the nearly 2 meter tall friend of mine laughes, \" Hell`a muse you got there, me friend. Kissed by the reaper. Let that hear them damned Picts over there! "
let currentAudio = null;
let audio = null
let paused = false;

btn1.addEventListener("click", function(){
continueStory("msg",msg1,"FlagsAndWind.mp3");
});


function continueStory(destination, message, audio){
  play(audio);
  printLetterByLetter(destination, message, speed);


};





function play(song) {
  audio = new Audio(song);
  audio.play();
};

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
};



document.getElementById('muteButton').addEventListener("click", function(){
  if (paused === false){
audio.pause();
paused = true;}
else{audio.play();
paused = false;}

});
