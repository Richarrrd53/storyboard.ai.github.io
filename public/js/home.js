const nextBtn = document.getElementById("nextBtn");
const inputText = document.getElementById("inputText");
const inputBG = document.getElementById("inputBG");
const inputContainer = document.getElementById("inputContainer");
const responseArea = document.getElementById("chatOutput");
const continueBtn = document.getElementById("continueBtn");
const historyBtn = document.getElementById("historyBtn");
const inputCloseBtn = document.getElementById("inputCloseBtn");
const BG = document.getElementById("BG");

let isStarted = false;

document.addEventListener('DOMContentLoaded', () => {
    BG.style.width = window.innerWidth + "px";
    BG.style.height = window.innerHeight + "px";
    document.body.style.width = window.innerWidth + "px";
    document.body.style.height = window.innerHeight + "px";

    const bgDot1 = document.createElement('div');
    bgDot1.classList.add("bgDots");
    bgDot1.id = "bgDot1";
    BG.appendChild(bgDot1);
    bgDot1.style.backgroundColor = "#c9b1e9";
    bgDot1.style.width = "500px"; 
    bgDot1.style.height = "500px";
    bgDot1.style.left = (window.innerWidth - 500) / 2 + "px";
    bgDot1.style.top = (window.innerHeight - 500) / 2 + "px";
    bgDot1.style.scale = '0';

    const bgDot2 = document.createElement('div');
    bgDot2.classList.add("bgDots");
    bgDot2.id = "bgDot2";
    BG.appendChild(bgDot2);
    bgDot2.style.backgroundColor = "#ee6055";
    bgDot2.style.width = "500px";
    bgDot2.style.height = "500px";
    bgDot2.style.left = (window.innerWidth - 500) / 2 + "px";
    bgDot2.style.top = (window.innerHeight - 500) / 2 + "px";
    bgDot2.style.scale = '0';
    
    const bgDot3 = document.createElement('div');
    bgDot3.classList.add("bgDots");
    bgDot3.id = "bgDot3";
    BG.appendChild(bgDot3);
    bgDot3.style.backgroundColor = "#fee440";
    bgDot3.style.width = "480px";
    bgDot3.style.height = "480px";
    bgDot3.style.left = (window.innerWidth - 480) / 2 + "px";
    bgDot3.style.top = (window.innerHeight - 480) / 2 + "px";
    bgDot3.style.scale = '0';

    const bgDot4 = document.createElement('div');
    bgDot4.classList.add("bgDots");
    bgDot4.id = "bgDot4";
    BG.appendChild(bgDot4);
    bgDot4.style.backgroundColor = "#ffa962";
    bgDot4.style.width = "360px";
    bgDot4.style.height = "360px";
    bgDot4.style.left = (window.innerWidth - 360) / 2 + "px";
    bgDot4.style.top = (window.innerHeight - 360) / 2 + "px";
    bgDot4.style.scale = '0';

    const bgDot5 = document.createElement('div');
    bgDot5.classList.add("bgDots");
    bgDot5.id = "bgDot5";
    BG.appendChild(bgDot5);
    bgDot5.style.backgroundColor = "#c9b1e9";
    bgDot5.style.width = "250px";
    bgDot5.style.height = "250px";
    bgDot5.style.left = (window.innerWidth - 250) / 2 + "px";
    bgDot5.style.top = (window.innerHeight - 250) / 2 + "px";
    bgDot5.style.scale = '0';

    const bgMask = document.createElement('div');
    bgMask.id = "bgMask";
    BG.appendChild(bgMask);
    bgMask.style.width = window.innerWidth + "px";
    bgMask.style.height = window.innerHeight + "px";
    continueBtn.style.transform = "scale(0)";
    setTimeout(() => {
        setBG();
    }, 1000);
});

function setBG(){
  const bgDot1 = document.getElementById("bgDot1");
  const bgDot2 = document.getElementById("bgDot2");
  const bgDot3 = document.getElementById("bgDot3");
  const bgDot4 = document.getElementById("bgDot4");
  const bgDot5 = document.getElementById("bgDot5");
  bgDot1.style.left = "600px";
  bgDot1.style.top = "-60px";
  bgDot1.style.scale = '1';

  bgDot2.style.left = "970px";
  bgDot2.style.top = "220px";
  bgDot2.style.scale = '1';

  bgDot3.style.left = "680px";
  bgDot3.style.top = "360px";
  bgDot3.style.scale = '1';

  bgDot4.style.left = "800px";
  bgDot4.style.top = "290px";
  bgDot4.style.scale = '1';

  bgDot5.style.left = "-120px";
  bgDot5.style.top = "800px";
  bgDot5.style.scale = '1';

  const title1 = document.getElementById("title1");
  setTimeout(() => {
    title1.style.scale = 2;
  }, 1000);
  setTimeout(() => {
    continueBtn.style.transform = "scale(1)";
  }, 2000);
}

continueBtn.addEventListener("mousedown", () => {
  if(isStarted == false){
    continueBtn.style.scale = "0.9";
    continueBtn.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
  }
});

continueBtn.addEventListener("mouseup", () => {
  if(isStarted == false){
    continueBtn.style.scale = "1";
    continueBtn.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
  }
});

const title1 = document.getElementById("title1");
const step1 = document.getElementById("step1");
const continueBtnHover = document.getElementById("continueBtnHover");

continueBtn.addEventListener("click", () => {
  continueBtn.style.scale = 1;
  if(isStarted == false){
    title1.style.transform = "translateY(-100px) scale(0.4)";
    title1.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    continueBtn.style.width = "1000px";
    continueBtn.style.height = "100px";
    continueBtn.style.backgroundColor ="rgba(233, 222, 248, 0.25)";
    continueBtn.style.border ="1px solid #fff";
    continueBtn.style.boxShadow = "0px 10px 24px 0px rgba(0, 0, 0, 0.18)";
    continueBtn.children[0] = "";
    continueBtn.disabled = true;
    inputText.style.display = "block";
    inputText.style.opacity = 1;
    inputText.style.zIndex = 3;
    step1.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    step1.style.scale = "1 1";
    inputBG.style.width = "800px";
    inputBG.style.height = "70px";
    inputBG.style.opacity = 1;
    inputBG.style.zIndex = 3;
    inputContainer.style.zIndex = 5;
    inputContainer.style.width = "1000px";
    inputContainer.style.height = "100px";
    historyBtn.style.display = "block";
    inputCloseBtn.style.display = "block";
    continueBtnHover.style.opacity = 0.5;
    isStarted = true;
  }
    
});

inputCloseBtn.addEventListener("click", () => {
  continueBtn.style.width = "280px";
  title1.style.transform = "translateY(0px) scale(1)";
  title1.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  continueBtn.style.height = "80px";
  continueBtn.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
  continueBtn.style.border ="0px solid #fff";
  continueBtn.style.boxShadow = "0px 0px 0px 0px rgba(0, 0, 0, 0.18)";
  continueBtn.children[0] = "Get started";
  continueBtn.disabled = false;
  inputText.style.opacity = 0;
  inputText.style.zIndex = 0;
  inputBG.style.width = "260px";
  inputBG.style.height = "60px";
  inputBG.style.opacity = 0;
  inputBG.style.zIndex = 0;
  step1.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  step1.style.scale = "1 0";
  inputContainer.style.zIndex = 5;
  inputContainer.style.width = "280px";
  inputContainer.style.height = "80px";
  historyBtn.style.display = "none";
  inputCloseBtn.style.display = "none";
  continueBtnHover.style.opacity = 1;
  setTimeout(() => {
    inputText.style.display = "none";
    inputContainer.style.zIndex = 0;
  }, 500);
  isStarted = false;
  });

const step2 = document.getElementById("step2");

const stylesContainer = document.getElementById("stylesContainer");

nextBtn.addEventListener('click', function(){
  continueBtn.style.transformOrigin = "center center";
    inputContainer.style.transformOrigin = "center center";
    inputBG.style.transformOrigin = "center center";
    inputText.style.transformOrigin = "center center";
  inputContainer.style.zIndex = 5;
  inputContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  inputContainer.style.scale = 0;
  continueBtn.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  continueBtn.style.scale = 0;
  setTimeout(() => {
    step1.style.transition = "all 1s cubic-bezier(.31,.01,.66,-0.59)";
    step1.style.transform = "translateX(-100px) rotate(-30deg)";
    step1.style.opacity = 0;
    step1.style.filter = "blur(50px)";
    step2.style.display = "flex";
  }, 300);
  setTimeout(() => {
    inputText.style.display = "none";
  }, 500);
  setTimeout(() => {
    step1.style.display = "none";
    step2.style.transition = "all 1s cubic-bezier(.33,1.53,.69,.99)";
    step2.style.transform = "translateX(0) rotate(0)";
    step2.style.opacity = 1;
    step2.style.filter = "blur(0px)";
  }, 1800);
  setTimeout(() => {
    stylesContainer.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    stylesContainer.style.scale = 1;
  }, 2000);
  

  // const generateBG = document.createElement("div");
  // generateBG.id = "generateBG";
  // setTimeout(() => {
  //   generateBG.style.backdropFilter = "blur(150px)";
  // }, 10);
  // document.body.appendChild(generateBG);
  // responseArea.innerHTML = "生成中請稍後...";
  // generateBG.appendChild(responseArea);
  // sendMessage();
});

const step2Cards = document.getElementsByClassName("cards");
let cardIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  cardIndexChange();
});

function cardIndexChange(){
  if(cardIndex == 0){
    step2Cards[5].id = "previouscard";
    step2Cards[cardIndex].id = "currentcard";
    step2Cards[cardIndex+1].id = "next1card";
    step2Cards[cardIndex+2].id = "next2card";
    step2Cards[cardIndex+3].id = "next3card";
    step2Cards[cardIndex+4].id = "next4card";
  }
  else{
    step2Cards[cardIndex-1].id = "previouscard";
    step2Cards[cardIndex].id = "currentcard";
    step2Cards[(cardIndex+1)%6].id = "next1card";
    step2Cards[(cardIndex+2)%6].id = "next2card";
    step2Cards[(cardIndex+3)%6].id = "next3card";
    step2Cards[(cardIndex+4)%6].id = "next4card";
  }
}

const preBtn = document.getElementById("preBtn");
const nextBtn2 = document.getElementById("nextBtn2");

nextBtn2.addEventListener("click", () => {
  cardIndex = (cardIndex + 1) % 6;
  cardIndexChange();
});

preBtn.addEventListener("click", () => {
  if(cardIndex - 1 >= 0){
    cardIndex -= 1;
  }
  else{
    cardIndex = 5;
  }
  cardIndexChange();
});

const backBtn2 = document.getElementById("backBtn2");
backBtn2.addEventListener("click", () => {
  stylesContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  stylesContainer.style.scale = 0;
  setTimeout(() => {
    step2.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
    step2.style.opacity = 0;
    step2.style.filter = "blur(50px)";
    step2.style.transform = "translateX(100px) rotate(30deg)";
    step1.style.display = "flex";
  }, 500);
  setTimeout(() => {
    inputText.style.display = "block";
  }, 1000);
  setTimeout(() => {
    step2.style.display = "none";
    step1.style.transition = "all 1s cubic-bezier(.33,1.53,.69,.99)";
    step1.style.transform = "translateX(0px) rotate(0deg)";
    step1.style.opacity = 1;
    step1.style.filter = "blur(0)";
    
  }, 1500);
  setTimeout(() => {
    continueBtn.style.transformOrigin = "center center";
    inputContainer.style.transformOrigin = "center center";
    inputBG.style.transformOrigin = "center center";
    inputText.style.transformOrigin = "center center";
    inputContainer.style.zIndex = 5;
    inputContainer.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    inputContainer.style.scale = 1;
    continueBtn.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    continueBtn.style.scale = 1;
    
  }, 2000);
});

inputText.addEventListener("input", () => {
  if(inputText.value != ""){
    inputText.style.width = "870px";
    inputBG.style.width = "970px";
  }
  else{
    inputText.style.width = "870px";
    inputBG.style.width = "800px";
    const nextBtnImg = document.getElementById
  }
  const lines = Math.max(0, inputText.value.split('\n').length - 1);
  if (lines != 0 && lines < 8){
    continueBtn.style.height = 100 + lines*32 + "px";
    continueBtn.style.marginTop = 400 + lines*32 + "px";
    inputContainer.style.height = 100 + lines*32 + "px";
    inputContainer.style.marginTop = 400 + lines*32 + "px";
    inputBG.style.height = 70 + lines*32 + "px";
    inputText.style.height = 40 + lines*32   + "px";
  }
  else if(lines >= 8){
    continueBtn.style.height = 100 + 7*32 + "px";
    continueBtn.style.marginTop = 400 + 7*32 + "px";
    inputContainer.style.height = 100 + 7*32 + "px";
    inputContainer.style.marginTop = 400 + 7*32 + "px";
    inputBG.style.height = 70 + 7*32 + "px";
    inputText.style.height = 40 + 7*32   + "px";
  }
  else{
    continueBtn.style.height = 100 + "px";
    continueBtn.style.marginTop = 400 + "px";
    inputContainer.style.height = 100 + "px";
    inputContainer.style.marginTop = 400 + "px";
    inputBG.style.height = 70 + "px";
    inputText.style.height = 40 + "px";
  }
});

const confirmBtn = document.getElementById("confirmBtn");
const step3 = document.getElementById("step3");
const ratioContainer = document.getElementById("ratioContainer");
confirmBtn.addEventListener("click", () => {
  stylesContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  stylesContainer.style.scale = 0;
  setTimeout(() => {
    step2.style.transition = "all 1s cubic-bezier(.31,.01,.66,-0.59)";
    step2.style.transform = "translateX(-100px) rotate(-30deg)";
    step2.style.opacity = 0;
    step2.style.filter = "blur(50px)";
    step3.style.display = "flex";
  }, 300);
  setTimeout(() => {
    step2.style.display = "none";
    step3.style.transition = "all 1s cubic-bezier(.33,1.53,.69,.99)";
    step3.style.transform = "translateX(0) rotate(0)";
    step3.style.opacity = 1;
    step3.style.filter = "blur(0px)";
  }, 1800);
  setTimeout(() => {
    ratioContainer.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    ratioContainer.style.scale = 1;
  }, 2000);
});

const backBtn3 = document.getElementById("backBtn3");
backBtn3.addEventListener("click", () => {
  ratioContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  ratioContainer.style.scale = 0;
  setTimeout(() => {
    step3.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
    step3.style.opacity = 0;
    step3.style.filter = "blur(50px)";
    step3.style.transform = "translateX(100px) rotate(30deg)";
    step2.style.display = "flex";
  }, 500);
  setTimeout(() => {
    step3.style.display = "none";
    step2.style.transition = "all 1s cubic-bezier(.33,1.53,.69,.99)";
    step2.style.transform = "translateX(0px) rotate(0deg)";
    step2.style.opacity = 1;
    step2.style.filter = "blur(0)";
    
  }, 1500);
  setTimeout(() => {
    stylesContainer.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    stylesContainer.style.scale = 1;
  }, 2000);
});

const preview = document.getElementById("preview");
const rotateBtn = document.getElementById("rotateBtn");
let rotation = 0;
rotateBtn.addEventListener("click", () => {
  rotation = (rotation + 90) % 180;
  preview.style.rotate = rotation + "deg";
});

const ratioOptions = document.getElementsByClassName("ratioOptions");
let ratioIndex = 0;
ratioOptions[0].addEventListener("click", () => { //3:2
  ratioIndex = 0;
  preview.style.paddingBottom = 300/3*2 + "px";
  ratioOptions[0].id = "selectedOption";
  ratioOptions[1].id = "";
  ratioOptions[2].id = "";
});

ratioOptions[1].addEventListener("click", () => { //1:1
  ratioIndex = 1;
  preview.style.paddingBottom = 300 + "px";
  ratioOptions[0].id = "";
  ratioOptions[1].id = "selectedOption";
  ratioOptions[2].id = "";
});

ratioOptions[2].addEventListener("click", () => { //16:9
  ratioIndex = 2;
  preview.style.paddingBottom = 300/16*9 + "px";
  ratioOptions[0].id = "";
  ratioOptions[1].id = "";
  ratioOptions[2].id = "selectedOption";
});

const confirmBtn2 = document.getElementById("confirmBtn2");
const confirmSection = document.getElementById("confirmContainer");
const confirmText1 = document.getElementById("confirmText1-1");
const confirmText2 = document.getElementById("confirmText2-1");
const confirmText3 = document.getElementById("confirmText3-1");
confirmBtn2.addEventListener("click", () => {
  confirmSection.style.display = "flex";
  ratioContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  ratioContainer.style.scale = 0;
  confirmText1.innerHTML = inputText.value;
  confirmText2.innerHTML = styles[cardIndex];
  confirmText3.innerHTML = ratios[ratioIndex];
  setTimeout(() => {
    step3.style.transition = "all 1s cubic-bezier(.31,.01,.66,-0.59)";
    step3.style.transform = "translateX(-100px) rotate(-30deg)";
    step3.style.opacity = 0;
    step3.style.filter = "blur(50px)";
  }, 300);
  setTimeout(() => {
    step3.style.display = "none";
    confirmSection.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    confirmSection.style.scale = 1;
  }, 1800);
  
});

const confirmGen = document.getElementById("confirmGen");
confirmGen.addEventListener("click", () => {
  confirmSection.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  confirmSection.style.scale = 0;
  const generateBG = document.createElement("div");
  const loadingBarBG = document.createElement("div");
  const loadingDot1 = document.createElement("div");
  const loadingDot2 = document.createElement("div");
  const loadingBar = document.createElement("div");
  const loadingValue = document.createElement("div");
  const loadingText = document.createElement("div");
  setTimeout(() => {
    stinger();
    generateBG.id = "generateBG";
    document.body.appendChild(generateBG);
    loadingBarBG.classList.add("loadingBarBG");
    loadingBarBG.id = "loadingBarBG";
    loadingDot1.classList.add("loadingDot");
    loadingDot2.classList.add("loadingDot");
    loadingBar.classList.add("loadingBar");
    loadingValue.classList.add("loadingValue");
    loadingValue.id = "loadingValue";
    loadingText.classList.add("loadingText");
    loadingText.id = "loadingText";
  }, 500);
  setTimeout(() => {
    generateBG.style.top = 0;

    const spinnerBG = document.createElement("div");
    spinnerBG.classList.add("spinnerBG");
    spinnerBG.id = "spinnerBG";
    generateBG.appendChild(spinnerBG);

    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinnerBG.appendChild(spinner);

    const spinner1 = document.createElement("div");
    spinner1.classList.add("spinner1");
    spinner.appendChild(spinner1);

    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.id = "loader";
    generateBG.appendChild(loader);
    generateBG.appendChild(loadingBarBG);
    loadingBarBG.appendChild(loadingDot1);
    loadingBarBG.appendChild(loadingBar);
    loadingBarBG.appendChild(loadingDot2);
    loadingBarBG.appendChild(loadingText);
    loadingBar.appendChild(loadingValue);

    const loadingTitle = document.createElement("p");
    loadingTitle.classList.add("loadingTitle");
    loadingTitle.id = "loadingTitle";
    loadingTitle.textContent = "分鏡搞生成中，請稍後... ( 1/2 )";
    spinnerBG.appendChild(loadingTitle);
    loadingValue.style.width = 0*500 + "px";
    for(let i = 0; i <= 0; i++){
      setTimeout(() => {
        
        loadingText.innerHTML = i + "%";
      }, 500);
    }

    generateBG.appendChild(responseArea);
    confirmSection.style.display = "none";
    sendMessage();
  }, 1000);

  setTimeout(() => {
    loadingBarBG.style.top = "840px";
  }, 2500);
});


const confirmCan = document.getElementById("confirmCan");
confirmCan.addEventListener("click", () => {
  confirmSection.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
  confirmSection.style.scale = 0;
  setTimeout(() => {
    step3.style.display = "flex";
  }, 300);
  setTimeout(() => {
    step3.style.transition = "all 1s cubic-bezier(.33,1.53,.69,.99)";
    step3.style.transform = "translateX(0) rotate(0)";
    step3.style.opacity = 1;
    step3.style.filter = "blur(0px)";
  }, 1800);
  setTimeout(() => {
    ratioContainer.style.transition = "all 0.5s cubic-bezier(.33,1.53,.69,.99)";
    ratioContainer.style.scale = 1;
    confirmSection.style.display = "none";
  }, 2000);
});

function stinger(){
  const stinger = document.createElement("div");
  const wave11 = document.createElement("img");
  const wave12 = document.createElement("img");
  const wave21 = document.createElement("img");
  const wave22 = document.createElement("img");
  const stingerDot1 = document.createElement("div");
  const stingerDot2 = document.createElement("div");
  const stingerLine1 = document.createElement("div");
  const stingerLine2 = document.createElement("div");
  const stingerLine3 = document.createElement("div");
  const stingerLine4 = document.createElement("div");
  const stingerLine5 = document.createElement("div");
  const stingerLine6 = document.createElement("div");
  const stingerLine7 = document.createElement("div");
  const stingerLine8 = document.createElement("div");
  const stingerLine9 = document.createElement("div");
  const stingerLine10 = document.createElement("div");
  const stingerLine11 = document.createElement("div");
  const stingerLine12 = document.createElement("div");
  const stingerLine13 = document.createElement("div");
  const stingerLine14 = document.createElement("div");
  const stingerLine15 = document.createElement("div");
  const stingerLine16 = document.createElement("div");
  const stingerLine17 = document.createElement("div");
  const stingerLine18 = document.createElement("div");
  const stingerLine19 = document.createElement("div");
  const stingerLine20 = document.createElement("div");

  wave11.src = "../icon/wave.svg";
  wave12.src = "../icon/wave.svg";
  wave21.src = "../icon/wave-2.svg";
  wave22.src = "../icon/wave-2.svg";

  stinger.classList.add("stinger");
  wave11.classList.add("wave1");
  wave12.classList.add("wave2");
  wave21.classList.add("wave1");
  wave22.classList.add("wave2");
  stingerDot1.classList.add("stinger-dot");
  stingerDot2.classList.add("stinger-dot");
  stingerLine1.classList.add("stinger-line");
  stingerLine2.classList.add("stinger-line");
  stingerLine3.classList.add("stinger-line");
  stingerLine4.classList.add("stinger-line");
  stingerLine5.classList.add("stinger-line");
  stingerLine6.classList.add("stinger-line");
  stingerLine7.classList.add("stinger-line");
  stingerLine8.classList.add("stinger-line");
  stingerLine9.classList.add("stinger-line");
  stingerLine10.classList.add("stinger-line");
  stingerLine11.classList.add("stinger-line");
  stingerLine12.classList.add("stinger-line");
  stingerLine13.classList.add("stinger-line");
  stingerLine14.classList.add("stinger-line");
  stingerLine15.classList.add("stinger-line");
  stingerLine16.classList.add("stinger-line");
  stingerLine17.classList.add("stinger-line");
  stingerLine18.classList.add("stinger-line");
  stingerLine19.classList.add("stinger-line");
  stingerLine20.classList.add("stinger-line");

  stinger.id = "stinger";
  wave11.id = "wave1-1";
  wave12.id = "wave1-2";
  wave21.id = "wave2-1";
  wave22.id = "wave2-2";
  stingerDot1.id = "stingerDot1";
  stingerDot2.id = "stingerDot2";
  stingerLine1.id = "stingerLine1";
  stingerLine2.id = "stingerLine2";
  stingerLine3.id = "stingerLine3";
  stingerLine4.id = "stingerLine4";
  stingerLine5.id = "stingerLine5";
  stingerLine6.id = "stingerLine6";
  stingerLine7.id = "stingerLine7";
  stingerLine8.id = "stingerLine8";
  stingerLine9.id = "stingerLine9";
  stingerLine10.id = "stingerLine10";
  stingerLine11.id = "stingerLine11";
  stingerLine12.id = "stingerLine12";
  stingerLine13.id = "stingerLine13";
  stingerLine14.id = "stingerLine14";
  stingerLine15.id = "stingerLine15";
  stingerLine16.id = "stingerLine16";
  stingerLine17.id = "stingerLine17";
  stingerLine18.id = "stingerLine18";
  stingerLine19.id = "stingerLine19";
  stingerLine20.id = "stingerLine20";

  document.body.appendChild(stinger);
  stinger.appendChild(wave21);
  stinger.appendChild(wave22);
  stinger.appendChild(wave11);
  stinger.appendChild(wave12);
  stinger.appendChild(stingerDot1);
  stinger.appendChild(stingerDot2);
  stinger.appendChild(stingerLine1);
  stinger.appendChild(stingerLine2);
  stinger.appendChild(stingerLine3);
  stinger.appendChild(stingerLine4);
  stinger.appendChild(stingerLine5);
  stinger.appendChild(stingerLine6);
  stinger.appendChild(stingerLine7);
  stinger.appendChild(stingerLine8);
  stinger.appendChild(stingerLine9);
  stinger.appendChild(stingerLine10);
  stinger.appendChild(stingerLine11);
  stinger.appendChild(stingerLine12);
  stinger.appendChild(stingerLine13);
  stinger.appendChild(stingerLine14);
  stinger.appendChild(stingerLine15);
  stinger.appendChild(stingerLine16);
  stinger.appendChild(stingerLine17);
  stinger.appendChild(stingerLine18);
  stinger.appendChild(stingerLine19);
  stinger.appendChild(stingerLine20);

  setTimeout(() => {
    stinger.remove();
  }, 3000);
}

// 定義基本風格
let styles = ["預設風格", "寫實風格", "電影風格", "卡通風格", "漫畫風格", "其他"];
// 風格對應的英文描述，更具體詳細，便於AI識別
const styleDescriptions = {
  "預設風格": "",
  "寫實風格": "photorealistic, hyperdetailed, natural lighting, realistic textures and materials, high fidelity, fine details, professional photography style",
  "電影風格": "cinematic, dramatic lighting, film grain, widescreen format, lens flare, depth of field, professional color grading, movie scene aesthetic",
  "卡通風格": "cartoon style, vibrant colors, simple shapes, clean lines, flat shading, exaggerated features, 2D animation look, bright and cheerful",
  "漫畫風格": "comic book style, strong black outlines, cel shading, dynamic composition, action lines, bold colors, comic panel layout, manga/anime aesthetic",
  "手繪風格": "hand-drawn, sketchy lines, visible brushstrokes, artistic, illustrative, traditional media look, painterly quality, imperfect linework, watercolor effect",
  // 其他可能的自定義風格預設
  "水彩風格": "watercolor style, soft edges, color bleeding, transparent layers, paper texture, fluid color transitions, delicate brushwork, artistic",
  "素描風格": "sketch style, pencil lines, crosshatching, grayscale, charcoal effect, hand-drawn look, artistic, sketchbook quality",
  "油畫風格": "oil painting style, textured brushstrokes, rich colors, impasto technique, canvas texture, classical painting look, traditional art",
  "像素風格": "pixel art, low resolution, blocky, 8-bit or 16-bit style, limited color palette, retro gaming aesthetic, sharp pixel edges",
  "霓虹風格": "neon style, glowing elements, dark backgrounds, vibrant colors, cyberpunk aesthetic, neon lights, urban nightlife, futuristic",
  "赛博朋克風格": "cyberpunk style, neon lights, high-tech, urban dystopia, futuristic technology, gritty atmosphere, rain-soaked streets, digital elements",
  "極簡風格": "minimalist style, clean lines, simple shapes, limited color palette, negative space, modern, uncluttered, elegant simplicity"
};

const cardInputValue = document.getElementById("cardInput").value;
if (cardInputValue.endsWith("風格")){
  styles[5] = cardInputValue;
}
else{
  styles[5] = cardInputValue + "風格";
}

// 如果是自定義風格但在預設說明中沒有，則添加一個通用描述
if (!styleDescriptions[styles[5]]) {
  styleDescriptions[styles[5]] = styles[5].replace("風格", "") + " style, distinctive aesthetic, unique visual approach, specialized artistic technique, characteristic visual elements";
}

// 風格文字描述，用於提示詞
let styleText = cardIndex == 0 ? "" : "，風格為：" + styles[cardIndex];
// 風格的詳細英文描述，用於提示詞增強
let styleDetailText = cardIndex == 0 ? "" : styleDescriptions[styles[cardIndex]];

const ratios = ["3:2(橫向)", "1:1", "16:9(橫向)", "2:3(縱向)", "1:1", "9:16(縱向)"];
let ratioText = rotation == 0 ? ratios[ratioIndex] : ratios[ratioIndex+3];

// 根據ratioIndex和rotation獲取實際的寬高比
function getAspectRatio() {
  const aspectRatios = ["3:2", "1:1", "16:9", "2:3", "1:1", "9:16"];
  return rotation == 0 ? aspectRatios[ratioIndex] : aspectRatios[ratioIndex+3];
}

async function sendMessage() {
  const userText = inputText.value;
  styleText = cardIndex == 0? "" : "，風格為：" + styles[cardIndex];
  styleDetailText = cardIndex == 0 ? "" : styleDescriptions[styles[cardIndex]];
  ratioText = rotation == 0 ? ratios[ratioIndex] : ratios[ratioIndex+3];
  
  // 添加風格的詳細說明，讓AI更清楚理解所需風格
  const styleInstruction = cardIndex == 0 ? "" : 
    "\n\n重要：所有圖像必須嚴格遵循「" + styles[cardIndex] + "」的視覺風格。這意味著：" + 
    "\n- 在英文提示詞中始終包含以下風格描述：" + styleDetailText + 
    "\n- 這些風格元素必須貫穿整個分鏡搞，確保視覺一致性";
  
  // 改進的提示詞，強調連貫性和一致性，並特別強調風格要求
  const question = "假設你是一個專業的影像工作者，今天你想要拍攝一段" + userText + "的影片，幫我整理文字分鏡搞，分鏡搞內容必須符合以下要求：\n" +
    "1. 故事必須具備連貫性\n" +
    "2. 可以稍微brainstrom一下後續的故事發展，但要具備連貫性\n" +
    "\n再來別忘記加上每一個分鏡畫面需要的鏡頭，如近景、遠景、仰角、俯角等等" +
    "，鏡頭語言需要符合以下要求：\n" +
    "1. 鏡頭運動須符合故事\n" +
    "2. 添加光影的描述，如面光、測光等等\n" +
    "\n接著依照每一個分鏡故事與鏡頭語言整理成生成圖片用的prompt(英文)，" + 
    "提示詞需符合以下要求：\n" +
    "1. 提示詞語必須大於150字"
    "2. 所有分鏡必須保持一致的視覺風格（色調、光線處理方式、色彩語言）\n" +
    "3. 同一個角色在不同分鏡中必須保持完全相同的外觀特徵（髮型、服裝、面部特徵、體型）\n" +
    "4. 場景轉換需要邏輯連貫，避免突兀的場景跳躍\n" +
    "5. 每個分鏡需標明與前後分鏡的關聯性\n" +
    "6. 所有圖像必須使用相同的尺寸比例：" + getAspectRatio() + "\n" +
    "每個prompt都需要互相呼應，使其單獨拿出來時不會偏離故事主軸" + styleText + "，比例為" + ratioText + 
    styleInstruction +
    "\n\n範例：\n第一幕：\n畫面：...\n鏡頭：...\n\n第二幕：\n畫面：...\n鏡頭：...\n\nPrompt：\n1. ...\n2. ...\n\n「畫面」、「鏡頭」等元素可以自行幫我補充\n\n"+
    "重要！！：請不要使用任何markdown格式，我只需要純文字";
  
  const loadingTitle = document.getElementById("loadingTitle");
  if (question) {
      try {
          const response = await fetch('/askGemini', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ question }),
          });
          const data = await response.json();
          if(data.image == ""){
            loadingTitle.textContent = "分鏡搞生成中，請稍後... ( 2/2 )";
            const loadingValue= document.getElementById("loadingValue");
            const loadingText= document.getElementById("loadingText");
            loadingValue.style.width = 0.25*500 + "px";
            for(let i = 0; i <= 25; i++){
              setTimeout(() => {
                loadingText.innerHTML = i + "%";
              }, 500);
            }
            generateTitle(data.response);
          }
        } catch (error) {
          console.error('Error:', error);
          loadingTitle.textContent = '發生錯誤，請稍後再試。';
          responseArea.style.textAlign = "center";
      }
  }
}

async function generatePrompt(x) {
  // 風格增強指令
  const styleEnhancement = cardIndex == 0 ? "" : 
    "\n8. 每個提示詞都必須包含下列風格描述詞（這是最高優先級要求）：" + styleDetailText;
  
  // 改進的提示詞生成指令，確保提示詞完整性，並強化風格維持
  const question = x + 
    "\n\n幫我將這些文字整理成只有prompt的部分，並優化各個prompt，且每個prompt必須符合以下要求：" + 
    "\n1. 包含詳細的場景描述（環境、光線、氛圍、時間）" + 
    "\n2. 清晰說明主體/人物的位置、表情、動作、服裝" + 
    "\n3. 指定攝影技術參數（焦距、景深、光圈、構圖）" + 
    "\n4. 每個prompt至少150字，確保足夠細節" + 
    "\n5. 加入專業術語如cinematic lighting, hyperrealistic detail等增強質感" +
    "\n6. 明確指定圖像比例為：" + getAspectRatio() +
    "\n7. 每個提示詞中都必須包含「ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS」" +
    "\n8. 每個提示詞中必須包含風格與比例" +
    styleEnhancement +
    "\n\n格式為：\n1. (Prompt...)\n2. (prompt...) ...，不需要「好的，這是一份根據您的描述整理的分鏡稿 prompt：」等等這些字，也不要有單獨的「the end」、「fade out」等結束提示詞，並加強再加強這些提示詞語" +
    "\n\n請確保每個提示詞保持視覺一致性，尤其是在以下方面：人物特徵、環境細節、光線處理、整體風格";
  
  const loadingTitle = document.getElementById("loadingTitle");
  const loadingValue = document.getElementById("loadingValue");
  const loadingText = document.getElementById("loadingText");
  if (question) {
    try {
      const response = await fetch('/askGemini', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      const responseLines = data.response.split('\n');
      generatedPrompts = []; // 清空數組，避免累積
      for(let i = 0; i < responseLines.length; i++){
        if(responseLines[i].includes(". ")) {
          generatedPrompts.push(responseLines[i].split(". ")[1]);
        }
      }
      loadingValue.style.width = 0.25*500 + (3/3)*(500*0.25) + "px";
      for(let i = 25 + Math.round((2/3)*25); i <= 25 + Math.round((3/3)*25); i++){
        setTimeout(() => {
          loadingText.innerHTML = i + "%";
        }, 500);
      }
      generateImg();
    } catch (error) {
      console.error('Error:', error);
      loadingTitle.textContent = '發生錯誤，請稍後再試。';
      responseArea.style.textAlign = "center";
    }
  }
}

let generatedImgs = [];
let generatedStoryTitles = [];
let generatedStoryCams = [];
let generatedPrompts = [];

let successCount = 0;
let failureCount = 0;

async function generateTitle(x) {
  const question = x + "\n\n幫我將這些文字整理成只有畫面的部分，範例為：\n1. (畫面描述...)\n2. (畫面描述...) ...，不需要「好的，這是一份根據您的描述整理的分鏡稿：」也不要「畫面：」等等這些字，也不要有單獨的「the end」、「fade out」等結束提示詞";
  const loadingTitle = document.getElementById("loadingTitle");
  const loadingValue = document.getElementById("loadingValue");
  const loadingText = document.getElementById("loadingText");
  if (question) {
    try {
      const response = await fetch('/askGemini', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      const responseLines = data.response.split('\n');
      for(let i = 0; i < responseLines.length; i++){
        generatedStoryTitles.push(responseLines[i].split(". ")[1]);
      }
      loadingValue.style.width = 0.25*500 + (1/3)*(500*0.25) + "px";
      for(let i = 25; i <= 25 + Math.round((1/3)*25); i++){
        setTimeout(() => {
          loadingText.innerHTML = i + "%";
        }, 500);
      }
      generateCam(x);
    } catch (error) {
      console.error('Error:', error);
      loadingTitle.textContent = '發生錯誤，請稍後再試。';
      responseArea.style.textAlign = "center";
    }
  }
}

async function generateCam(x) {
  const question = x + "\n\n幫我將這些文字整理成只有鏡頭的部分，範例為：\n1. (鏡頭描述...)\n2. (鏡頭描述...) ...，不需要「好的，這是一份根據您的描述整理的分鏡稿：」也不要「鏡頭：」等等這些字，也不要有單獨的「the end」、「fade out」等結束提示詞";
  const loadingTitle = document.getElementById("loadingTitle");
  const loadingValue = document.getElementById("loadingValue");
  const loadingText = document.getElementById("loadingText");
  if (question) {
    try {
      const response = await fetch('/askGemini', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      const data = await response.json();
      const responseLines = data.response.split('\n');
      for(let i = 0; i < responseLines.length; i++){
        generatedStoryCams.push(responseLines[i].split(". ")[1]);
      }
      loadingValue.style.width = 0.25*500 + (2/3)*(500*0.25) + "px";
      for(let i = 25 + Math.round((1/3)*25); i <= 25 + Math.round((2/3)*25); i++){
        setTimeout(() => {
          loadingText.innerHTML = i + "%";
        }, 500);
      }
      generatePrompt(x);
    } catch (error) {
      console.error('Error:', error);
      loadingTitle.textContent = '發生錯誤，請稍後再試。';
      responseArea.style.textAlign = "center";
    }
  }
}


async function generateText(x) {
  const question = x + "\n\n總共應有 " + generatedPrompts.length + " 張圖片，其中 " + generatedImgs.length + " 張圖片生成成功， " + (generatedPrompts.length - generatedImgs.length) + " 張生成失敗。";
  const loadingTitle = document.getElementById("loadingTitle");
  if (question) {
    try {
        const response = await fetch('/geminiGenerate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });
        const data = await response.json();
        responseArea.innerHTML = data.response; // 顯示文字回應
        responseArea.style.textAlign = "left";
        const spinnerBG = document.getElementById("spinnerBG");
        spinnerBG.remove();
        const loader = document.getElementById("loader");
        loader.remove();
      } catch (error) {
        console.error('Error:', error);
        loadingTitle.textContent = '發生錯誤，請稍後再試。';
        responseArea.style.textAlign = "center";
    }
  }
}

function resetGenerateBG(){
  const generateBG = document.getElementById("generateBG");
  generateBG.style.opacity = 0;
  setTimeout(() => {
    generateBG.style.top = "100%";
  }, 1000);
  setTimeout(() => {
    generateBG.style.opacity = 1;
  }, 2000);
}

async function generateImg() {
  const loadingTitle = document.getElementById("loadingTitle");
  let count = 0;
  generatedImgs = []; // 清空數組，避免累積
  const loadingValue = document.getElementById("loadingValue");
  const loadingText = document.getElementById("loadingText");

  
  while(count < generatedPrompts.length){
    
    // 強化後的圖像生成提示詞
    const aspectRatio = getAspectRatio();
    
    // 風格增強部分
    let styleEnhancement = "";
    if (cardIndex != 0) {
      styleEnhancement = styleDetailText + ", " + styles[cardIndex] + ", ";
      // 針對特殊風格添加額外的強化詞
      if (styles[cardIndex].includes("手繪")) {
        styleEnhancement += "traditional drawing, sketch lines, hand-drawn aesthetic, artistic brushwork, ";
      } else if (styles[cardIndex].includes("水彩")) {
        styleEnhancement += "watercolor effect, paint bleed, traditional watercolor technique, ";
      } else if (styles[cardIndex].includes("素描")) {
        styleEnhancement += "pencil sketch, graphite drawing, charcoal effect, ";
      } else if (styles[cardIndex].includes("卡通")) {
        styleEnhancement += "cartoon styled, animated look, simplified shapes, ";
      } else if (styles[cardIndex].includes("漫畫")) {
        styleEnhancement += "comic book style, manga influence, bold lines, ";
      }
    }
    
    // 提示詞中添加風格描述並多次強調不要文字的需求
    const question = generatedPrompts[count] + 
      ", high quality, ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS, NO WRITING OF ANY KIND, " +
      "aspect ratio " + aspectRatio + ", " +
      styleEnhancement +
      "\n先幫我加強這個提示詞語，保留並增強指定的風格特徵，再透過加強後的提示詞語生成一個圖片" + 
      "\n\n需要符合以下劇情情境：「" + inputText.value + "」，但即使劇情有提及也不要出現與prompt無關的人物/主體" + 
      "\n\n圖像中嚴格禁止出現任何形式的文字、字母、數字或書寫符號" +
      "\n這是最高優先級要求：" +
      "\n1. 生成的圖像中不得包含任何文字元素" +
      "\n2. 必須保持" + aspectRatio + "的比例" +
      (cardIndex != 0 ? "\n3. 必須遵循" + styles[cardIndex] + "的風格特點" : "") +
      "\n\n在加強提示詞時，請特別強調以下風格要素：" + (styleDetailText || "高品質、真實感") +
      "\n如果我要求的是特殊藝術風格（如手繪、水彩等），請確保最終圖像明確體現該風格的特徵，而不是普通的照片風格";
    
    loadingTitle.textContent = `生成圖片中，請稍後... ( ${count+1}/${generatedPrompts.length} )`;
    loadingValue.style.width = 0.5*500 + (count/generatedPrompts.length)*250 + "px";
    for(let i = 50; i <= 50+Math.round(count/generatedPrompts.length*50); i++){
      setTimeout(() => {
        loadingText.innerHTML = i + "%";
        
      }, 500);
    }
    
    if (question) {
      try {
        const response = await fetch('/askGemini', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        });
        
        const data = await response.json();
        if (data.image != "") {
          generatedImgs.push(data.image);
          successCount++;
          if(count + 1 == generatedPrompts.length){
            const loadingBarBG = document.getElementById("loadingBarBG");
            loadingValue.style.width = 0.5*1000 + (count/generatedPrompts.length)*500 + "px";
            const resultBG = document.createElement("div");
            resultBG.id = "resultBG";
            for(let i = 50+Math.round(count/generatedPrompts.length*50); i <= 100; i++){
              setTimeout(() => {
                  loadingText.innerHTML = i + "%";
              }, 500);
            }
            setTimeout(() => {
              stinger();
            }, 500);
            setTimeout(() => {
              const generateBG = document.getElementById("generateBG");
              generateBG.style.top = "-100%";
              document.body.appendChild(resultBG);
              createFilmStrip();
              const spinnerBG = document.getElementById("spinnerBG");
              spinnerBG.remove();
              const loader = document.getElementById("loader");
              loader.remove();
              loadingBarBG.remove();
              
              function getCurrentRatio() {
                // 從全局變量獲取當前旋轉狀態和比例索引
                const rotationState = rotation || 0; // 假設存在全局變量 rotation
                const ratioIdx = ratioIndex || 0;    // 假設存在全局變量 ratioIndex
                
                // 根據您的變數結構定義比例映射
                const ratioMap = [
                  ['3-2', '1-1', '16-9'],       // 橫向比例
                  ['2-3', '1-1', '9-16']        // 縱向比例
                ];
                
                // 根據旋轉狀態確定使用哪組比例
                const ratioSet = rotationState === 0 ? ratioMap[0] : ratioMap[1];
                
                // 返回當前比例的字符串表示
                return ratioSet[ratioIdx] || '1-1'; // 默認為 1:1
              }
              const currentRatio = getCurrentRatio(); // 或從你實際的選擇中讀取
              let frameWidth = 0;
              if (currentRatio === "1-1") frameWidth = 300;
              else if (currentRatio === "3-2") frameWidth = 450;
              else if (currentRatio === "16-9") frameWidth = 533;
              else if (currentRatio === "2-3") frameWidth = 200;
              else if (currentRatio === "9-16") frameWidth = 168.75;
              let frameWidth2 = (frameWidth + 42) * generatedPrompts.length + 10 * (generatedPrompts.length - 1);
  
              const filmStrip = document.getElementById("filmStrip");
              filmStrip.style.setProperty('--film-strip-edge-width', frameWidth2 + 'px');
            }, 1500);
            setTimeout(() => {
              resetGenerateBG();
            }, 2500);
          }
        } else {
          // 如果圖像生成失敗，可以嘗試重試或記錄
          console.error('Image generation failed for prompt #' + (count + 1));
          failureCount++;
        }
      } catch (error) {
        console.error('Error:', error);
        failureCount++;
        loadingTitle.textContent = '發生錯誤，請稍後再試。';
        responseArea.style.textAlign = "center";
      }
      count++;
    }
  }
}

// 驗證圖像是否含有文字的輔助函數（如果有OCR API可用）
// 這只是一個概念示範，實際需要接入OCR服務
async function checkForText(imageUrl) {
  // 這裡應該接入OCR API
  // 如果檢測到文字，返回true
  // 如果沒有文字，返回false
  return false; // 假設實現
}

// 當所有圖片生成完成後調用此函數
function createFilmStrip() {
  document.getElementById("result").style.height = window.innerHeight + "px";
  document.getElementById("result").style.width = window.innerWidth + "px";
  responseArea.style.display = "none";
  const resultBG = document.getElementById("resultBG");
  resultBG.style.top = 0;
  resultBG.appendChild(document.getElementById("result"));
  document.getElementById('filmStripContainer').style.display = 'flex';
  const filmStrip = document.getElementById('filmStrip');
  filmStrip.innerHTML = ''; // 清空現有內容

  let filmStripWidth = 0;
  
  // 如果沒有生成的圖片，顯示提示信息
  if (generatedImgs.length === 0) {
    filmStrip.innerHTML = '<div class="no-frames">沒有生成的圖片</div>';
    return;
  }
  
  // 為每個生成的圖片創建一個膠捲幀
  for (let i = 0; i < generatedImgs.length; i++) {
    // 獲取當前比例
    const currentRatio = getCurrentRatio();
    
    const frameDiv = document.createElement('div');
    frameDiv.className = `film-frame ratio-${currentRatio}`;
    
    // 創建圖片容器
    const imageContainer = document.createElement('div');
    imageContainer.className = 'frame-image-container';
    
    // 幀編號
    const frameNumber = document.createElement('div');
    frameNumber.className = 'frame-number';
    frameNumber.textContent = `#${i + 1}`;
    imageContainer.appendChild(frameNumber);
    
    // 檢查圖片是否生成失敗
    const isImageFailed = !generatedImgs[i] || generatedImgs[i] === "";
    
    if (isImageFailed) {
      // 處理失敗的圖片
      const failedDiv = document.createElement('div');
      failedDiv.className = 'failed-image';
      
      // 添加錯誤提示
      const errorMsg = document.createElement('div');
      errorMsg.className = 'error-message';
      errorMsg.textContent = '圖片生成失敗';
      failedDiv.appendChild(errorMsg);
      
      // 添加直接可見的重新生成按鈕
      const regenerateBtn = document.createElement('button');
      regenerateBtn.className = 'frame-button regenerate';
      regenerateBtn.textContent = '重新生成';
      regenerateBtn.onclick = function() {
        regenerateFrame(i);
      };
      failedDiv.appendChild(regenerateBtn);
      
      imageContainer.appendChild(failedDiv);
    } else {
      // 正常圖片處理
      const img = document.createElement('img');
      img.src = generatedImgs[i];
      img.className = 'frame-image';
      img.alt = `分鏡 ${i + 1}`;
      imageContainer.appendChild(img);
      
      // 創建毛玻璃遮罩容器
      const overlayDiv = document.createElement('div');
      overlayDiv.className = 'frame-overlay';
      
      // 內容區域
      const contentDiv = document.createElement('div');
      contentDiv.className = 'frame-content';
      
      // 畫面標題
      const titleDiv = document.createElement('div');
      titleDiv.className = 'frame-title';
      titleDiv.textContent = generatedStoryTitles[i] || `畫面 ${i + 1}`;
      contentDiv.appendChild(titleDiv);
      
      // 鏡頭描述
      const descDiv = document.createElement('div');
      descDiv.className = 'frame-description';
      descDiv.textContent = generatedStoryCams[i] || `鏡頭 ${i + 1}`;
      contentDiv.appendChild(descDiv);
      
      // 按鈕區域
      const actionsDiv = document.createElement('div');
      actionsDiv.className = 'frame-actions';
      
      // 查看提示詞按鈕
      const viewPromptBtn = document.createElement('button');
      viewPromptBtn.className = 'frame-button';
      viewPromptBtn.textContent = '查看提示詞';
      viewPromptBtn.onclick = function() {
        showPrompt(i);
      };
      actionsDiv.appendChild(viewPromptBtn);
      
      // 重新生成按鈕
      const regenerateBtn = document.createElement('button');
      regenerateBtn.className = 'frame-button';
      regenerateBtn.textContent = '重新生成';
      regenerateBtn.onclick = function() {
        regenerateFrame(i);
      };
      actionsDiv.appendChild(regenerateBtn);
      
      // 刪除分鏡按鈕
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'frame-button';
      deleteBtn.textContent = '刪除分鏡';
      deleteBtn.onclick = function() {
        deleteFrame(i);
      };
      actionsDiv.appendChild(deleteBtn);
      
      contentDiv.appendChild(actionsDiv);
      overlayDiv.appendChild(contentDiv);
      imageContainer.appendChild(overlayDiv);
    }
    
    frameDiv.appendChild(imageContainer);
    filmStrip.appendChild(frameDiv);
    
    filmStrip.addEventListener('wheel', function(e) {
      e.preventDefault();
      filmStrip.scrollLeft += e.deltaY;
    });

    let isDown = false;
    let startX;
    let scrollLeft;

    filmStrip.addEventListener('mousedown', (e) => {
      isDown = true;
      filmStrip.style.cursor = 'grabbing';
      startX = e.pageX - filmStrip.offsetLeft;
      scrollLeft = filmStrip.scrollLeft;
    });

    filmStrip.addEventListener('mouseleave', () => {
      isDown = false;
      filmStrip.style.cursor = 'grab';
    });

    filmStrip.addEventListener('mouseup', () => {
      isDown = false;
      filmStrip.style.cursor = 'grab';
    });

    filmStrip.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - filmStrip.offsetLeft;
      const walk = (x - startX) * 2; // 滾動速度
      filmStrip.scrollLeft = scrollLeft - walk;
    });
    
  }
  // 獲取當前比例的輔助函數
function getCurrentRatio() {
  // 從全局變量獲取當前旋轉狀態和比例索引
  const rotationState = rotation || 0; // 假設存在全局變量 rotation
  const ratioIdx = ratioIndex || 0;    // 假設存在全局變量 ratioIndex
  
  // 根據您的變數結構定義比例映射
  const ratioMap = [
    ['3-2', '1-1', '16-9'],       // 橫向比例
    ['2-3', '1-1', '9-16']        // 縱向比例
  ];
  
  // 根據旋轉狀態確定使用哪組比例
  const ratioSet = rotationState === 0 ? ratioMap[0] : ratioMap[1];
  
  // 返回當前比例的字符串表示
  return ratioSet[ratioIdx] || '1-1'; // 默認為 1:1
}
  
  // 初始化播放按鈕事件
  document.getElementById('playButton').onclick = startPlayback;
  // 初始化匯出按鈕事件
  document.getElementById('exportButton').onclick = exportStoryboard;
  // 初始化故事接龍按鈕事件
  document.getElementById('continueStoryButton').onclick = continueStory;
  
  // 初始化模態視窗關閉按鈕
  const closeButtons = document.getElementsByClassName('close-button');
  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
      document.getElementById('promptModal').style.display = 'none';
    };
  }
  
  //點擊模態視窗外部區域關閉模態視窗
  window.onclick = function(event) {
    if (event.target === document.getElementById('promptModal')) {
      document.getElementById('promptModal').style.display = 'none';
    }
  };
}

// 查看提示詞
function showPrompt(index) {
  const promptModal = document.getElementById('promptModal');
  const promptContent = document.getElementById('promptContent');
  
  // 顯示當前幀的提示詞
  promptContent.textContent = generatedPrompts[index] || '沒有提示詞';
  
  promptModal.style.display = 'block';
}

// 重新生成分鏡的函數
// 重新生成分鏡的函數
async function regenerateFrame(index) {
  if (!confirm(`確定要重新生成第 ${index + 1} 個分鏡嗎？`)) {
    return;
  }
  const generateBG = document.getElementById("generateBG") || document.createElement("div");
  generateBG.id = "generateBG";
  document.body.appendChild(generateBG);
  stinger();
  setTimeout(() => {
    generateBG.style.top = 0;
    
  }, 550);
  // 顯示生成中的UI界面
  
  // 如果不存在，則創建所需UI元素
  let loadingBarBG = document.getElementById("loadingBarBG");
  let loadingValue = document.getElementById("loadingValue");
  let loadingText = document.getElementById("loadingText");
  let loadingTitle = document.getElementById("loadingTitle");
  
  const spinnerBG = document.createElement("div");
  spinnerBG.classList.add("spinnerBG");
  spinnerBG.id = "spinnerBG";
  generateBG.appendChild(spinnerBG);

  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinnerBG.appendChild(spinner);

  const spinner1 = document.createElement("div");
  spinner1.classList.add("spinner1");
  spinner.appendChild(spinner1);

  const loader = document.createElement("div");
  loader.classList.add("loader");
  loader.id = "loader";
  generateBG.appendChild(loader);
  
  if (!loadingTitle) {
    loadingTitle = document.createElement("p");
    loadingTitle.classList.add("loadingTitle");
    loadingTitle.id = "loadingTitle";
    spinnerBG.appendChild(loadingTitle);
  }
  
  if (!loadingBarBG) {
    loadingBarBG = document.createElement("div");
    loadingBarBG.classList.add("loadingBarBG");
    loadingBarBG.id = "loadingBarBG";
    
    const loadingDot1 = document.createElement("div");
    loadingDot1.classList.add("loadingDot");
    loadingBarBG.appendChild(loadingDot1);
    
    const loadingBar = document.createElement("div");
    loadingBar.classList.add("loadingBar");
    loadingBarBG.appendChild(loadingBar);
    
    loadingValue = document.createElement("div");
    loadingValue.classList.add("loadingValue");
    loadingValue.id = "loadingValue";
    loadingBar.appendChild(loadingValue);
    
    const loadingDot2 = document.createElement("div");
    loadingDot2.classList.add("loadingDot");
    loadingBarBG.appendChild(loadingDot2);
    
    loadingText = document.createElement("div");
    loadingText.classList.add("loadingText");
    loadingText.id = "loadingText";
    loadingBarBG.appendChild(loadingText);
    
    generateBG.appendChild(loadingBarBG);
  }
  
  // 顯示加載提示
  loadingTitle.textContent = `重新生成第 ${index + 1} 個分鏡中...`;
  loadingValue.style.width = "0px";
  loadingText.innerHTML = "0%";
  
  // 設置加載條位置
  setTimeout(() => {
    loadingBarBG.style.top = "840px";
  }, 1500);
  
  // 獲取當前的風格和比例
  // 定義基本風格
  let styles = ["預設風格", "寫實風格", "電影風格", "卡通風格", "漫畫風格", "其他"];
  // 風格對應的英文描述，更具體詳細，便於AI識別
  const styleDescriptions = {
    "預設風格": "",
    "寫實風格": "photorealistic, hyperdetailed, natural lighting, realistic textures and materials, high fidelity, fine details, professional photography style",
    "電影風格": "cinematic, dramatic lighting, film grain, widescreen format, lens flare, depth of field, professional color grading, movie scene aesthetic",
    "卡通風格": "cartoon style, vibrant colors, simple shapes, clean lines, flat shading, exaggerated features, 2D animation look, bright and cheerful",
    "漫畫風格": "comic book style, strong black outlines, cel shading, dynamic composition, action lines, bold colors, comic panel layout, manga/anime aesthetic",
    "手繪風格": "hand-drawn, sketchy lines, visible brushstrokes, artistic, illustrative, traditional media look, painterly quality, imperfect linework, watercolor effect",
    // 其他可能的自定義風格預設
    "水彩風格": "watercolor style, soft edges, color bleeding, transparent layers, paper texture, fluid color transitions, delicate brushwork, artistic",
    "素描風格": "sketch style, pencil lines, crosshatching, grayscale, charcoal effect, hand-drawn look, artistic, sketchbook quality",
    "油畫風格": "oil painting style, textured brushstrokes, rich colors, impasto technique, canvas texture, classical painting look, traditional art",
    "像素風格": "pixel art, low resolution, blocky, 8-bit or 16-bit style, limited color palette, retro gaming aesthetic, sharp pixel edges",
    "霓虹風格": "neon style, glowing elements, dark backgrounds, vibrant colors, cyberpunk aesthetic, neon lights, urban nightlife, futuristic",
    "赛博朋克風格": "cyberpunk style, neon lights, high-tech, urban dystopia, futuristic technology, gritty atmosphere, rain-soaked streets, digital elements",
    "極簡風格": "minimalist style, clean lines, simple shapes, limited color palette, negative space, modern, uncluttered, elegant simplicity"
  };

  const cardInputValue = document.getElementById("cardInput").value;
  if (cardInputValue.endsWith("風格")){
    styles[5] = cardInputValue;
  }
  else{
    styles[5] = cardInputValue + "風格";
  }

  // 如果是自定義風格但在預設說明中沒有，則添加一個通用描述
  if (!styleDescriptions[styles[5]]) {
    styleDescriptions[styles[5]] = styles[5].replace("風格", "") + " style, distinctive aesthetic, unique visual approach, specialized artistic technique, characteristic visual elements";
  }

  // 風格文字描述，用於提示詞
  let styleText = cardIndex == 0 ? "" : "，風格為：" + styles[cardIndex];
  // 風格的詳細英文描述，用於提示詞增強
  let styleDetailText = cardIndex == 0 ? "" : styleDescriptions[styles[cardIndex]];

  const ratios = ["3:2(橫向)", "1:1", "16:9(橫向)", "2:3(縱向)", "1:1", "9:16(縱向)"];
  let ratioText = rotation == 0 ? ratios[ratioIndex] : ratios[ratioIndex+3];

  // 根據ratioIndex和rotation獲取實際的寬高比
  function getAspectRatio() {
    const aspectRatios = ["3:2", "1:1", "16:9", "2:3", "1:1", "9:16"];
    return rotation == 0 ? aspectRatios[ratioIndex] : aspectRatios[ratioIndex+3];
  }

  // 強化後的圖像生成提示詞
  const aspectRatio = getAspectRatio();
    
  // 風格增強部分
  let styleEnhancement = "";
  if (cardIndex != 0) {
    styleEnhancement = styleDetailText + ", " + styles[cardIndex] + ", ";
    // 針對特殊風格添加額外的強化詞
    if (styles[cardIndex].includes("手繪")) {
      styleEnhancement += "traditional drawing, sketch lines, hand-drawn aesthetic, artistic brushwork, ";
    } else if (styles[cardIndex].includes("水彩")) {
      styleEnhancement += "watercolor effect, paint bleed, traditional watercolor technique, ";
    } else if (styles[cardIndex].includes("素描")) {
      styleEnhancement += "pencil sketch, graphite drawing, charcoal effect, ";
    } else if (styles[cardIndex].includes("卡通")) {
      styleEnhancement += "cartoon styled, animated look, simplified shapes, ";
    } else if (styles[cardIndex].includes("漫畫")) {
      styleEnhancement += "comic book style, manga influence, bold lines, ";
    }
  }
  
  // 开始进度条动画
  startProgressAnimation();
  
  const question = generatedPrompts[index] + 
      ", high quality, ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS, NO WRITING OF ANY KIND, " +
      "aspect ratio " + aspectRatio + ", " +
      styleEnhancement +
      "\n先幫我加強這個提示詞語，保留並增強指定的風格特徵，再透過加強後的提示詞語生成一個圖片" + 
      "\n\n需要符合以下劇情情境：「" + inputText.value + "」，但即使劇情有提及也不要出現與prompt無關的人物/主體" + 
      "\n\n圖像中嚴格禁止出現任何形式的文字、字母、數字或書寫符號" +
      "\n這是最高優先級要求：" +
      "\n1. 生成的圖像中不得包含任何文字元素" +
      "\n2. 必須保持" + aspectRatio + "的比例" +
      (cardIndex != 0 ? "\n3. 必須遵循" + styles[cardIndex] + "的風格特點" : "") +
      "\n\n在加強提示詞時，請特別強調以下風格要素：" + (styleDetailText || "高品質、真實感") +
      "\n如果我要求的是特殊藝術風格（如手繪、水彩等），請確保最終圖像明確體現該風格的特徵，而不是普通的照片風格";
  
  try {
    const response = await fetch('/askGemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    
    const data = await response.json();
    if (data.image !== "") {
      generatedImgs[index] = data.image;
      completeProgressAnimation();
      setTimeout(() => {
        stinger();
      }, 500);
      setTimeout(() => {
        const generateBG = document.getElementById("generateBG");
        generateBG.style.top = "-100%";
        document.body.appendChild(resultBG);
        createFilmStrip();
        const spinnerBG = document.getElementById("spinnerBG");
        spinnerBG.remove();
        const loader = document.getElementById("loader");
        loader.remove();
        loadingBarBG.remove();
      }, 1500);
      setTimeout(() => {
        resetGenerateBG();
      }, 2500);
    } else {
      // 生成失敗
      setTimeout(() => {
        stinger();
      }, 500);
      setTimeout(() => {
        const generateBG = document.getElementById("generateBG");
        generateBG.style.top = "-100%";
        document.body.appendChild(resultBG);
        alert('圖像生成失敗，請稍後再試。');
        const spinnerBG = document.getElementById("spinnerBG");
        spinnerBG.remove();
        const loader = document.getElementById("loader");
        loader.remove();
        loadingBarBG.remove();
      }, 1500);
      setTimeout(() => {
        resetGenerateBG();
      }, 2500);
    }
  } catch (error) {
    console.error('Error:', error);
    setTimeout(() => {
        stinger();
      }, 500);
      setTimeout(() => {
        const generateBG = document.getElementById("generateBG");
        generateBG.style.top = "-100%";
        document.body.appendChild(resultBG);
        alert('圖像生成失敗，請稍後再試。');
        const spinnerBG = document.getElementById("spinnerBG");
        spinnerBG.remove();
        const loader = document.getElementById("loader");
        loader.remove();
        loadingBarBG.remove();
      }, 1500);
      setTimeout(() => {
        resetGenerateBG();
      }, 2500);
  }


  
  // 进度条动画函数
  function startProgressAnimation() {
    // 重置进度条
    loadingValue.style.width = "0px";
    loadingText.innerHTML = "0%";
    
    // 模拟进度增长
    let progress = 0;
    const progressInterval = setInterval(() => {
      // 增加到80%，留20%给实际完成时
      if (progress < 80) {
        progress += Math.random() * 2;
        progress = Math.min(progress, 80);
        loadingValue.style.width = (progress / 100) * 500 + "px";
        loadingText.innerHTML = Math.round(progress) + "%";
      } else {
        clearInterval(progressInterval);
      }
    }, 200);
    
    // 保存interval ID以便在完成时清除
    loadingValue.dataset.intervalId = progressInterval;
  }
  
  function completeProgressAnimation(callback) {
    // 清除之前的interval
    if (loadingValue.dataset.intervalId) {
      clearInterval(parseInt(loadingValue.dataset.intervalId));
    }
    
    // 快速完成进度条
    let progress = parseInt(loadingText.innerHTML);
    const finishInterval = setInterval(() => {
      if (progress < 100) {
        progress += 5;
        progress = Math.min(progress, 100);
        loadingValue.style.width = (progress / 100) * 500 + "px";
        loadingText.innerHTML = progress + "%";
      } else {
        clearInterval(finishInterval);
        // 完成后的回调
        setTimeout(() => {
          if (callback) callback();
        }, 500);
      }
    }, 50);
  }
}

// 刪除指定幀
function deleteFrame(index) {
  if (!confirm(`確定要刪除第 ${index + 1} 個分鏡嗎？`)) {
    return;
  }
  
  // 從各個數組中刪除該幀的數據
  generatedImgs.splice(index, 1);
  generatedPrompts.splice(index, 1);
  generatedStoryTitles.splice(index, 1);
  generatedStoryCams.splice(index, 1);
  
  createFilmStrip(); // 重新渲染膠捲
}

// 播放分鏡功能
let currentSlideIndex = 0;
let allSlides = [];
let allTexts = [];

let stingerTime = 550;

function startPlayback() {
  const resultBG = document.getElementById("resultBG");
  const playLoadingBG = document.createElement("div");
  playLoadingBG.id = "playLoadingBG";
  document.body.appendChild(playLoadingBG);
  const playbackBG = document.getElementById("playbackBG");
  stinger();
  setTimeout(() => {
    if(resultBG != null) resultBG.style.top = "-100%";
    const clapperBoard = document.createElement("div");
    clapperBoard.classList.add("clapperBoard");
    playLoadingBG.appendChild(clapperBoard);
    
    const clapper1 = document.createElement("img");
    clapper1.src = "../icon/clapperboard.svg";
    clapper1.classList.add("clapperBoardImg");
    
    const clapper2 = document.createElement("img");
    clapper2.src = "../icon/clapperboard-2.svg";
    clapper2.id = "clapper2";
    clapper2.classList.add("clapperBoardImg");
    clapperBoard.appendChild(clapper2);
    clapperBoard.appendChild(clapper1); 

    playbackBG.style.top = "100%";
    playLoadingBG.style.top = 0;
  }, stingerTime);

  setTimeout(() => {
    stinger();
  }, stingerTime+1500);

  setTimeout(() => {
    if (generatedImgs.length === 0) {
      return;
    }
    playbackBG.style.display = "flex";
    playbackBG.style.top = 0;
    playLoadingBG.style.top = "-100%";
  }, stingerTime*2+1500);
  
  setTimeout(() => {
    playLoadingBG.remove();
    currentSlideIndex = 0;
    updateSlide();
  }, stingerTime*2+2500);
  
}

function updateSlide(){
  const playbackBG = document.getElementById("playbackBG");
  playbackBG.innerHTML = ""; // 清空內容以避免重複

  const startDiv = document.createElement("div");
  startDiv.id = "playbackStartDiv";
  startDiv.classList.add("playbackDiv");

  for(let i = 0; i < generatedImgs.length; i++){
    const img = document.createElement("img");
    img.src = generatedImgs[i];
    img.id = "playbaackImg#" + (i+1);
    img.classList.add("playbackImg");
    if(i == 0) {
      img.style.animation = "playbackStart 2s";
    }
    
    const text = document.createElement("div");
    text.textContent = generatedStoryTitles[i];
    text.id = "playbaackText#" + (i+1);
    text.classList.add("playbackText");

    playbackBG.appendChild(img);
    playbackBG.appendChild(text);
  }

  allSlides = Array.from(document.querySelectorAll(".playbackImg"));
  allTexts = Array.from(document.querySelectorAll(".playbackText"));
  showSlide(currentSlideIndex);

  // 點擊切換
  document.getElementById("playbackBG").addEventListener("click", nextSlide);
}

function showSlide(index) {
  allSlides.forEach((img, i) => {
    img.style.opacity = (i === index) ? "1" : "0";
  });
  allTexts.forEach((text, i) => {
    text.style.opacity = (i === index) ? "1" : "0";
  });
}

function nextSlide() {
  if (currentSlideIndex < allSlides.length - 1) {
    currentSlideIndex++;
    showSlide(currentSlideIndex);
  } else {
    const playLoadingBG = document.createElement("div");
    playLoadingBG.id = "playLoadingBG";
    document.body.appendChild(playLoadingBG);
    stinger();
    setTimeout(() => {
      const clapperBoard = document.createElement("div");
      clapperBoard.classList.add("clapperBoard");
      playLoadingBG.appendChild(clapperBoard);
      
      const clapper1 = document.createElement("img");
      clapper1.src = "../icon/clapperboard.svg";
      clapper1.classList.add("clapperBoardImg");
      
      const clapper2 = document.createElement("img");
      clapper2.src = "../icon/clapperboard-2.svg";
      clapper2.id = "clapper2";
      clapper2.classList.add("clapperBoardImg");
      clapperBoard.appendChild(clapper2);
      clapperBoard.appendChild(clapper1); 
      
      document.getElementById("playbackBG").style.top = "-100%";
      playLoadingBG.style.top = 0;
    }, stingerTime);
    
    setTimeout(() => {
      if(resultBG != null) resultBG.style.top = "100%";
    }, stingerTime+1000);

    setTimeout(() => {
      stinger();
      document.getElementById("playbackBG").innerHTML = "";
    }, stingerTime+1500);

    setTimeout(() => {
      playLoadingBG.style.top = "-100%";
      resultBG.style.top = 0;
    }, stingerTime*2+1500);
    
    setTimeout(() => {
      playLoadingBG.remove();
    }, stingerTime*2+2500);
  }
}

// 匯出分鏡功能
async function exportStoryboard() {
  if (generatedImgs.length === 0) {
    alert('沒有可匯出的分鏡');
    return;
  }

// 將陣列中的圖片來源統一為單一字串
const cleanedImgs = generatedImgs.map(item => Array.isArray(item) ? item[0] : item);

// 圖片來源轉換為 base64（支援 base64, blob URL, Blob）
async function convertToBase64(src) {
  if (typeof src === 'string') {
    if (src.startsWith('data:image')) {
      return src;
    } else if (src.startsWith('blob:') || src.startsWith('/')) {
      return await blobUrlToBase64(src);
    } else {
      return src;
    }
  } else if (src instanceof Blob) {
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(src);
    });
  } else {
    console.warn('未知圖片格式：', src);
    return '';
  }
}

async function blobUrlToBase64(url) {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return await new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  } catch (err) {
    console.error('轉換失敗：', url, err);
    return '';
  }
}

// 匯出用 base64 圖片陣列
const base64Imgs = await Promise.all(cleanedImgs.map(convertToBase64));


  // 建立 HTML
  let exportContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>StoryboardAI - 分鏡稿</title>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 20px;
          background-color: #1a1a1a;
          color: #fff;
        }
        .storyboard-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        .storyboard-header {
          text-align: center;
          margin-bottom: 30px;
        }
        .storyboard-frame {
          display: flex;
          background-color: #000;
          padding: 20px;
          border-radius: 10px;
        }
        .frame-image {
          flex: 0 0 50%;
          max-width: 50%;
        }
        .frame-image img {
          width: 100%;
          height: auto;
          border: 1px solid #444;
        }
        .frame-details {
          flex: 0 0 50%;
          padding-left: 20px;
        }
        .frame-number {
          font-size: 1.2em;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .frame-title {
          margin-bottom: 10px;
        }
        .frame-description {
          color: #ccc;
          margin-bottom: 10px;
        }
        .frame-prompt {
          background-color: #333;
          padding: 10px;
          font-family: monospace;
          white-space: pre-wrap;
          margin-top: 10px;
          border-radius: 5px;
        }
      </style>
    </head>
    <body>
      <div class="storyboard-header">
        <h1>StoryboardAI - 分鏡稿</h1>
        <p>故事：${inputText.value || '未命名故事'}</p>
        <p>生成時間：${new Date().toLocaleString()}</p>
      </div>
      <div class="storyboard-container">
  `;

  for (let i = 0; i < base64Imgs.length; i++) {
    if (!base64Imgs[i]) {
      console.warn(`分鏡 ${i+1} 圖片轉換失敗`);
    }
    exportContent += `
      <div class="storyboard-frame">
        <div class="frame-image">
          <img src="${base64Imgs[i]}" alt="分鏡 ${i + 1}">
        </div>
        <div class="frame-details">
          <div class="frame-number">分鏡 #${i + 1}</div>
          <div class="frame-title"><strong>畫面：</strong> ${generatedStoryTitles[i] || `畫面 ${i + 1}`}</div>
          <div class="frame-description"><strong>鏡頭：</strong> ${generatedStoryCams[i] || `鏡頭 ${i + 1}`}</div>
          <div class="frame-prompt"><strong>提示詞：</strong>\n${generatedPrompts[i] || '沒有提示詞'}</div>
        </div>
      </div>
    `;
  }

  exportContent += `
      </div>
    </body>
    </html>
  `;


  // 下載 HTML 檔案
  const blob = new Blob([exportContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `分鏡稿_${new Date().getTime()}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// 故事接龍功能
async function continueStory() {
  // Check if there are frames to continue from
  if (generatedImgs.length === 0) {
    alert('沒有可接龍的分鏡，請先生成至少一個分鏡');
    return;
  }
  
  // Create a modal with input form instead of basic prompt
  const modalDiv = document.createElement('div');
  modalDiv.id = "continueStoryBG";
  modalDiv.style.backdropFilter = "blur(20px)";
  
  const formContainer = document.createElement('div');
  formContainer.id = "continueStoryForm";
  formContainer.style.scale = 1;
  
  const heading = document.createElement('h3');
  heading.id = "continueStoryTitle";
  heading.textContent = '故事接龍設定';
  
  const inputLabel = document.createElement('label');
  inputLabel.id = "continueInputLabel";
  inputLabel.textContent = '請描述接下來的故事：';
  
  const inputField = document.createElement('textarea');
  inputField.id = "continueStoryInput";
  inputField.placeholder = '例如：「接下來故事發生了什麼轉折？」或「角色即將面臨什麼挑戰？」';
  
  const framesLabel = document.createElement('label');
  framesLabel.id = "continueStoryFramesLabel";
  framesLabel.textContent = '生成新分鏡數量：';
  
  const framesInput = document.createElement('input');
  framesInput.id = "continueStoryFramesInput";
  framesInput.type = 'number';
  framesInput.min = '1';
  framesInput.max = '10';
  framesInput.value = '3';
  
  const buttonContainer = document.createElement('div');
  buttonContainer.id = "continueStoryButtonContainer";
  
  const cancelButton = document.createElement('button');
  cancelButton.id = "continueStoryCancelButton";
  cancelButton.textContent = 'Cancel';
  
  const confirmButton = document.createElement('button');
  confirmButton.id = "continueStoryConfirmButton";
  confirmButton.textContent = 'Generate!';
  
  buttonContainer.appendChild(cancelButton);
  buttonContainer.appendChild(confirmButton);
  
  formContainer.appendChild(heading);
  formContainer.appendChild(inputLabel);
  formContainer.appendChild(inputField);
  formContainer.appendChild(framesLabel);
  formContainer.appendChild(framesInput);
  formContainer.appendChild(buttonContainer);
  
  modalDiv.appendChild(formContainer);
  document.body.appendChild(modalDiv);
  
  // Focus the input field
  setTimeout(() => {
    inputField.focus();
  }, 100);
  
  // Set up event listeners
  cancelButton.onclick = function() {
    modalDiv.style.backdropFilter = "blur(0px)";
    formContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
    formContainer.style.scale = 0;
    setTimeout(() => {
      document.body.removeChild(modalDiv);
    }, 1000);
  };
  
  // Handle form submission
  confirmButton.onclick = async function() {
    const continuePrompt = inputField.value.trim();
    const frameCount = parseInt(framesInput.value);
    
    if (!continuePrompt) {
      alert('請輸入故事接龍的引導詞');
      return;
    }
    
    if (isNaN(frameCount) || frameCount < 1 || frameCount > 10) {
      alert('請輸入有效的分鏡數量（1-10）');
      return;
    }
    
    const generateBG = document.getElementById("generateBG") || document.createElement("div");
    generateBG.id = "generateBG";
    document.body.appendChild(generateBG);
    
    const spinnerBG = document.createElement("div");
    spinnerBG.classList.add("spinnerBG");
    spinnerBG.id = "spinnerBG";
    generateBG.appendChild(spinnerBG);

    const spinner = document.createElement("div");
    spinner.classList.add("spinner");
    spinnerBG.appendChild(spinner);

    const spinner1 = document.createElement("div");
    spinner1.classList.add("spinner1");
    spinner.appendChild(spinner1);

    const loader = document.createElement("div");
    loader.classList.add("loader");
    loader.id = "loader";
    generateBG.appendChild(loader);
    
    const loadingTitle = document.createElement("p");
    loadingTitle.classList.add("loadingTitle");
    loadingTitle.id = "loadingTitle";
    loadingTitle.textContent = "故事接龍生成中，請稍後...";
    spinnerBG.appendChild(loadingTitle);
    
    const loadingBarBG = document.createElement("div");
    loadingBarBG.classList.add("loadingBarBG");
    loadingBarBG.id = "loadingBarBG";
    generateBG.appendChild(loadingBarBG);
    
    const loadingDot1 = document.createElement("div");
    loadingDot1.classList.add("loadingDot");
    loadingBarBG.appendChild(loadingDot1);
    
    const loadingBar = document.createElement("div");
    loadingBar.classList.add("loadingBar");
    loadingBarBG.appendChild(loadingBar);
    
    const loadingValue = document.createElement("div");
    loadingValue.classList.add("loadingValue");
    loadingValue.id = "loadingValue";
    loadingBar.appendChild(loadingValue);
    
    const loadingDot2 = document.createElement("div");
    loadingDot2.classList.add("loadingDot");
    loadingBarBG.appendChild(loadingDot2);
    
    const loadingText = document.createElement("div");
    loadingText.classList.add("loadingText");
    loadingText.id = "loadingText";
    loadingText.innerHTML = "0%";
    loadingBarBG.appendChild(loadingText);
    
    setTimeout(() => {
    loadingBarBG.style.top = "840px";
    }, 1500);
    loadingValue.style.width = "0px";

    modalDiv.style.backdropFilter = "blur(0px)";
    formContainer.style.transition = "all 0.5s cubic-bezier(.31,.01,.66,-0.59)";
    formContainer.style.scale = 0;
    setTimeout(() => {
      document.body.removeChild(modalDiv);
      stinger();
    }, 1000);

    setTimeout(() => {
      generateBG.style.top = 0;
    }, 1500);
    
    try {
      // Get the last few frames to provide context
      const contextCount = Math.min(3, generatedImgs.length);
      const startIdx = generatedImgs.length - contextCount;
      
      let contextFrames = [];
      for (let i = startIdx; i < generatedImgs.length; i++) {
        contextFrames.push({
          index: i + 1,
          title: generatedStoryTitles[i] || `畫面 ${i + 1}`,
          camera: generatedStoryCams[i] || `鏡頭 ${i + 1}`,
          prompt: generatedPrompts[i] || ''
        });
      }
      
      // Start the generation process
      await processContinuation(continuePrompt, frameCount, contextFrames, loadingTitle, loadingValue, loadingText);
      
      setTimeout(() => {
        stinger();
      }, 500);
      setTimeout(() => {
        const generateBG = document.getElementById("generateBG");
        generateBG.style.top = "-100%";
        document.body.appendChild(resultBG);
        createFilmStrip();
        const spinnerBG = document.getElementById("spinnerBG");
        spinnerBG.remove();
        const loader = document.getElementById("loader");
        loader.remove();
        loadingBarBG.remove();
        const currentRatio = getCurrentRatio(); // 或從你實際的選擇中讀取
        let frameWidth = 0;
        if (currentRatio === "1-1") frameWidth = 300;
        else if (currentRatio === "3-2") frameWidth = 450;
        else if (currentRatio === "16-9") frameWidth = 533;
        else if (currentRatio === "2-3") frameWidth = 200;
        else if (currentRatio === "9-16") frameWidth = 168.75;
        let frameWidth2 = (frameWidth + 42) * generatedPrompts.length + 10 * (generatedPrompts.length - 1);
  
        const filmStrip = document.getElementById("filmStrip");
        filmStrip.style.setProperty('--film-strip-edge-width', frameWidth2 + 'px');
      }, 1500);
      setTimeout(() => {
        resetGenerateBG();
      }, 2500);
      
function getCurrentRatio() {
  // 從全局變量獲取當前旋轉狀態和比例索引
  const rotationState = rotation || 0; // 假設存在全局變量 rotation
  const ratioIdx = ratioIndex || 0;    // 假設存在全局變量 ratioIndex
  
  // 根據您的變數結構定義比例映射
  const ratioMap = [
    ['3-2', '1-1', '16-9'],       // 橫向比例
    ['2-3', '1-1', '9-16']        // 縱向比例
  ];
  
  // 根據旋轉狀態確定使用哪組比例
  const ratioSet = rotationState === 0 ? ratioMap[0] : ratioMap[1];
  
  // 返回當前比例的字符串表示
  return ratioSet[ratioIdx] || '1-1'; // 默認為 1:1
}
    } catch (error) {
      console.error('Error in story continuation:', error);
      
      // Show error message
      loadingTitle.textContent = '故事接龍生成失敗，請稍後再試';
      loadingText.innerHTML = "Error";
      loadingValue.style.width = "0px";
      
      // Add close button for error state
      const closeErrorBtn = document.createElement("button");
      closeErrorBtn.textContent = "關閉";
      closeErrorBtn.style.marginTop = "20px";
      closeErrorBtn.style.padding = "10px 20px";
      closeErrorBtn.style.borderRadius = "5px";
      closeErrorBtn.style.backgroundColor = "#f44336";
      closeErrorBtn.style.color = "white";
      closeErrorBtn.style.border = "none";
      closeErrorBtn.style.cursor = "pointer";
      
      closeErrorBtn.onclick = function() {
        setTimeout(() => {
        stinger();
      }, 500);
      setTimeout(() => {
        const generateBG = document.getElementById("generateBG");
        generateBG.style.top = "-100%";
        document.body.appendChild(resultBG);
        const spinnerBG = document.getElementById("spinnerBG");
        spinnerBG.remove();
        const loader = document.getElementById("loader");
        loader.remove();
        loadingBarBG.remove();
      }, 1500);
      setTimeout(() => {
        resetGenerateBG();
      }, 2500);
      };
      
      spinnerBG.appendChild(closeErrorBtn);
    }
  };
}

// Helper function to process the story continuation
async function processContinuation(continuePrompt, frameCount, contextFrames, loadingTitle, loadingValue, loadingText) {
  // Get the last frame details for context
  const lastIndex = generatedImgs.length - 1;
  const contextDescription = contextFrames.map(frame => 
    `分鏡 #${frame.index}:\n畫面：${frame.title}\n鏡頭：${frame.camera}`
  ).join('\n\n');
  
  // Set up the question with rich context
  const question = `假設你是一個專業的影像工作者，你正在繼續一個故事的分鏡稿。
  
故事背景：${inputText.value}

前幾個分鏡的情境：
${contextDescription}

用戶的故事接龍引導：${continuePrompt}

請繼續這個故事，幫我整理接下來的${frameCount}個分鏡稿，每個分鏡必須保持與前面分鏡的視覺一致性和故事連貫性。

分鏡須符合以下要求：
1. 故事必須具備連貫性且自然地延續前面的情節
2. 相同角色必須保持一致的外觀、穿著和特徵
3. 場景轉換需要邏輯合理，避免突兀的場景跳躍
4. 請考慮原有的風格和美學，保持整體風格一致
5. 請清晰說明每個分鏡的視覺和鏡頭語言細節

請按照以下格式提供：

第一幕：
畫面：(詳細描述畫面內容)
鏡頭：(詳細描述鏡頭角度、運動、光影等)

第二幕：
畫面：(詳細描述畫面內容)
鏡頭：(詳細描述鏡頭角度、運動、光影等)

...

Prompt：
1. (英文提示詞，至少150字，詳細描述第一幕的視覺元素)
2. (英文提示詞，至少150字，詳細描述第二幕的視覺元素)
...`;

  // Update loading status
  loadingTitle.textContent = "故事接龍生成中，請稍後... (1/2)";
  loadingValue.style.width = 0*500 + "px";
  for(let i = 0; i <= 0; i++){
    setTimeout(() => {
      loadingText.innerHTML = i + "%";
    }, 500);
  }
  
  // Fetch the main story continuation
  const response = await fetch('/askGemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question }),
  });
  
  const data = await response.json();
  if (!data.response) {
    throw new Error('Story continuation failed: Empty response');
  }
  
  // Store the raw story response
  const storyResponse = data.response;
  
  // Process the story titles
  loadingTitle.textContent = "故事接龍生成中，請稍後... (2/2)";
  loadingValue.style.width = 0.25*500 + "px";
  for(let i = 0; i <= 25; i++){
    setTimeout(() => {
      loadingText.innerHTML = i + "%";
    }, 500);
  }
  
  const titleExtraction = `${storyResponse}\n\n幫我將這些文字整理成只有畫面的部分，範例為：\n1. (畫面描述...)\n2. (畫面描述...) ...，不需要「好的，這是一份根據您的描述整理的分鏡稿：」也不要「畫面：」等等這些字，也不要有單獨的「the end」、「fade out」等結束提示詞`;
  
  const titleResponse = await fetch('/askGemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: titleExtraction }),
  });
  
  const titleData = await titleResponse.json();
  if (!titleData.response) {
    throw new Error('Title extraction failed');
  }
  
  // Process camera descriptions
  loadingValue.style.width = 0.25*500 + (1/3)*0.25*500 + "px";
  for(let i = 25; i <= 25 + Math.round((1/3)*25); i++){
    setTimeout(() => {
      loadingText.innerHTML = i + "%";
    }, 500);
  }
  
  const cameraExtraction = `${storyResponse}\n\n幫我將這些文字整理成只有鏡頭的部分，範例為：\n1. (鏡頭描述...)\n2. (鏡頭描述...) ...，不需要「好的，這是一份根據您的描述整理的分鏡稿：」也不要「鏡頭：」等等這些字，也不要有單獨的「the end」、「fade out」等結束提示詞`;
  
  const cameraResponse = await fetch('/askGemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: cameraExtraction }),
  });
  
  const cameraData = await cameraResponse.json();
  if (!cameraData.response) {
    throw new Error('Camera extraction failed');
  }
  
  // Process prompts
  loadingValue.style.width = 0.25*500 + (2/3)*0.25*500 + "px";
  for(let i = 25 + Math.round((1/3)*25); i <= 25 + Math.round((2/3)*25); i++){
    setTimeout(() => {
      loadingText.innerHTML = i + "%";
    }, 500);
  }
  
  // 獲取當前風格和比例設定
  const styleText = cardIndex == 0 ? "" : "、風格為：" + styles[cardIndex];
  const styleDetailText = cardIndex == 0 ? "" : styleDescriptions[styles[cardIndex]];
  const ratioText = rotation == 0 ? ratios[ratioIndex] : ratios[ratioIndex+3];
  const aspectRatio = getAspectRatio();
  
  // 風格增強指令
  const styleEnhancement = cardIndex == 0 ? "" : 
    "\n8. 每個提示詞都必須包含下列風格描述詞（這是最高優先級要求）：" + styleDetailText;
  
  const promptExtraction = `${storyResponse}\n\n幫我將這些文字整理成只有prompt的部分，並優化各個prompt，且每個prompt必須符合以下要求：
  \n1. 包含詳細的場景描述（環境、光線、氛圍、時間）
  \n2. 清晰說明主體/人物的位置、表情、動作、服裝
  \n3. 指定攝影技術參數（焦距、景深、光圈、構圖）
  \n4. 每個prompt至少150字，確保足夠細節
  \n5. 加入專業術語如cinematic lighting, hyperrealistic detail等增強質感
  \n6. 明確指定圖像比例為：${aspectRatio}
  \n7. 每個提示詞中都必須包含「ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS」
  ${styleEnhancement}
  \n\n格式為：\n1. (Prompt...)\n2. (prompt...) ...，不需要「好的，這是一份根據您的描述整理的分鏡稿 prompt：」等等這些字，也不要有單獨的「the end」、「fade out」等結束提示詞，並加強再加強這些提示詞語
  \n\n請確保每個提示詞保持視覺一致性，尤其是在以下方面：人物特徵、環境細節、光線處理、整體風格`;
  
  const promptResponse = await fetch('/askGemini', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ question: promptExtraction }),
  });
  
  const promptData = await promptResponse.json();

  loadingValue.style.width = 0.25*500 + (3/3)*0.25*500 + "px";
  for(let i = 25 + Math.round((2/3)*25); i <= 25 + Math.round((3/3)*25); i++){
    setTimeout(() => {
      loadingText.innerHTML = i + "%";
    }, 500);
  }
  if (!promptData.response) {
    throw new Error('Prompt extraction failed');
  }
  
  // Process responses and add new frames to existing arrays
  processExtractedData(titleData.response, cameraData.response, promptData.response);
  
  // Generate images for the new frames
  loadingTitle.textContent = "正在生成新分鏡的圖片，請稍後...";
  await generateContinuationImages();
  
  return true;
}

// Process the extracted data and add to global arrays
function processExtractedData(titlesText, camerasText, promptsText) {
  const titleLines = titlesText.split('\n').filter(line => line.trim() !== '');
  const cameraLines = camerasText.split('\n').filter(line => line.trim() !== '');
  const promptLines = promptsText.split('\n').filter(line => line.trim() !== '');
  
  const newTitles = [];
  const newCameras = [];
  const newPrompts = [];
  
  // Extract titles
  for (let i = 0; i < titleLines.length; i++) {
    const line = titleLines[i];
    if (line.match(/^\d+\./)) {
      const parts = line.split(/^\d+\.\s+/);
      if (parts.length > 1) {
        newTitles.push(parts[1]);
      }
    }
  }
  
  // Extract cameras
  for (let i = 0; i < cameraLines.length; i++) {
    const line = cameraLines[i];
    if (line.match(/^\d+\./)) {
      const parts = line.split(/^\d+\.\s+/);
      if (parts.length > 1) {
        newCameras.push(parts[1]);
      }
    }
  }
  
  // Extract prompts
  for (let i = 0; i < promptLines.length; i++) {
    const line = promptLines[i];
    if (line.match(/^\d+\./)) {
      const parts = line.split(/^\d+\.\s+/);
      if (parts.length > 1) {
        newPrompts.push(parts[1]);
      }
    }
  }
  
  // Add new data to global arrays
  for (let i = 0; i < Math.min(newTitles.length, newCameras.length, newPrompts.length); i++) {
    generatedStoryTitles.push(newTitles[i]);
    generatedStoryCams.push(newCameras[i]);
    generatedPrompts.push(newPrompts[i]);
  }
  
  return Math.min(newTitles.length, newCameras.length, newPrompts.length);
}

// Generate images for the new frames
async function generateContinuationImages() {
  // Calculate starting index for new frames
  const startIndex = generatedImgs.length;
  const endIndex = generatedPrompts.length;
  
  // Generate images for each new prompt
  for (let i = startIndex; i < endIndex; i++) {
    const aspectRatio = getAspectRatio();
    
    // Prepare style enhancement
    let styleEnhancement = "";
    if (cardIndex != 0) {
      styleEnhancement = styleDescriptions[styles[cardIndex]] + ", " + styles[cardIndex] + ", ";
      // Add specific style enhancements based on style type
      if (styles[cardIndex].includes("手繪")) {
        styleEnhancement += "traditional drawing, sketch lines, hand-drawn aesthetic, artistic brushwork, ";
      } else if (styles[cardIndex].includes("水彩")) {
        styleEnhancement += "watercolor effect, paint bleed, traditional watercolor technique, ";
      } else if (styles[cardIndex].includes("素描")) {
        styleEnhancement += "pencil sketch, graphite drawing, charcoal effect, ";
      } else if (styles[cardIndex].includes("卡通")) {
        styleEnhancement += "cartoon styled, animated look, simplified shapes, ";
      } else if (styles[cardIndex].includes("漫畫")) {
        styleEnhancement += "comic book style, manga influence, bold lines, ";
      }
    }
    
    // Construct the image generation prompt
    const question = generatedPrompts[i] + 
      ", high quality, ABSOLUTELY NO TEXT, NO WORDS, NO LETTERS, NO NUMBERS, NO WRITING OF ANY KIND, " +
      "aspect ratio " + aspectRatio + ", " +
      styleEnhancement +
      "\n先幫我加強這個提示詞語，保留並增強指定的風格特徵，再透過加強後的提示詞語生成一個圖片" + 
      "\n\n需要符合以下劇情情境：「" + inputText.value + "」，但即使劇情有提及也不要出現與prompt無關的人物/主體" + 
      "\n\n圖像中嚴格禁止出現任何形式的文字、字母、數字或書寫符號" +
      "\n這是最高優先級要求：" +
      "\n1. 生成的圖像中不得包含任何文字元素" +
      "\n2. 必須保持" + aspectRatio + "的比例" +
      (cardIndex != 0 ? "\n3. 必須遵循" + styles[cardIndex] + "的風格特點" : "") +
      "\n\n在加強提示詞時，請特別強調以下風格要素：" + (styleDetailText || "高品質、真實感") +
      "\n如果我要求的是特殊藝術風格（如手繪、水彩等），請確保最終圖像明確體現該風格的特徵，而不是普通的照片風格";
    
    // Update loading message
    const loadingTitle = document.getElementById("loadingTitle");
    if (loadingTitle) {
      loadingTitle.textContent = `生成新分鏡圖片中，請稍後... (${i-startIndex+1}/${endIndex-startIndex})`;
    }
    
    try {
      const response = await fetch('/askGemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      
      const data = await response.json();
      loadingValue.style.width = 0.5*500 + ((i-startIndex+1)/(endIndex-startIndex))*0.5*500 + "px";
      for(let j = 50 + Math.round(((i-startIndex)/(endIndex-startIndex))*50); j <= 50 + Math.round(((i-startIndex+1)/(endIndex-startIndex))*50); j++){
        setTimeout(() => {
          loadingText.innerHTML = j + "%";
        }, 500);
      }
      if (data.image && data.image !== "") {
        generatedImgs.push(data.image);
        successCount++;
      } else {
        // Handle failed image generation
        generatedImgs.push(""); // Push empty string as placeholder
        failureCount++;
        console.error('Image generation failed for continuation prompt #' + (i + 1));
      }
    } catch (error) {
      console.error('Error generating image:', error);
      generatedImgs.push(""); // Push empty string as placeholder
      failureCount++;
    }
  }
  
  return true;
}
