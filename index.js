let numberOfButtons = document.querySelectorAll(".drum").length;
function keysound(character)
{
    let audio=new Audio;
    switch(character)
    {
        case "w": audio.src="./sounds/crash.mp3";
                    audio.play();
                    break;
        case "a": audio.src="./sounds/kick-bass.mp3";
                    audio.play();
                    break;
        case "s": audio.src="./sounds/snare.mp3";
                    audio.play();
                    break;
        case "d": audio.src="./sounds/tom-1.mp3";
                    audio.play();
                    break;
        case "j": audio.src="./sounds/tom-2.mp3";
                    audio.play();
                    break;
        case "k": audio.src="./sounds/tom-3.mp3";
                    audio.play();
                    break;
        case "l": audio.src="./sounds/tom-4.mp3";
                    audio.play();
                    break;
        default: console.log(char);
    }
}
for(let i=0;i<numberOfButtons;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        keysound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}
document.addEventListener("keydown", function(event) {
    keysound(event.key);
    buttonAnimation(event.key);
    });

function buttonAnimation(info)
{
    let classname="."+info;
    document.querySelector(classname).classList.add("pressed");
    setTimeout(function () {
           document.querySelector(classname).classList.add("pressed");}, 100); 
}

