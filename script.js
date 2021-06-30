'use strict'

// let buttonDo = document.getElementById('button-white');
//     buttonDo.onclick = function() {
//         if (buttonDo.style.backgroundColor == 'black') {
//             buttonDo.style.backgroundColor = 'white'
//             buttonDo.style.color = 'black';
//         } else {
//             buttonDo.style.backgroundColor = 'black';
//             buttonDo.style.color = 'white';
//         }
//     }

//     let flashingElem = document.getElementById('header__piano');
//     setInterval(() => flashingElem.hidden = !flashingElem.hidden, 3000);


//     let div = document.createElement('div');
//     div.className = "alert";
//     div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";

//     document.body.append(div);
//     setTimeout(() => div.remove(), 3000);



let keys = document.querySelectorAll('.key');
let nowplaying = document.querySelectorAll('.nowplaying');
let hints = document.querySelectorAll('.hints');

function playingNote(play){
    let music = document.querySelector(`audio[data-key='${play.keyCode}']`);
    let key = document.querySelector(`.key[data-key='${play.keyCode}']`);
    if (!key){
        return;
    }
    let NameNote = key.getAttribute('')
}