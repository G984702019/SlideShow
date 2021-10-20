//const mainElement = document.querySelector("div.main>img");
let count=1
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_";
let URL;
let thumbnailsElement = document.querySelector("div.thumbnails");
let mainElement=document.querySelector("div.main>img");
let nowPlaying=false;
let timer;


function left() {
  //thumbnailsElement.children[count-1].classList.remove('selected');
  if(count!=1){
    count-=1;
    thumbnailsElement.children[count].classList.remove('selected');
  }else{
    count=19;
    thumbnailsElement.children[0].classList.remove('selected');
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  if(count>9){
    URL=src + count + ".jpg";
  }else{
    URL=src+"0" + count + ".jpg";
  }
  mainElement.setAttribute('src', URL);
}


function right() {
  //thumbnailsElement.children[count-1].classList.remove('selected');
  if(count!=19){
    count+=1;
    thumbnailsElement.children[count-2].classList.remove('selected');
  }else{
    count=1;
    thumbnailsElement.children[18].classList.remove('selected');
  }
  thumbnailsElement.children[count-1].classList.add('selected');
  if(count>9){
    URL=src + count + ".jpg";
  }else{
    URL=src+"0" + count + ".jpg";
  }
  mainElement.setAttribute('src', URL);
}

function play(){
  if(!nowPlaying){
    nowPlaying=true;
      autoPlay();
  }
}

function autoPlay(){
  right();
  timer = setTimeout(function(){
    autoPlay();
  },1000);
}

function stop(){
  clearTimeout(timer);
  nowPlaying=false;
}

function reset(){
  stop();
  thumbnailsElement.children[count-1].classList.remove('selected');
  thumbnailsElement.children[0].classList.add('selected');
  URL="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg";
  mainElement.setAttribute('src', URL);
  count=1;
}
