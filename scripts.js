const x = document.getElementById("tombol");
const y = document.getElementById("main");
x.addEventListener("click", function () {
  y.hidden=!y.hidden
  if(y.hidden){
    x.innerHTML("Seelengkapnya");
  }
  else{
    x.innerHTML("Lebih sedikit")
  }
});