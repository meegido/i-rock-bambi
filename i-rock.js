 document.addEventListener("DOMContentLoaded", function (event) {

   var bambi = document.getElementById("irockImg");

   	bambi.addEventListener("click", function (event){

   		var userName = prompt("What's your name?");

   		var bambiHidden = document.getElementById("bambi-hidden");
   		bambiHidden.style.display="inline";
   		this.style.display="none";

   		var newElement = document.createElement("p");
   		var texto = document.createTextNode("It's good to meet you " + userName);

   		newElement.appendChild(texto);

   		var addElement = document.getElementById("say-hello")
   		addElement.appendChild(newElement);

   		addElement.className="nuevo-texto";

   		var noText = document.getElementById("setinstruction");
   		var noInstruction = document.getElementById("instruction");
   		var noAll = noText.removeChild(instruction);
   		
		});
   	});







