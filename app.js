var input = document.createElement("input");
var start_button = document.createElement("button");
var stop_button = document.createElement("button");
var pic = document.createElement("img");
var fun = null;
var shiftDown = false;
input.setAttribute("id","input");
start_button.setAttribute("id","start");
start_button.innerHTML = "Start";
stop_button.innerHTML = "Stop";
stop_button.setAttribute("id","stop");
pic.setAttribute("src","1.png");
pic.setAttribute("id","pic")
pic.style.top = "50px";
pic.style.left = "50px";
document.body.appendChild(input);
document.body.appendChild(start_button);
document.body.appendChild(stop_button);
document.body.appendChild(pic);

function Application() {
  this.speed;
  this.degree;
  this.start = function(){
    this.degree = 0;
    this.speed = document.getElementById("input").value;
    if(this.speed < 10) this.speed = 10;
    if(this.speed > 50) this.speed = 50;
    pic.style.position ="absolute";
    console.log(this.degree);
    var obj = this;
    window.addEventListener("keydown", function (event){
      fun = arguments.callee;
      switch (event.keyCode) {
        case 37: if (shiftDown){
                    obj.degree = obj.degree + 10;
                    pic.style.transform = "rotate("+eval(obj.degree)+"deg)";
                    console.log(obj.degree);
                  } else pic.style.left = parseInt(pic.style.left) - eval(obj.speed) + 'px'; break;
        case 38: pic.style.top = parseInt(pic.style.top) - eval(obj.speed) + "px"; break;
        case 39: if (shiftDown){
                    obj.degree = obj.degree - 10;
                    pic.style.transform = "rotate("+eval(obj.degree)+"deg)";
                    console.log(obj.degree);
                  } else pic.style.left = parseInt(pic.style.left) + eval(obj.speed) + "px"; break;
        case 40: pic.style.top = parseInt(pic.style.top) + eval(obj.speed) + "px"; break;
          break;
        default: console.log(event.keyCode);
      }
    });
  }
  this.stop = function() {
    window.removeEventListener("keydown",fun);
  }
}
var app = new Application();
start_button.addEventListener("click", app.start);
stop_button.addEventListener("click", app.stop);
var setShiftDown = function(event){
    if(event.keyCode === 16 || event.charCode === 16){
        shiftDown = true;
        console.log("shiftdown");
    }
};
var setShiftUp = function(event){
    if(event.keyCode === 16 || event.charCode === 16){
        shiftDown = false;
        console.log("shiftup");
    }
};
document.addEventListener("keydown" , setShiftDown);
document.addEventListener("keyup" , setShiftUp);
