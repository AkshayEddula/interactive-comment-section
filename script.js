like_increase = document.getElementsByClassName('like_Increase');
like_increase2 = document.getElementsByClassName('like_Increase2');
like_increase3 = document.getElementsByClassName('like_Increase3');
like_increase4 = document.getElementsByClassName('like_Increase4');
like_decrease = document.getElementsByClassName('like_Decrease');
like_decrease2 = document.getElementsByClassName('like_Decrease2');
like_decrease3 = document.getElementsByClassName('like_Decrease3');
like_decrease4 = document.getElementsByClassName('like_Decrease4');
intial_values = document.getElementById('likes1');
intial_values2 = document.getElementById('likes2');
intial_values3 = document.getElementById('likes3');
intial_values4 = document.getElementById('likes4');


like_increase[0].addEventListener('click', likeincrease);
like_increase2[0].addEventListener('click', likeincrease21);
like_increase3[0].addEventListener('click', likeincrease31);
like_increase4[0].addEventListener('click', likeincrease41);

like_decrease[0].addEventListener('click', likedecrease);
like_decrease2[0].addEventListener('click', likedecrease21);
like_decrease3[0].addEventListener('click', likedecrease31);
like_decrease4[0].addEventListener('click', likedecrease41);

function likeincrease () {
    if(intial_values.innerHTML == 12){
        intial_values.innerHTML = parseInt(intial_values.innerHTML) + 1;
    }
}

function likeincrease21 () {
    if(intial_values2.innerHTML == 5){
        intial_values2.innerHTML = parseInt(intial_values2.innerHTML) + 1;
    }
}

function likeincrease31 () {
    if(intial_values3.innerHTML == 4){
        intial_values3.innerHTML = parseInt(intial_values3.innerHTML) + 1;
    }
}

function likeincrease41 () {
    if(intial_values4.innerHTML == 2){
        intial_values4.innerHTML = parseInt(intial_values4.innerHTML) + 1;
    }
}

function likedecrease () {
    if(intial_values.innerHTML == 13){
        intial_values.innerHTML = parseInt(intial_values.innerHTML) - 1;
    }
}
function likedecrease21 () {
    if(intial_values2.innerHTML == 6){
        intial_values2.innerHTML = parseInt(intial_values2.innerHTML) - 1;
    }
}function likedecrease31 () {
    if(intial_values3.innerHTML == 5){
        intial_values3.innerHTML = parseInt(intial_values3.innerHTML) - 1;
    }
}function likedecrease41 () {
    if(intial_values4.innerHTML == 3){
        intial_values4.innerHTML = parseInt(intial_values4.innerHTML) - 1;
    }
}


// reply top button

replyBut = document.getElementsByClassName('replytop');
replyto = document.getElementsByClassName('replying');
addpara = document.getElementsByClassName('reply content')

replyBut[0].addEventListener('click',showReply);
function showReply(){
    replyto[0].classList.toggle('show')
}


replyBut2 = document.getElementsByClassName('replytop2');
replyto2 = document.getElementsByClassName('reply2');
addpara2 = document.getElementsByClassName('reply2 content')

replyBut[0].addEventListener('click',showReply);
function showReply(){
    replyto[0].classList.toggle('show')
}


// adding reply 
addreply = document.getElementById('replyed');
textreply = document.getElementsByClassName('replyto');
addpara = document.getElementsByClassName('content');
addContent = document.getElementById('non');

addreply.addEventListener('click',addReply);
function addReply() {
        if (addpara[0].innerHTML = null) {
            console.log("Write something")
        }
        else {
            addpara[0].innerHTML = textreply[0].value ;
            replyto[0].classList.remove('show')
            replyto[0].classList.add('hidden');
            addContent.style.display = "flex";
        }
}