var numsquares=9;
var colors= generaterandomcolors(numsquares);
var pickedcolor= pickcolor();
var colordisplay= document.getElementById("colordisplay");
var messagedisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons=document.querySelectorAll(".mode");

for(var i=0;i<modebuttons.length;i++){
	modebuttons[i].addEventListener("click",function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		modebuttons[2].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="Easy"){
			numsquares=3;
		}
		else if(this.textContent==="Hard"){
			numsquares=6;
		}
			else{
				numsquares=9;
		}
		reset();
	})

}



function reset(){
	colors=generaterandomcolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent=pickedcolor;
	resetbutton.textContent="New colors";
	messagedisplay.textContent= "";
	h1.style.background="steelblue";
	for(var i=0;i<squares.length;i++){
	if(colors[i]){
	squares[i].style.display="block";
	squares[i].style.background = colors[i];}
	else{
		squares[i].style.display="none";
	}
  }
}





resetbutton.addEventListener("click",function(){
	reset();
});
	


colordisplay.textContent= pickedcolor;
var squares=document.querySelectorAll(".square");

for(var i=0;i<squares.length;i++){

	squares[i].style.background = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedcolor= this.style.background;
		if(clickedcolor===pickedcolor){
			h1.style.background= clickedcolor;
			resetbutton.textContent="play again";
			messagedisplay.textContent="correct";
			changecolors(clickedcolor);	
		}
		else{
			this.style.background="#232323";
			messagedisplay.textContent="try again";
		}

	})
}


function changecolors(color){
	for(var i=0;i < squares.length;i++){
		squares[i].style.background=color;
	}
}


function pickcolor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}


function  generaterandomcolors(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r= Math.floor(Math.random() * 256);
	var g= Math.floor(Math.random() * 256);
	var b= Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}