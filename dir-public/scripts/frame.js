const Frame = document.getElementById('frame');

document.addEventListener('DOMContentLoaded', () =>{
    const btnnewlist = document.createElement('button');
    btnnewlist.textContent = "Criar nova Lista";
    btnnewlist.classList.add('new-liste-btn');

    Frame.appendChild(btnnewlist);
});