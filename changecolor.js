function change(){
  
    var txt;
var r = confirm("change background color!");
if (r == true) {
  txt = "You pressed OK!";
  document.body.style.background = color;
} else {
  txt = "You pressed Cancel!";
  document.body.style.background = rgb(236, 160, 202);
}
    
}