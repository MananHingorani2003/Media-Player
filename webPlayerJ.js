const songs = document.querySelectorAll (".card, .card2");
const footSongName = document.querySelector (".foot-songName");
const footArtist = document.querySelector (".foot-artist");
const footImage = document.querySelector ("#img-contain-src");
const heart = document.querySelector (".like-btn i");


heart.addEventListener ("click", () => {
    heart.classList.toggle ("fa-regular");
    heart.classList.toggle ("fa-solid");
})


songs.forEach (song => {
    const playButton = song.querySelector (".play-btn");
    const icon = playButton.querySelector ("i");
    const audio = song.querySelector ("#audio");
    const songName = song.querySelector (".songName");
    const artist = song.querySelector (".artist");
    const image = song.querySelector ("#songPhoto")
    const imageSrc = image.src;

    let otherTwo = document.getElementById ("otherTwo");
    let imgContain = document.getElementById ("img-contain");



    playButton.addEventListener ("click", (e) => {
        
        if (otherTwo.style.opacity == 0) {
            otherTwo.style.opacity = 1;
        }
        if (imgContain.style.opacity == 0){
            imgContain.style.opacity = 1;
        }

        if (audio.paused) {
            footSongName.innerText = songName.innerText;
            footArtist.innerText = artist.innerText;
            footImage.src = imageSrc;
            icon.classList.toggle ("fa-play");
            icon.classList.toggle ("fa-pause");
            audio.play ();
           
        }
        else {
            icon.classList.toggle ("fa-play");
            icon.classList.toggle ("fa-pause");
            audio.pause();
        }
        
    })
})
const audios = document.querySelectorAll ("#audio");
const volume = document.querySelector(".volume-bar");
audios.forEach (manan => {
    manan.volume = volume.value/100;
    volume.addEventListener ("change", () => {
        manan.volume = volume.value/100;
    })
})
