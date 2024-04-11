//variáveis//

//audios//
var audio= document.querySelector('.audio1');
var audioChain= document.querySelector('.audio2');
var audioSummer= document.querySelector('.audio3');

//outros//
var nomedoArtista= document.querySelector('.artista');
var nomedaMusica= document.querySelector('.name');
var imagemdeAlbum= document.querySelector('.album');






//FUNÇÕES://

//mudar botão play/pause//
function tocarMusica(){
    audio.play();
    document.querySelector('#pause').style.display = 'block';
    document.querySelector('.buttons').style.display= 'flex';
    document.querySelector('#play').style.display='none';
}



//pausar musica//
function pausarMusica(){
    audio.pause();
    document.querySelector('#pause').style.display= 'none';
    document.querySelector('#play').style.display= 'block';
}


const songs = [
    {ele: audio, audioName: 'audiowest'},
    {ele: audioChain, audioName: 'audiotheChain'},
    {ele: audioSummer, audioName: 'audiotimes'}
]


