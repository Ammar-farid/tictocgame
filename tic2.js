let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newbt=document.querySelector("#newbt");
let msgcon=document.querySelector(".msg-container")
let msg=document.querySelector("#msg");
let turno = true;
const wpattern =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];
     
const disablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const endisablebox=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const resetbt=()=>{

    turno=true;
    endisablebox();
    msgcon.classList.add("hide");
    reset.classList.remove("hide");

}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");

        if (turno) {
            box.innerText = "O"
            turno = false;

        }
        else {
            box.innerText = "X";
            turno = true;

        }
        box.disabled = true;
        checkwinner();


    });
});
const showwinner=(winner)=>{
    msg.innerText=`Congratulations , Winner is ${winner}`;
msgcon.classList.remove("hide");
disablebox(); 
reset.classList.add("hide");

}






const checkwinner = () => {

    for (let pattern of wpattern) {
        
        
        let p1= boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1 != ""&& p2 != "" && p3 != "")
        {
            if (p1==p2 && p2==p3)
            {
                console.log("winner",p1);
                showwinner(p1);

            }     
        }
            

    }

}
newbt.addEventListener("click",resetbt)
reset .addEventListener("click",resetbt)