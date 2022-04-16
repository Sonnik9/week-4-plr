
const data = [
    
       {
        url:'./муз/mylene_farmer_milen_farmer_-_xxl_\(z2.fm\).mp3',
        autor: 'Mylene_Farmer',
        title: 'XXL',
        poster: './имж/xxl.jpg'
   
       },

       {
        url:'./муз/gayazov_brother_-_sinij_inej_\(z2.fm\).mp3',
        autor: 'Gayazov_brother',
        title: 'Синий иней',
        poster: './имж/брозерс.jpg'
   
       },
   
       {
        url:'./муз/lady_gaga_ledi_gaga_-_alejandro_\(z2.fm\).mp3',
        autor: 'Ledi Gaga',
        title: 'Alejandro',
        poster: './имж/алехандро.jpg'
   
       },

       {
        url:'./муз/ledi_gaga_-_judas_\(z2.fm\).mp3',
        autor: 'Ledi Gaga',
        title: 'Judas',
        poster: './имж/джудас.jpg'
   
       },

       
       {
        url:'./муз/muzika_dlja_trenirovok_i_bega_-_dorozhka_08vip_bass_club_music_\(z2.fm\).mp3',
        autor: 'Неизвестен',
        title: 'Для трненировок',
        poster: './имж/для\ тренировок.jpg'
   
       },
       
       {
        url:'./муз/mylene_farmer_milen_farmer_-_appelle_mon_numero_\(z2.fm\).mp3',
        autor: 'Mylene_Farmer',
        title: 'Appelle_mon_numero',
        poster: './имж/апель\ мон\ нумеро.jpg'
   
       },
       
       {
        url:'./муз/mylene_farmer_milen_farmer_-_laisse_le_vent_emporter_tout_\(z2.fm\).mp3',
        autor: 'Mylene_Farmer',
        title: 'Laisse_le_vent_emporter_tout',
        poster: './имж/Laisse_le_vent_empo.jpg'
   
       },
       
       {
        url:'./муз/mylene_farmer_milen_farmer_-_lamour_nest_rien_\(z2.fm\).mp3',
        autor: 'Mylene_Farmer',
        title: 'Lamour_nest_rien',
        poster: './имж/Lamour_nest_rien.jpg'
   
       },

       {
        url:'./муз/rock_the_dub_muzika_dlja_trenirovok_i_bega_-_motivacija_dlja_sporta_\(z2.fm\).mp3',
        autor: 'Неизвестен',
        title: 'Для бега и тренировок',
        poster: './имж/для\ бега.jpg'
   
       },
 
];

let prev = document.querySelector('.prev');
let resett = document.querySelector('.reset');
let playy = document.querySelector('.play');
let stopp = document.querySelector('.stop');
let next = document.querySelector('.next');
let progresss = document.querySelector('.progress');
let progressVolum = document.querySelector('#volum');

let index = 0;
let z = 0;
let y = 0;
let d;
let c;
let k;
let t = 0;

prev.addEventListener('click', prevOn);
resett.addEventListener('click', resetOn);
playy.addEventListener('click', playOn);
stopp.addEventListener('click', pauseOn);
next.addEventListener('click', nextOn);
progresss.addEventListener('click', audioRew);
progressVolum.addEventListener('input', chengeVol)

// for playList stert 

let li1;
let i;
let x;
let green = '#9ee69e';
let grey = '#e0edfa';
let m = 0;

let column1 = document.querySelector('ul');
let openBar = document.querySelector('.btn');
let closeBar = document.querySelector('.btn-add');
let sideBar = document.querySelector('.sidebar');
let span1 = document.querySelector('.f-sp');
let span2 = document.querySelector('.s-sp');
let span3 = document.querySelector('.t-sp');
let posterItem = document.querySelector('.item');
let posterAutor = document.querySelector('.poster-autor');
let posterTitle = document.querySelector('.poster-title');

sideBar.addEventListener('click', eventBar)
openBar.addEventListener('click', open);
closeBar.addEventListener('click', closeeBar);

data.forEach((el, ind) =>  {

    li1 = document.createElement('li');
    li1.classList.add('list');
    column1.append(li1);
    li1.innerHTML = data[ind].autor + '  ' + data[ind].title;
    if(ind==0 && z==0)
    li1.style.color = green;

});

let li2 = document.querySelectorAll('li');
posterItem.src = data[0].poster;
posterAutor.innerHTML = 'Trak' + 1 + ' ' + data[0].autor;
posterTitle.innerHTML = data[0].title;

function eventBar(e) {
   
    if(e.target.tagName == 'LI') {
       for (i = 0; i < data.length; i++) {
            
            if(e.target.textContent == data[i].autor + '  ' + data[i].title) {
               posterItem.src = data[i].poster;
               posterAutor.innerHTML = 'Trak' + (i+1) + ' ' + data[i].autor;
               posterTitle.innerHTML = data[i].title;
               audio.src = data[i].url;
               t=1;
               setTimeout(
                  () => {
                    audio .play();
                    k=1;
         
                  },
                  100
                 );
               index = i;
               playy.style.display = 'none';
               stopp.style.display = 'inline';

               if(i !== 0) 
                   li2[0].style.color = grey; 
               else 
                   li2[0].style.color = green;

                if(m == index) 
                   li2[index].style.color = green;
                   
                else {
                   li2[index].style.color = green;
                   z = 1;
                   li2[m].style.color = grey;
                }             
            }

            else {
               li2[i].style.color = grey;            
               z = 1;
            }
        }
    
    }

}

function enginBar() {
    sideBar.classList.toggle('active');
    span1.classList.toggle('active'); 
    span2.classList.toggle('active'); 
    span3.classList.toggle('active'); 
}

function open() {
    enginBar()
}

function closeeBar() {
    enginBar()   
}

// for playList end

let audio = new Audio();
audio.src = data[index].url;
audio.ontimeupdate = progressUpdate;


function editionPrevNext() {
    audio.src = data[index].url;
    progresss.value = 0;   
    t=1;
    setTimeout(
        () => {
          audio .play();
          k=1;
         
        },
          100
      );
    playy.style.display = 'none';
    stopp.style.display = 'inline';      
    m = index;    
    posterItem.src = data[index].poster;
    posterAutor.innerHTML = 'Trak' + (index+1) + ' ' + data[index].autor;
    posterTitle.innerHTML = data[index].title;        
   } 


function prevOn() {
    if(index == 0) {
      index = data.length;
    }
     index--;
     editionPrevNext()
    
          for (x = 0; x < data.length; x++) {
              if(x == index && x !== data.length-1) {
                  li2[x].style.color = green;
                  li2[x+1].style.color = grey;
                  z=1;                
              }
              else if(x == index && x == data.length-1) {
                  li2[x].style.color = green;
                  li2[0].style.color = grey;
                  z=1;                
              }           
          }               
  }

function playOn() {       
     audio.play();
     playy.style.display = 'none';
     stopp.style.display = 'inline';
 }
  
function resetOn() {
     t=1;
     audio.src = data[index].url;
     progresss.value = 0;
     setTimeout(
      () => {
        audio.play();
        audio.pause();
        k=1;
       
      },
        100
    );
     playy.style.display = 'inline';
     stopp.style.display = 'none';
 }
 
function pauseOn() {
    audio.pause();
    playy.style.display = 'inline';
    stopp.style.display = 'none';
 }
 
function nextOn() {
  
   if(index == data.length-1) {
       index= -1;
   }     
      index++;
      editionPrevNext();
    
    for (x = 0; x < data.length; x++) {
       
        if(x == index && x!==0) {
            li2[x].style.color = green;
            li2[x-1].style.color = grey;
            z=1;
        }
        else if(x == index && x == 0) {
            li2[x].style.color = green;
            li2[data.length-1].style.color = grey;
            z=1;
        }
    }

}
 
function progressUpdate() {
   d = (audio.duration);
   c = (audio.currentTime);
 
   if(t==0) {
      progresss.value = (100*c)/d;
   }
   if(k==1) {
      progresss.value = (100*c)/d;
   }
   k=0;
   t=0;
  
   if(progresss.value == 100) {
      progresss.value = 0;
      if(index == data.length-1) {
         
          li2[data.length-1].style.color = grey;
          index= -1;
      } 
       index++;
       audio.src = data[index].url;     
       t=1
       setTimeout(
          () => {
            audio .play();
            k=1;
   
          },
          200
         );
           
       li2[index].style.color = green;
       posterItem.src = data[index].poster;
       posterAutor.innerHTML = 'Trak' + (index+1) + ' ' + data[index].autor;
       posterTitle.innerHTML = data[index].title;
         if(index!==0)
       li2[index-1].style.color = grey;
   }
 }

function audioRew(e) {
    let w = this.offsetWidth;
    let o = e.offsetX;
    this.value = 100*o/w;
    audio.pause();
    audio.currentTime = audio.duration*(o/w);
    audio.play();
    playy.style.display = 'none';
    stopp.style.display = 'inline';
 }
function chengeVol() {
    let v = this.value;
    audio.volume = v/100;
 }