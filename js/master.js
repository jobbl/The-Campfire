
var pics = [
  "Images/Szenario_Fantasy.jpg", "Images/Szenario_scifi.jpg"
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var i = 1;
btn.addEventListener("click", function(){
  img.src = pics[i];
  if (i==1) {
    i--;

  } else {i++;

  }

});
