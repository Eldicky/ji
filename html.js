let click = 0;
let size = document.getElementById("yup");
let text = document.getElementById("nope");
const toppings = document.getElementById("remove");
const arr = ['are you sure?', 'it\'ll be fun ^__^', 'are you really sure?', 'I\'ll be sad :<', 'like very very saaad :<<', 'Pretty please? UwU'];

function noClick(){
    switch(click){
        case 0:
            size.style.fontSize = "4rem";
            size.style.width = "300px";
            size.style.height = "150px";
            text.innerHTML = arr[0]
            text.style.width = "auto"
            click++;
            break;

        case 1:
            size.style.fontSize = "6rem";
            size.style.width = "600px";
            size.style.height = "300px";
            text.innerHTML = arr[2]
            text.style.width = "200px"
            click++;
            break;    

        case 2:
            size.style.fontSize = "8rem";
            size.style.width = "800px";
            size.style.height = "400px";
            text.innerHTML = arr[1]
            text.style.width = "200px"
            click++;
            break;   

        case 3:
            size.style.fontSize = "10rem";
            size.style.width = "1000px";
            size.style.height = "500px";
            text.innerHTML = arr[3]
            text.style.width = "200px"
            click++;
            break; 

        case 4:
            toppings.style.display = "none";
            size.style.fontSize = "20rem";
            size.style.width = "1300px";
            size.style.height = "650px";
            size.style.marginTop = "100px";
            text.innerHTML = arr[4]
            text.style.width = "250px"
            text.style.alignSelf = "center"
            click++;
            break;  

        case 5:
                size.style.fontSize = "20rem";
                size.style.width = "1600px";
                size.style.height = "100vh";
                size.style.marginTop = "0";
                text.innerHTML = arr[5]
                text.style.width = "250px"
                text.style.alignSelf = "center"
                click++;
                break;

        case 6:
                size.style.fontSize = "40rem";
                size.style.width = "2000px";
                size.style.height = "100vh";
                text.style.display = "none";
                break;
    };
}

let yesResponse = document.getElementById("para");
let yesImg = document.getElementById("gif");

function yesClick(){
    size.style.display = "none";
    text.style.display = "none";
    toppings.style.display = "flex";
    yesResponse.style.fontSize = "2rem";
    yesResponse.innerHTML = "Ok, YAAAAY!! >__<";
    yesImg.src = "./milk-mocha-bear-love-couple-cuddle-acxywzcpdpee2t32.gif";
}