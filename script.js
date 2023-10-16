console.log("Welcome To Tic Tac Toe");

let audioTurn = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;

let turn = "X";

const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

const checkwin = () => {
    let boxtext = document.querySelectorAll(".boxtext");

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if (
            boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[0]].innerText !== ""
        ) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " won";
            isgameover = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
        }
    });
};

let boxes = document.querySelectorAll(".box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", event => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if (!isgameover) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0px";
});
