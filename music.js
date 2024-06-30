let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 150;
});

pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 150;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', ()=>{
    item.scrollLeft += 150;
});

pop_art_left.addEventListener('click', ()=>{
    item.scrollLeft -= 150;
});

const Music = new Audio('audio/1.mp3');
//Music.play();

const songs = [
    {
        id : 1,
        songname : `On My Way <br>
        <div class="subtitle">
          Alan Walker
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/11.png',

    },
    {
        id :2,
        songname : `Oo Antava Oo Oo Antava <br>
        <div class="subtitle">
          Indravathi Chauhan
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster :'img/12.png',
    },
    {
        id :3,
        songname :` Ramulo-Ramula <br>
        <div class="subtitle">
          Anurag Kulkarni
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/13.png',
    },
    {
        id :4,
        songname : `Monster song <br>
        <div class="subtitle">
          Ravi Basrur
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/14.png',
    },
    {
        id :5,
        songname: `Sanchari <br>
        <div class="subtitle">
           Anirudh Ravichander
         </div> <i class="bi bi-play-circle-fill" ></i>`,
         poster : 'img/15.png',
    },
    {
        id :6,
        songname : `Arabic Kuthu <br>
        <div class="subtitle">
          Jonita Gandhi
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/16.png',
    },
    {
        id :7,
        songname : `Bones<br>
        <div class="subtitle">
          Imagine Dragons
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/17.png',
    },
    {
        id :8,
        songname : `Sirivennela <br>
        <div class="subtitle">
          Anurag Kulkarni
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/18.png',
    },
    {
        id :9,
        songname : `Naatu Naatu <br>
        <div class="subtitle">
          Rahul Sipligunj
        </div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/19.png',
    },
    {
        id :10,
        songname : `Senorita <div class="subtitle">Shawn Mendes</div> <i class="bi bi-play-circle-fill" ></i>`,
        poster : 'img/20.png',
    },
    {
        id : 11,
        songname : `On My Way <br>
        <div class="subtitle">
          Alan Walker
        </div> `,
        poster : 'img/11.png',

    },
    {
        id :12,
        songname : `Oo Antava Oo Oo Antava <br>
        <div class="subtitle">
          Indravathi Chauhan
        </div> `,
        poster :'img/12.png',
    },
    {
        id :13,
        songname :` Ramulo-Ramula <br>
        <div class="subtitle">
          Anurag Kulkarni
        </div> `,
        poster : 'img/13.png',
    },
    {
        id :14,
        songname : `Monster song <br>
        <div class="subtitle">
          Ravi Basrur
        </div> `,
        poster : 'img/14.png',
    },
    {
        id :15,
        songname: `Sanchari <br>
        <div class="subtitle">
           Anirudh Ravichander
         </div> `,
         poster : 'img/15.png',
    },
    {
        id :16,
        songname : `Arabic Kuthu <br>
        <div class="subtitle">
          Jonita Gandhi
        </div> `,
        poster : 'img/16.png',
    },
    {
        id :17,
        songname : `Bones<br>
        <div class="subtitle">
          Imagine Dragons
        </div>`,
        poster : 'img/17.png',
    },
    {
        id :18,
        songname : `Sirivennela <br>
        <div class="subtitle">
          Anurag Kulkarni
        </div> `,
        poster : 'img/18.png',
    },
    {
        id :19,
        songname : `Naatu Naatu <br>
        <div class="subtitle">
          Rahul Sipligunj
        </div> `,
        poster : 'img/19.png',
    },
    {
        id :20,
        songname : `Senorita <div class="subtitle">Shawn Mendes</div> `,
        poster : 'img/20.png',
    },
    
];

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName("img")[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
});

let masterPlay = document.getElementById('masterPlay');

masterPlay.addEventListener('click', ()=>{
    if (Music.paused || Music.currentTime <= 0) {
        Music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        Music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

let index = 0;
let poster = document.getElementById('poster');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
       index = el.target.id;
       //console.log(index);
       Music.src = `audio/${index}.mp3`;
       poster.src = `img/${index}.png`;
       masterPlay.classList.remove('bi-play-fill');
       masterPlay.classList.add('bi-pause-fill');
       Music.play();

       let songTitles = songs.filter((els) =>{
        return els.id == index;
       });

       songTitles.forEach(elss =>{
           let {songname} = elss;

            title.innerHTML = songname;
        })
    })
});

let currentstart = document.getElementById('currentstart');
let currentend  = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

Music.addEventListener('timeupdate', ()=> {
    let music_curr = Music.currentTime;
    let music_dur = Music.duration;
    //console.log(music_curr);
    //console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    
    currentend.innerText = `${min1} : ${sec1} `;

    let min2  = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
   
    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }


    currentstart.innerText = `${min2} : ${sec2}`;


    let progressBar = parseInt((music_curr / music_dur)* 100);

    seek.value  = progressBar;
   // console.log(seek.vaule);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;

    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    Music.currentTime = seek.value *  Music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar');
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi bi-volume-up');
        vol_icon.classList.remove('bi bi-volume-down');
        vol_icon.classList.add('bi bi-volume-mute');

    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi bi-volume-up');
        vol_icon.classList.add('bi bi-volume-down');
        vol_icon.classList.remove('bi bi-volume-mute');

    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi bi-volume-up');
        vol_icon.classList.remove('bi bi-volume-down');
        vol_icon.classList.remove('bi bi-volume-mute');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    Music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1;

    if (index <1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    Music.src = `audio/${index}.mp3`;
    poster.src = `img/${index}.png`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    Music.play();

    let songTitles = songs.filter((els) =>{
     return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songname} = elss;

     title.innerHTML = songname;
    })
 
});

next.addEventListener('click', ()=>{
    index ++;

    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    Music.src = `audio/${index}.mp3`;
    poster.src = `img/${index}.png`;
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    Music.play();

    let songTitles = songs.filter((els) =>{
     return els.id == index;
    });

    songTitles.forEach(elss =>{
        let {songname} = elss;

     title.innerHTML = songname;
    })
});