let container = document.querySelector('.container');
for (let index of container.children) {
    index.addEventListener('click', mark);
}
//function to mark a box and change turns
function mark(e) {
    let currentBox = e.currentTarget;
    let turn = document.querySelector('.info');
    let text = turn.textContent;
    if (currentBox.children[0].textContent == '' && checkWin() == false) {
        currentBox.children[0].textContent = 'X';
        turn.textContent = 'turn for o';

        if (checkWin() == true) {

            turn.textContent = 'X won!!!';
        }
        else {
            mark2(currentBox.parentElement, 'O');
            turn.textContent = 'turn for x';
            if (checkWin() == true) {

                turn.textContent = 'O won!!!';
            }
        }

    }

}
//mark function for computer
function mark2(parent, text) {
    
    
    if(parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //for the computer to win
    //box1
    else if(parent.children[0].children[0].textContent=='O'&& parent.children[3].children[0].textContent=='O'&&parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='O'&& parent.children[1].children[0].textContent=='O'&&parent.children[2].children[0].textContent==''){parent.children[2].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='O'&& parent.children[2].children[0].textContent=='O'&&parent.children[1].children[0].textContent==''){parent.children[1].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='O'&& parent.children[6].children[0].textContent=='O'&&parent.children[3].children[0].textContent==''){parent.children[3].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='O'&& parent.children[8].children[0].textContent=='O'&&parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //box2
    else if(parent.children[1].children[0].textContent=='O'&& parent.children[2].children[0].textContent=='O'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    else if(parent.children[1].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[7].children[0].textContent==''){parent.children[7].children[0].textContent=text;}
    //box3
    else if(parent.children[2].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='O'&& parent.children[5].children[0].textContent=='O'&&parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='O'&& parent.children[8].children[0].textContent=='O'&&parent.children[5].children[0].textContent==''){parent.children[5].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='O'&& parent.children[6].children[0].textContent=='O'&&parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //box4
    else if(parent.children[3].children[0].textContent=='O'&& parent.children[6].children[0].textContent=='O'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    else if(parent.children[3].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[5].children[0].textContent==''){parent.children[5].children[0].textContent=text;}
    else if(parent.children[3].children[0].textContent=='O'&& parent.children[5].children[0].textContent=='O'&&parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //box5
    else if(parent.children[4].children[0].textContent=='O'&& parent.children[8].children[0].textContent=='O'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    //box6
    else if(parent.children[5].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[3].children[0].textContent==''){parent.children[3].children[0].textContent=text;}
    
    //box7
    else if(parent.children[6].children[0].textContent=='O'&& parent.children[7].children[0].textContent=='O'&&parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    else if(parent.children[6].children[0].textContent=='O'&& parent.children[8].children[0].textContent=='O'&&parent.children[7].children[0].textContent==''){parent.children[7].children[0].textContent=text;}
    //box8
    else if(parent.children[7].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[1].children[0].textContent==''){parent.children[1].children[0].textContent=text;}
    else if(parent.children[7].children[0].textContent=='O'&& parent.children[8].children[0].textContent=='O'&&parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    //box9
    else if(parent.children[8].children[0].textContent=='O'&& parent.children[5].children[0].textContent=='O'&&parent.children[2].children[0].textContent==''){parent.children[2].children[0].textContent=text;}
    else if(parent.children[8].children[0].textContent=='O'&& parent.children[4].children[0].textContent=='O'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    // for person defense
    //box1
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[3].children[0].textContent=='X'&&parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[1].children[0].textContent=='X'&&parent.children[2].children[0].textContent==''){parent.children[2].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[2].children[0].textContent=='X'&&parent.children[1].children[0].textContent==''){parent.children[1].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[6].children[0].textContent=='X'&&parent.children[3].children[0].textContent==''){parent.children[3].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[8].children[0].textContent=='X'&&parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //box2
    else if(parent.children[1].children[0].textContent=='X'&& parent.children[2].children[0].textContent=='X'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    else if(parent.children[1].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[7].children[0].textContent==''){parent.children[7].children[0].textContent=text;}
    //box3
    else if(parent.children[2].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='X'&& parent.children[5].children[0].textContent=='X'&&parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='X'&& parent.children[8].children[0].textContent=='X'&&parent.children[5].children[0].textContent==''){parent.children[5].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='X'&& parent.children[6].children[0].textContent=='X'&&parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //box4
    else if(parent.children[3].children[0].textContent=='X'&& parent.children[6].children[0].textContent=='X'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    else if(parent.children[3].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[5].children[0].textContent==''){parent.children[5].children[0].textContent=text;}
    else if(parent.children[3].children[0].textContent=='X'&& parent.children[5].children[0].textContent=='X'&&parent.children[4].children[0].textContent==''){parent.children[4].children[0].textContent=text;}
    //box5
    else if(parent.children[4].children[0].textContent=='X'&& parent.children[8].children[0].textContent=='X'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    //box6
    else if(parent.children[5].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[3].children[0].textContent==''){parent.children[3].children[0].textContent=text;}
    //box7
    else if(parent.children[6].children[0].textContent=='X'&& parent.children[7].children[0].textContent=='X'&&parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    else if(parent.children[6].children[0].textContent=='X'&& parent.children[8].children[0].textContent=='X'&&parent.children[7].children[0].textContent==''){parent.children[7].children[0].textContent=text;}
    //box8
    else if(parent.children[7].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[1].children[0].textContent==''){parent.children[1].children[0].textContent=text;}
    else if(parent.children[7].children[0].textContent=='X'&& parent.children[8].children[0].textContent=='X'&&parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    //box9
    else if(parent.children[8].children[0].textContent=='X'&& parent.children[5].children[0].textContent=='X'&&parent.children[2].children[0].textContent==''){parent.children[2].children[0].textContent=text;}
    else if(parent.children[8].children[0].textContent=='X'&& parent.children[4].children[0].textContent=='X'&&parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    // extra conditions for defense
    else if(parent.children[0].children[0].textContent=='X'&& parent.children[8].children[0].textContent=='X'&&(parent.children[3].children[0].textContent=='' && parent.children[5].children[0].textContent=='')){parent.children[3].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='X'&& parent.children[6].children[0].textContent=='X'&&(parent.children[3].children[0].textContent=='' && parent.children[5].children[0].textContent=='')){parent.children[3].children[0].textContent=text;}
    else if(parent.children[0].children[0].textContent=='X'&&parent.children[8].children[0].textContent==''&&(parent.children[5].children[0].textContent=='X' || parent.children[7].children[0].textContent=='X')){parent.children[8].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent=='X'&&parent.children[6].children[0].textContent==''&&(parent.children[7].children[0].textContent=='X' || parent.children[3].children[0].textContent=='X')){parent.children[6].children[0].textContent=text;}
    else if(parent.children[6].children[0].textContent=='X'&&parent.children[2].children[0].textContent==''&&(parent.children[1].children[0].textContent=='X' || parent.children[5].children[0].textContent=='X')){parent.children[2].children[0].textContent=text;}
    
    else if(parent.children[0].children[0].textContent==''){parent.children[0].children[0].textContent=text;}
    else if(parent.children[2].children[0].textContent==''){parent.children[2].children[0].textContent=text;}
    else if(parent.children[6].children[0].textContent==''){parent.children[6].children[0].textContent=text;}
    else if(parent.children[8].children[0].textContent==''){parent.children[8].children[0].textContent=text;}
    
}

let reset = document.querySelector('#reset');
reset.addEventListener('click', restart);
//function for reset button
function restart() {
    for (let index of container.children) {
        index.children[0].textContent = "";
        index.children[0].style = "color:black";
    }
    let turn = document.querySelector('.info');
    turn.textContent = 'turn for x';
}
// function for checking wins
function checkWin() {
    if (container.children[0].children[0].textContent != "" && container.children[0].children[0].textContent == container.children[1].children[0].textContent && container.children[1].children[0].textContent == container.children[2].children[0].textContent) { container.children[0].children[0].style = "color:red"; container.children[1].children[0].style = "color:red"; container.children[2].children[0].style = "color:red"; return true; }
    else if (container.children[0].children[0].textContent != "" && container.children[0].children[0].textContent == container.children[3].children[0].textContent && container.children[3].children[0].textContent == container.children[6].children[0].textContent) { container.children[0].children[0].style = "color:red"; container.children[3].children[0].style = "color:red"; container.children[6].children[0].style = "color:red"; return true; }
    else if (container.children[0].children[0].textContent != "" && container.children[0].children[0].textContent == container.children[4].children[0].textContent && container.children[4].children[0].textContent == container.children[8].children[0].textContent) { container.children[0].children[0].style = "color:red"; container.children[4].children[0].style = "color:red"; container.children[8].children[0].style = "color:red"; return true; }
    else if (container.children[1].children[0].textContent != "" && container.children[1].children[0].textContent == container.children[4].children[0].textContent && container.children[4].children[0].textContent == container.children[7].children[0].textContent) { container.children[1].children[0].style = "color:red"; container.children[4].children[0].style = "color:red"; container.children[7].children[0].style = "color:red"; return true; }
    else if (container.children[2].children[0].textContent != "" && container.children[2].children[0].textContent == container.children[5].children[0].textContent && container.children[5].children[0].textContent == container.children[8].children[0].textContent) { container.children[2].children[0].style = "color:red"; container.children[5].children[0].style = "color:red"; container.children[8].children[0].style = "color:red"; return true; }
    else if (container.children[2].children[0].textContent != "" && container.children[2].children[0].textContent == container.children[4].children[0].textContent && container.children[4].children[0].textContent == container.children[6].children[0].textContent) { container.children[2].children[0].style = "color:red"; container.children[4].children[0].style = "color:red"; container.children[6].children[0].style = "color:red"; return true; }
    else if (container.children[3].children[0].textContent != "" && container.children[3].children[0].textContent == container.children[4].children[0].textContent && container.children[4].children[0].textContent == container.children[5].children[0].textContent) { container.children[3].children[0].style = "color:red"; container.children[4].children[0].style = "color:red"; container.children[5].children[0].style = "color:red"; return true; }
    else if (container.children[6].children[0].textContent != "" && container.children[6].children[0].textContent == container.children[7].children[0].textContent && container.children[7].children[0].textContent == container.children[8].children[0].textContent) { container.children[6].children[0].style = "color:red"; container.children[7].children[0].style = "color:red"; container.children[8].children[0].style = "color:red"; return true; }
    return false;
}