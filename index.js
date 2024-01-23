// for( i=0; i<document.querySelectorAll(".drum").length; i++)
// {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () //anonymous function
//     {
        
//         switch (this.innerHTML) {
//             case "w":
//                 var audio = new Audio("./sounds/tom-1.mp3")
//                 audio.play()               
//                 break;
//             case "a
                                                                                    //these loc from 1 to 45 are for our understanding, that how button tag of having class .drum will detect that mouse is clicked on it
//                 var audio = new Audio("./sounds/tom-2.mp3")
//                 audio.play()               
//                 break;
//             case "s":

//                 var audio = new Audio("./sounds/snare.mp3")
//                 audio.play()               
//                 break;
//             case "d":
            
//                 var audio = new Audio("./sounds/kick-bass.mp3")
//                 audio.play()               
//                 break;
//             case "j":
            
//                 var audio = new Audio("./sounds/tom-3.mp3")
//                 audio.play()               
//                 break;
//             case "k":
                
//                 var audio = new Audio("./sounds/tom-4.mp3")
//                 audio.play()               
//                 break;
//             case "l":
               
//                 var audio = new Audio("./sounds/crash.mp3")
//                 audio.play()               
//                 break;                             
//             default:
//                 break;
//         }
//     });
// }



for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function () //anonymous function
    {
        makesound(this.innerHTML)
        animate(this.innerHTML)
    });
}


document.addEventListener("keypress", function(event)
{
    makesound(event.key)
    animate(event.key)
})

function makesound(key)
{
        switch (key) {
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3")
                audio.play()               
                break;
            case "a":
             
                var audio = new Audio("./sounds/tom-2.mp3")
                audio.play()               
                break;
            case "s":

                var audio = new Audio("./sounds/snare.mp3")
                audio.play()               
                break;
            case "d":
            
                var audio = new Audio("./sounds/kick-bass.mp3")
                audio.play()               
                break;
            case "j":
            
                var audio = new Audio("./sounds/tom-3.mp3")
                audio.play()               
                break;
            case "k":
                
                var audio = new Audio("./sounds/tom-4.mp3")
                audio.play()               
                break;
            case "l":
               
                var audio = new Audio("./sounds/crash.mp3")
                audio.play()               
                break;                             
            default:
                break;
        }
}

function animate(key)
{
    document.querySelector("."+key).classList.add("pressed")

    setTimeout(function (){ document.querySelector("."+key).classList.remove("pressed") }, 100 )                //remove anmation after 100ms
}





