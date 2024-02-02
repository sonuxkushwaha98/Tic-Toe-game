let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector(".resetbtn")
let newbutton = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const restgame = () => {
    turnO = true;
    enablebuttons();
    msgcontainer.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerHTML = "O"
            turnO = false;
        } else {
            box.innerHTML = "X"
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    })
});

const disablebuttons = () => {
    for (let button of boxes) {
        button.disabled = true;
    }
}
const enablebuttons = () => {
    for (let button of boxes) {
        button.disabled = false;
        button.innerHTML = "";
    }
}
const winneris = (firstturn) => {
    msg.innerHTML = `Congrulation the winner is ${firstturn}`
    msgcontainer.classList.remove("hide")
    disablebuttons();
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerHTML
        let pos2val = boxes[pattern[1]].innerHTML
        let pos3val = boxes[pattern[2]].innerHTML
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                winneris(pos1val);
            }
        }
    }
}

newbutton.addEventListener("click", restgame)
resetbtn.addEventListener("click", restgame)