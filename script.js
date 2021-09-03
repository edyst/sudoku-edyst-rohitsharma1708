const easy = [
    "-6----38-1-5---4-23-4----1-5-16-294---983-27582------12--3--75----2--1-94961-7-2-",
    "962415387185763492374928576531672948649831275827549631218396754753284169496157823"
  ];
  const medium = [
    "--241-----8576---937-9-----4---5--3--1--96--5---2841----75----3---6-------9--12-7",
    "962415378185763429374928561496157832218396745753284196827549613531672984649831257"
  ];
  const hard = [
    "--56---4--9--3---2--8---13--6-------18-----5-5-7---9--6---15----439--------76---4",
    "315672849496831572278549136964157328182396457537284961629415783743928615851763294"
  ];
var cellSelect;
var difficultyLevel = easy[0];
var value = [""];
let diffNum = 1;
window.onload = function () {
    startGame(); 
}
function changeDifficultyLevel(n) {
    switch(n)
    {
        case 1 :  window.difficultyLevel = easy[0];
        break;
        case 2 :  window.difficultyLevel = medium[0];
        break;
        case 3 :  window.difficultyLevel = hard[0];
        break;
        default: window.difficultyLevel = easy[0];
    }
    diffNum = n;
    startGame();
}
function updateMove() {
    if(cellSelect)
    {
        document.addEventListener('keydown', (event) => {
            var name = event.key;
            if(name>0 && name<10 && cani(name))
            {
            cellSelect.textContent = name;
            addToArray(name);
            addToCache();          
            } else if(name==0){
                cellSelect.textContent = null;
                removeFromArray();
            }
          }, false);       
    }
    highSelect();
}
function startGame() {
    let board;    
    board = difficultyLevel;    
    fillAns(difficultyLevel);    
    emptyBoard(board);
    if(sessionStorage.getItem("cache")){
        var saved  = sessionStorage.getItem("cache");
        var diff = sessionStorage.getItem("diff");
        if(diff != diffNum){
        if(diff==1) {
            changeDifficultyLevel(1);
        } else if(diff==2) {
            changeDifficultyLevel(2);
        } else if(diff==3) {
            changeDifficultyLevel(3);
        }
            } else {
            saved = saved.split(",");
            value = saved;
            for(i=0;i<81;i++){
            if(saved[i]!="-" && saved[i]!=difficultyLevel[i]){
            qA(".cell")[i].classList.add("modified"); 
            id(i).textContent = saved[i];
            }
        }
        }
    }
}
function highSelect() {
    for(let i=0;i<81;i++) {
    qA(".cell")[i].classList.remove("highlighted");
    qA(".cell")[i].classList.remove("dup");
    }
    let col = parseInt(cellSelect.id % 9);
    let row = parseInt(cellSelect.id / 9);
    let selectedCell = cellSelect.id;
    for(let i=0;i<81;i++){
        if(parseInt(cellSelect.textContent)==value[i])
        id(i).classList.add("dup");
    }
    for(let i=col;i<col+73;i+=9)
    {
        if(i!=selectedCell) {
            id(i).classList.add("highlighted");
        }       
    }
    for(let i=row*9;i<row*9+9;i++)
    {
        if(i!=selectedCell) {
            id(i).classList.add("highlighted");
        }
    }
    let x = 0;
    let y = 3;
    if( (-1<selectedCell && selectedCell<3) || (8<selectedCell && selectedCell<12) || (17<selectedCell && selectedCell<21) ) {    
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }
        }
    x = 3;
    y = 6;
    if( (2<selectedCell && selectedCell<6) || (11<selectedCell && selectedCell<15) || (20<selectedCell && selectedCell<24) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }
    }
    x = 6;
    y = 9;
    if( (5<selectedCell && selectedCell<9) || (14<selectedCell && selectedCell<18) || (23<selectedCell && selectedCell<27) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }       
    }
    x=27;
    y=30;
    if( (26<selectedCell && selectedCell<30) || (35<selectedCell && selectedCell<39) || (44<selectedCell && selectedCell<48) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 30;
    y = 33;
    if( (29<selectedCell && selectedCell<33) || (38<selectedCell && selectedCell<42) || (47<selectedCell && selectedCell<51) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 33;
    y = 36;
    if( (32<selectedCell && selectedCell<36) || (41<selectedCell && selectedCell<45) || (50<selectedCell && selectedCell<54) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 54;
    y = 57;
    if( (53<selectedCell && selectedCell<57) || (62<selectedCell && selectedCell<66) || (71<selectedCell && selectedCell<75) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 57;
    y = 60;
    if( (56<selectedCell && selectedCell<60) || (65<selectedCell && selectedCell<69) || (74<selectedCell && selectedCell<78) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }    
    }
    x = 60;
    y = 63;
    if( (59<selectedCell && selectedCell<63) || (68<selectedCell && selectedCell<72) || (77<selectedCell && selectedCell<81) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(j!=selectedCell) {
                    id(j).classList.add("highlighted");
                }
                }
            }   
    }
}
function emptyBoard(board) {
    resetBoard();
    let idCell = 0;
    for(let i=0;i<81;i++){
        let cell  = document.createElement("p");
        if(board.charAt(i)!="-") {
            cell.textContent = board.charAt(i);
            cell.classList.add("prefilled");
        }   else {
            cell.addEventListener("click", function(){
                if(cell.classList.contains("selected")) {
                    cell.classList.remove("selected");
                    cellSelect = null;
                } else {
                    for(let i=0;i<81;i++) {
                        qA(".cell")[i].classList.remove("selected");
                    }                  
                }
                cell.classList.add("selected");
                cellSelect = cell;
                updateMove();
            }); 
        }
        cell.id = idCell;
        idCell++;
        cell.classList.add("cell");
        if((cell.id > 17 && cell.id < 27) || (cell.id > 44 && cell.id < 54 )) {
            cell.classList.add("bottomBorder");
        }
        if( ((cell.id + 1) % 9 == 3) || ((cell.id + 1) % 9 == 6) ) {
            cell.classList.add("rightBorder");
        }
        if((cell.id + 1) % 9 == 0 || (cell.id + 1) % 9 == 0) {
              cell.classList.add("rightBorder");
         }
        if((cell.id + 2) % 9 == 2 || (cell.id + 2) % 9 == 2) {
            cell.classList.add("leftBorder");
       }
        if((cell.id > 71 && cell.id < 81)) {
            cell.classList.add("bottomBorder");
        }
        if((cell.id > -1 && cell.id < 9)) {
            cell.classList.add("topBorder");
        }
        id("board").appendChild(cell);
    }
}
function resetBoard() {
    let cells = qA(".cell")
    for(let i=0;i<cells.length;i++)
    {
        cells[i].remove();
    }
}
function resetGame(){
    let diff = sessionStorage.getItem("diff");
    sessionStorage.clear();
    changeDifficultyLevelLevel(diff);
}
function fillAns(str) {
    for(let i=0;i<str.length;i++) {
        value[i] = str[i];
    }  
}
function addToCache() {
    sessionStorage.setItem("cache",value);
    sessionStorage.setItem("diff",diffNum);
}
function addToArray(num) {
    let index = q(".selected").id;
    value.splice(index,1,num);
    q(".selected").classList.add("modified");
    duplicate(num);
}
function removeFromArray() {
    let index = q(".selected").id;
    value.splice(index,1,"-");
    q(".selected").classList.remove("modified");
}
function duplicate(num) {
    for(let i=0;i<81;i++){
        if(num==value[i])
        id(i).classList.add("dup");
    }
}
function validateGame() {
    let status= 1;
   for(let i=0;i<value.length;i++)
   {
       let sum=0;
    
   for(let i=0;i<9;i++){
       if(value!="-")
    sum+=parseInt(value[i]);
       for(let j=i+9;j<81;j+=9){
        if(value!="-")
           sum+=parseInt(value[j]);
       }
   }
   if(sum!=405){
    status = 0;
   }  
    }
    if(status==1){
        endGame();
        return;
       } else {
        alert("Something is not right, Try again.");
       }   
}
function endGame() {
    sessionStorage.clear();
    for(let i=0;i<81;i++){
        id(i).classList.add("prefilled");      
    }
    alert("You Win!, GGWP!");
}
function cani(num) {
    let pass = 1;
    let col = parseInt(cellSelect.id % 9);
    let row = parseInt(cellSelect.id / 9);
    let selectedCell = cellSelect.id;
    for(let i=col;i<col+73;i+=9)
    {
        if(num==value[i]){
            pass = 0;
            break;
        }
    }
    for(let i=row*9;i<row*9+9;i++)
    {
        if(num==value[i]){
            pass = 0;
            break;
        }
    }
    let x = 0;
    let y = 3;
    if( (-1<selectedCell && selectedCell<3) || (8<selectedCell && selectedCell<12) || (17<selectedCell && selectedCell<21) ) {    
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }
        }
    x = 3;
    y = 6;
    if( (2<selectedCell && selectedCell<6) || (11<selectedCell && selectedCell<15) || (20<selectedCell && selectedCell<24) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }
    }
    x = 6;
    y = 9;
    if( (5<selectedCell && selectedCell<9) || (14<selectedCell && selectedCell<18) || (23<selectedCell && selectedCell<27) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }       
    }
    x=27;
    y=30;
    if( (26<selectedCell && selectedCell<30) || (35<selectedCell && selectedCell<39) || (44<selectedCell && selectedCell<48) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 30;
    y = 33;
    if( (29<selectedCell && selectedCell<33) || (38<selectedCell && selectedCell<42) || (47<selectedCell && selectedCell<51) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 33;
    y = 36;
    if( (32<selectedCell && selectedCell<36) || (41<selectedCell && selectedCell<45) || (50<selectedCell && selectedCell<54) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    //box7
    x = 54;
    y = 57;
    if( (53<selectedCell && selectedCell<57) || (62<selectedCell && selectedCell<66) || (71<selectedCell && selectedCell<75) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 57;
    y = 60;
    if( (56<selectedCell && selectedCell<60) || (65<selectedCell && selectedCell<69) || (74<selectedCell && selectedCell<78) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }    
    }
    x = 60;
    y = 63;
    if( (59<selectedCell && selectedCell<63) || (68<selectedCell && selectedCell<72) || (77<selectedCell && selectedCell<81) ) {
        for(let i=x;i<y;i++){
            for(let j=i;j<i+19;j+=9){
                if(num==value[j]){
                    pass = 0;
                    break;
                }
                }
            }   
    }
    return pass;
}
function id(id) {
    return document.getElementById(id);
}
function q(selector) {
    return document.querySelector(selector);
}
function qA(selector) {
    return document.querySelectorAll(selector);
}
function printSession() {
    console.log(sessionStorage.getItem("cache"));
    console.log(sessionStorage.getItem("diff"));  
}
