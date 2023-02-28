let ball = document.querySelector(".ball");
let up = document.querySelector(".bi-arrow-up-square");
let down = document.querySelector(".bi-arrow-down-square");
let left = document.querySelector(".bi-arrow-left-square");
let right = document.querySelector(".bi-arrow-right-square");


window.addEventListener('keydown', element => {

    switch (element.key) {

        case "ArrowUp":
            upfunction();
            break;

        case "w":
            upfunction();
            break;

        case "ArrowDown":
            downFunction();
            break;

        case "s":
            downFunction();
            break;

        case "ArrowLeft":
            leftFunction();
            break;

        case "a":
            leftFunction();
            break;

        case "ArrowRight":
            righFfunction();
            break;

        case "d":
            righFfunction();
            break;

    }
});



up.addEventListener("click", upfunction);
down.addEventListener("click", downFunction);
left.addEventListener("click", leftFunction);
right.addEventListener("click", righFfunction);

function upfunction() {
ball.style.top = "0";
}

function downFunction() {
    ball.style.top = "calc(100vh - 90px)";
}

function leftFunction() {
    ball.style.left ="0";
}

function righFfunction() {
    ball.style.left = "calc(100vw - 90px)";
}