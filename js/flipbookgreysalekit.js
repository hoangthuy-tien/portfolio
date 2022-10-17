// References to DOM Elements
const prevBtn = document.querySelector("#prev-btnsal");
const nextBtn = document.querySelector("#next-btnsal");
const salekit = document.querySelector("#salekit");

const salekitpaper1 = document.querySelector("#salekit-p1");
const salekitpaper2 = document.querySelector("#salekit-p2");
const salekitpaper3 = document.querySelector("#salekit-p3");
const salekitpaper4 = document.querySelector("#salekit-p4");
const salekitpaper5 = document.querySelector("#salekit-p5");
const salekitpaper6 = document.querySelector("#salekit-p6");
const salekitpaper7 = document.querySelector("#salekit-p7");
const salekitpaper8 = document.querySelector("#salekit-p8");
const salekitpaper9 = document.querySelector("#salekit-p9");
const salekitpaper10 = document.querySelector("#salekit-p10");
const salekitpaper11 = document.querySelector("#salekit-p11");
const salekitpaper12 = document.querySelector("#salekit-p12");
const salekitpaper13 = document.querySelector("#salekit-p13");
const salekitpaper14 = document.querySelector("#salekit-p14");
const salekitpaper15 = document.querySelector("#salekit-p15");
const salekitpaper16 = document.querySelector("#salekit-p16");
const salekitpaper17 = document.querySelector("#salekit-p17");
const salekitpaper18 = document.querySelector("#salekit-p18");
const salekitpaper19 = document.querySelector("#salekit-p19");
const salekitpaper20 = document.querySelector("#salekit-p20");
const salekitpaper21 = document.querySelector("#salekit-p21");
const salekitpaper22 = document.querySelector("#salekit-p22");
const salekitpaper23 = document.querySelector("#salekit-p23");
const salekitpaper24 = document.querySelector("#salekit-p24");
const salekitpaper25 = document.querySelector("#salekit-p25");
const salekitpaper26 = document.querySelector("#salekit-p26");
const salekitpaper27 = document.querySelector("#salekit-p27");


// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 27;
let maxLocation = numOfPapers + 1;

function openBook() {
    salekit.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        salekit.style.transform = "translateX(0%)";
    } else {
        salekit.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                salekitpaper1.classList.add("flipped");
                salekitpaper1.style.zIndex = 1;
                break;
            case 2:
                salekitpaper2.classList.add("flipped");
                salekitpaper2.style.zIndex = 2;
                break;
            case 3:
                salekitpaper3.classList.add("flipped");
                salekitpaper3.style.zIndex = 3;
                break;
            case 4:
                salekitpaper4.classList.add("flipped");
                salekitpaper4.style.zIndex = 4;
                break;
            case 5:
                salekitpaper5.classList.add("flipped");
                salekitpaper5.style.zIndex = 5;
                break;
            case 6:
                salekitpaper6.classList.add("flipped");
                salekitpaper6.style.zIndex = 6;
                break;
            case 7:
                salekitpaper7.classList.add("flipped");
                salekitpaper7.style.zIndex = 7;
                break;
            case 8:
                salekitpaper8.classList.add("flipped");
                salekitpaper8.style.zIndex = 8;
                break;
            case 9:
                salekitpaper9.classList.add("flipped");
                salekitpaper9.style.zIndex = 9;
                break;
            case 10:
                salekitpaper10.classList.add("flipped");
                salekitpaper10.style.zIndex = 10;
                break;
            case 11:
                salekitpaper11.classList.add("flipped");
                salekitpaper11.style.zIndex = 11;
                break;
            case 12:
                salekitpaper12.classList.add("flipped");
                salekitpaper12.style.zIndex = 12;
                break;
            case 13:
                salekitpaper13.classList.add("flipped");
                salekitpaper13.style.zIndex = 13;
                break;
            case 14:
                salekitpaper14.classList.add("flipped");
                salekitpaper14.style.zIndex = 14;
                break;
            case 15:
                salekitpaper15.classList.add("flipped");
                salekitpaper15.style.zIndex = 15;
                break;
            case 16:
                salekitpaper16.classList.add("flipped");
                salekitpaper16.style.zIndex = 16;
                break;
            case 17:
                salekitpaper17.classList.add("flipped");
                salekitpaper17.style.zIndex = 17;
                break;
            case 18:
                salekitpaper18.classList.add("flipped");
                salekitpaper18.style.zIndex = 18;
                break;
            case 19:
                salekitpaper19.classList.add("flipped");
                salekitpaper19.style.zIndex = 19;
                break;
            case 20:
                salekitpaper20.classList.add("flipped");
                salekitpaper20.style.zIndex = 20;
                break;
            case 21:
                salekitpaper21.classList.add("flipped");
                salekitpaper21.style.zIndex = 21;
                break;
            case 22:
                salekitpaper22.classList.add("flipped");
                salekitpaper22.style.zIndex = 22;
                break;
            case 23:
                salekitpaper23.classList.add("flipped");
                salekitpaper23.style.zIndex = 23;
                break;
            case 24:
                salekitpaper24.classList.add("flipped");
                salekitpaper24.style.zIndex = 24;
                break;
            case 25:
                salekitpaper25.classList.add("flipped");
                salekitpaper25.style.zIndex = 25;
                break;
            case 26:
                salekitpaper26.classList.add("flipped");
                salekitpaper26.style.zIndex = 26;
                break;
            case 27:
                salekitpaper27.classList.add("flipped");
                salekitpaper27.style.zIndex = 27;
                closeBook(false);
                break;

            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                salekitpaper1.classList.remove("flipped");
                salekitpaper1.style.zIndex = 27;
                break;
            case 3:
                salekitpaper2.classList.remove("flipped");
                salekitpaper2.style.zIndex = 26;
                break;
            case 4:
                salekitpaper3.classList.remove("flipped");
                salekitpaper3.style.zIndex = 25;
                break;
            case 5:
                salekitpaper4.classList.remove("flipped");
                salekitpaper4.style.zIndex = 24;
                break;
            case 6:
                salekitpaper5.classList.remove("flipped");
                salekitpaper5.style.zIndex = 23;
                break;
            case 7:
                salekitpaper6.classList.remove("flipped");
                salekitpaper6.style.zIndex = 22;
                break;
            case 8:
                salekitpaper7.classList.remove("flipped");
                salekitpaper7.style.zIndex = 21;
                break;
            case 9:
                salekitpaper8.classList.remove("flipped");
                salekitpaper8.style.zIndex = 20;
                break;
            case 10:
                salekitpaper9.classList.remove("flipped");
                salekitpaper9.style.zIndex = 19;
                break;
            case 11:
                salekitpaper10.classList.remove("flipped");
                salekitpaper10.style.zIndex = 18;
                break;
            case 12:
                salekitpaper11.classList.remove("flipped");
                salekitpaper11.style.zIndex = 17;
                break;
            case 13:
                salekitpaper12.classList.remove("flipped");
                salekitpaper12.style.zIndex = 16;
                break;
            case 14:
                salekitpaper13.classList.remove("flipped");
                salekitpaper13.style.zIndex = 15;
                break;
            case 15:
                salekitsalekitpaper14.classList.remove("flipped");
                salekitpaper14.style.zIndex = 14;
                break;
            case 16:
                salekitpaper15.classList.remove("flipped");
                salekitpaper15.style.zIndex = 13;
                break;
            case 17:
                salekitpaper16.classList.remove("flipped");
                salekitpaper16.style.zIndex = 12;
                break;
            case 18:
                salekitpaper17.classList.remove("flipped");
                salekitpaper17.style.zIndex = 11;
                break;
            case 19:
                salekitsalekitpaper18.classList.remove("flipped");
                salekitpaper18.style.zIndex = 10;
                break;
            case 20:
                salekitpaper19.classList.remove("flipped");
                salekitpaper19.style.zIndex = 9;
                break;
            case 21:
                salekitsalekitpaper20.classList.remove("flipped");
                salekitpaper20.style.zIndex = 8;
                break;
            case 22:
                salekitpaper21.classList.remove("flipped");
                salekitpaper21.style.zIndex = 7;
                break;
            case 23:
                salekitpaper22.classList.remove("flipped");
                salekitpaper22.style.zIndex = 6;
                break;
            case 24:
                salekitpaper23.classList.remove("flipped");
                salekitpaper23.style.zIndex = 5;
                break;
            case 25:
                salekitpaper24.classList.remove("flipped");
                salekitpaper24.style.zIndex = 4;
                break;
            case 26:
                salekitpaper25.classList.remove("flipped");
                salekitpaper25.style.zIndex = 3;
                break;
            case 27:
                salekitpaper26.classList.remove("flipped");
                salekitpaper26.style.zIndex = 2;
                break;
            case 28:
                openBook();
                salekitpaper27.classList.remove("flipped");
                salekitpaper27.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}
