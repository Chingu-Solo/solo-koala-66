//input for type box function
function updateCardText() {
    updateFontSize();
    var x = document.getElementById("myinput").value;
    if (x == "") {
        x = "Then came the night of the first falling star.";
    }
    for (i = 1; i < 9; i++) {
        document.getElementById("head" + i).innerHTML = x;
    }
    
}

//font resize
function updateFontSize() {
    fontSize = document.getElementById("fontlist").value;
    for (i = 1; i < 9; i++) {
        document.getElementById("head"+i).style.fontSize = fontSize;
    }
}

//reset 
function reset() {
    document.getElementById("fontlist").value = "20px";
    document.getElementById("myinput").value = "";
    updateCardText();

}

//list and grid toogle 
var font=document.getElementsByClassName("fontarea")[0];
var fon=document.getElementsByClassName("fontarea")[0];
var glist  = document.getElementById("grid");
function grid() {
    //list view 
    glist.classList.toggle("fa-window-maximize");
   font.style.display="block";
   font.style.height="100vh";
   font.style.margin="20px";
   font.style.padding="20px";
   
   for(i=1; i<9;i++){
       document.getElementById("heading"+i).style.padding="20px";
   }

//   grid view 
//double click to change the view back to grid 
     glist.addEventListener("dblclick", function (){
        fon.style.display="grid";
       fon.style.padding="20px";
       fon.style.margin="30px";
       fon.style.grid="40px";
       fon.style.height="450px";
      
     },false );
}


//light mode 
      
function light(){

     document.body.style.backgroundColor='white';
    document.body.style.color='black';
    document.getElementsByClassName("container")[0].style.backgroundColor="white";
    document.getElementById("myinput").style.backgroundColor="white";
    document.getElementById("search").style.backgroundColor="white";
    document.getElementById("fontlist").style.backgroundColor="white";
    document.getElementById("fontlist").style.color="black";
    document.getElementsByClassName("fa")[0].style.color="black";
    document.getElementsByClassName("fa")[1].style.color="black";
    for(i=1; i<9; i++){
        document.getElementById("heading"+i).style.borderTop="1px black solid";
        document.getElementsByClassName("btn")[i-1].style.backgroundColor="white";
    }
  

}
//dark mode 
function dark() {
    document.body.style.backgroundColor='black';
    document.body.style.color='grey';
    document.getElementsByClassName("container")[0].style.backgroundColor="black";
    document.getElementById("myinput").style.backgroundColor="black";
    document.getElementById("myinput").style.color="grey";
    document.getElementById("search").style.backgroundColor="black";
    document.getElementById("fontlist").style.backgroundColor="black";
    document.getElementById("fontlist").style.color="grey";
    document.getElementsByClassName("fa")[0].style.color="grey";
    document.getElementsByClassName("fa")[1].style.color="grey";
    for(i=1; i<9; i++){
    document.getElementById("heading"+i).style.borderTop="1px grey solid" ;
    document.getElementsByClassName("btn")[i-1].style.backgroundColor="black";

}

    
}