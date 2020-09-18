// var secret=4;

// var num=prompt("enter a number!");
// // alert(num);

// if(Number(num)==secret){
// 	alert("you guessed it right");
// }
// else if(Number(num)<secret){
// 	alert("too low! guess it again");
// }
// else
// {
// 	alert("too high! guess it again");


//   var b1 = document.querySelector("#b1");
//   var b2 = document.querySelector("#b2");	
//   var reset = document.querySelector("#reset");
//   var numin =document.querySelector("input"); 

//   var b1display = document.getElementById("b1d");
//   var b2display = document.querySelector("#b2d");
//   var winningscore = document.querySelector("#pnum");

//   var b1score=0;
//   var b2score=0;

//   var gameover = false;
//   var wingame = 5;

//   b1.addEventListener("click",function(){
//   		if(!gameover){
//   		b1score++;
//   		if(b1score === wingame)
//   			{b1display.classList.add("winner");
//   			gameover=true;}
//   		}
//   		b1display.textContent = b1score; 		
//   });



//  b2.addEventListener("click",function(){
//  	if(!gameover){
//   		b2score++;
//   		if(b2score === wingame)
//   			{b2display.classList.add("winner");
//   			gameover=true;}
//   		}
//   		b2display.textContent = b2score;   
//   });

//   reset.addEventListener("click",function(){
//   		b1score = 0;
//   		b2score=0;
//   		gameover=false;
//   		b1display.textContent = b1score;
//   		b2display.textContent = b2score; 
//   		b1display.classList.remove("winner");
//   		b2display.classList.remove("winner");  
//   });

//   function resetme(){
//   		b1score = 0;
//   		b2score=0;
//   		gameover=false;
//   		b1display.textContent = b1score;
//   		b2display.textContent = b2score; 
//   		b1display.classList.remove("winner");
//   		b2display.classList.remove("winner");  
//   }

// numin.addEventListener("change",function(){
// 	winningscore.textContent = numin.value;
// 	wingame = Number(numin.value) ;
// 	resetme();
// });

 // var colors = ["rgb(255, 0, 0)",
 // 				"rgb(255, 255, 0)",
 // 				"rgb(0, 255, 0)",
 // 				"rgb(0, 255, 255)",
	// 			"rgb(0, 0, 255)",
 // 				"rgb(255, 0, 255)",
 // 	]
 var numsquares = 6;
var colors = generatecolors(numsquares);			
var squares = document.querySelectorAll(".square");
var pickedcolor= pickcolor();
var message=document.querySelector("#message");
var colordisplay = document.querySelector("#rgb");
var h1 = document.querySelector("h1");
var button1 = document.querySelector("#b1");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


colordisplay.textContent=pickedcolor;

for(var i=0; i<squares.length; i++){
	//add colors
	squares[i].style.backgroundColor = colors[i]; 

	//add click listeners 
	squares[i].addEventListener("click",function(){
	 var clickedcolor = this.style.backgroundColor;
	 	if(clickedcolor===pickedcolor){
	 		button1.textContent = "Play Again?"
	 		message.textContent = "CORRECT!";
	 		changecolor(clickedcolor);	 	
	 		h1.style.backgroundColor = clickedcolor;
	 	}
	 	else{
	 		this.style.backgroundColor ="#232323";
	 		message.textContent = "Try Again";

	 	}
	});
}

button1.addEventListener("click",function(){
	colors = generatecolors(numsquares);
	pickedcolor = pickcolor();
	colordisplay.textContent  = pickedcolor;
	h1.style.backgroundColor = "steelblue";
	button1.textContent = "NEW COLORS";
	for(var i=0;i<squares.length;i++)
	{squares[i].style.background = colors[i];}
})

 easy.addEventListener("click" , function(){
 	hard.classList.remove("selected");
 	easy.classList.add("selected");
 	numsquares=3;
 	colors=generatecolors(numsquares);
 	pickedcolor = pickcolor();
 	colordisplay.textContent = pickedcolor;  
 	for(var i=0;i<squares.length;i++){
 		if(colors[i]){
 		squares[i].style.background = colors[i];
 		}else{
 			squares[i].style.display="none";    
 		}
 	}     
 });

 hard.addEventListener("click" , function(){
 	hard.classList.add("selected");
 	easy.classList.remove("selected");
 	numsquares = 6;
 	colors=generatecolors(numsquares);
 	pickedcolor = pickcolor();
 	colordisplay.textContent = pickedcolor;  
 	for(var i=0;i<squares.length;i++){
 
 		squares[i].style.background = colors[i];
 		
 			squares[i].style.display="block";    
 	}
 });

function changecolor(color){

	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}


function pickcolor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generatecolors(num){
	var arr=[]

	for(var i=0;i < num; i++){
		arr.push(randomcolor())
	}

	return arr;
}

function randomcolor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a green from 0 to 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
 }