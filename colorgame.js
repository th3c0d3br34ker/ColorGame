function loadMain() {
  var numsquares = 9;
  var colordisplay = document.getElementById("colordisplay");
  var messagedisplay = document.getElementById("message");
  var h1 = document.getElementById("h1");
  var resetbutton = document.getElementById("reset");
  var modebuttons = document.getElementsByClassName("mode");
  var squares = document.querySelectorAll(".square");
  var i = 0;

  function changecolors(color) {
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = color;
    }
  }

  function randomcolor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  function generaterandomcolors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push(randomcolor());
    }
    return arr;
  }

  var colors = generaterandomcolors(numsquares);

  function pickcolor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }

  var pickedcolor = pickcolor();

  function reset() {
    colors = generaterandomcolors(numsquares);
    pickedcolor = pickcolor();
    colordisplay.textContent = pickedcolor;
    resetbutton.textContent = "New colors";
    messagedisplay.textContent = "";
    h1.style.background = "steelblue";
    for (var i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }
  }

  function selectedSquare() {
    modebuttons[0].classList.remove("selected");
    modebuttons[1].classList.remove("selected");
    modebuttons[2].classList.remove("selected");
    if (this.textContent === "Easy") {
      numsquares = 3;
    } else if (this.textContent === "Hard") {
      numsquares = 6;
    } else {
      numsquares = 9;
    }
    reset();
  }

  for (var i = 0; i < modebuttons.length; i++) {
    modebuttons[i].onclick = () => {
      selectedSquare();
    };
  }

  function checkAnswer() {
    var clickedcolor = squares[i].background;
    if (clickedcolor === pickedcolor) {
      h1.style.background = clickedcolor;
      resetbutton.textContent = "play again";
      messagedisplay.textContent = "correct";
      changecolors(clickedcolor);
    } else {
      this.style.background = "#232323";
      messagedisplay.textContent = "Try Again";
    }

    for (var i = 0; i < squares.length; i++) {
      squares[i].style.background = colors[i];
      squares[i].onclick = () => {
        checkAnswer();
      };
    }
  }

  resetbutton.onclick = () => {
    reset();
  };
}

window.addEventListener("DOMContentLoaded", loadMain);
