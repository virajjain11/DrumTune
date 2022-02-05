const keys = document.querySelectorAll(".key");

function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    // console.log(key);
    var check = play(audio);
    var style = styling(key);
    keys.forEach(key => {key.addEventListener('transitionend', removeTransform)
});
}


function play(audio){
    if(!audio){
        return ;
    }else
     audio.currentTime =0; //rewind to zero
    return audio.play();

}

function styling(key){
    if(key===null){
        return;
    }else return key.classList.add("playing");
   
}

function removeTransform(e){
    // console.log(e);

       if(e.propertyName!="transform"){
           return;
       }else{
             this.classList.remove("playing");
     
       }
}

window.addEventListener('keydown', playSound);



