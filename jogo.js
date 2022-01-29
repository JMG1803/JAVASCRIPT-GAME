var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 100;
function ajusteRedi() {

	altura = window.innerHeight;
	largura = window.innerWidth;

	console.log(largura, altura)
}
ajusteRedi();



var bozotempo = 1500;
var nivel = window.location.search;
nivel =  nivel.replace('?', '');
if(nivel === 'normal'){
	bozotempo = 1500;
}else if (nivel === 'dificil'){
    bozotempo = 1000;
}else if(nivel === 'preto'){
 	bozotempo = 1;
}









var cronometro = setInterval(function(){
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro);
		clearInterval(criaBozo);
		window.location.href = 'ganhou.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo;
	}
}, 1000)



function randomica() {



	if(document.getElementById('bozoid')){
		document.getElementById('bozoid').remove();

		if(vidas >= 3){
			window.location.href = 'perdeu.html'
		}else{
			document.getElementById('v' + vidas).remove()
			vidas++
		}
	}



	var Px = Math.floor(Math.random() * largura) - 90;
	var Py = Math.floor(Math.random() * altura) - 90;
	Px = Px < 0 ? 0 : Px;
	Py = Py < 0 ? 0 : Py;

	console.log(Px, Py)
	var bozoquito = document.createElement('img');
	bozoquito.src = 'bozo1.png';
	bozoquito.className = tamanhoRandom() + ' ' + ladoRandom();
	bozoquito.style.left = Px + 'px';
	bozoquito.style.top = Py + 'px';
	bozoquito.style.position = 'absolute';
	bozoquito.id = 'bozoid'
	bozoquito.onclick = function(){
		this.remove();
	}
	document.body.appendChild(bozoquito)

}

function tamanhoRandom(){
	var tamanho = Math.floor(Math.random() * 3)
	switch(tamanho){
		case 0:
		return 'bozo'
		case 1:
		return 'bozo2'
		case 2:
		return 'bozo3'
	}
}

function ladoRandom(){
	var lado = Math.floor(Math.random() * 2)
	switch(lado){
		case 0:
		return 'bozolado1'
		case 1:
		return 'bozolado2'
	}
}

