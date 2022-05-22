/****MODAL*************************************/


const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');
modal.classList.add('modal--show');


/*openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});*/

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

/**FIN MODAL*************/
/****PARALLAX******************************/

const contenedor_hand_movil = document.getElementById("contenedor_hand_movil"); 
const contenedor_hand = document.getElementById("contenedor_hand");
const contenedor_paper_1 = document.getElementById("contenedor_paper_1"); 
const contenedor_paper_2 = document.getElementById("contenedor_paper_2"); 
const contenedor_paper_3 = document.getElementById("contenedor_paper_3"); 
const contenedor_paper_4 = document.getElementById("contenedor_paper_4");
const contenedor_paper_5 = document.getElementById("contenedor_paper_5");
const contenedor_paper_6 = document.getElementById("contenedor_paper_6");
const contenedor_paper_7 = document.getElementById("contenedor_paper_7");
const contenedor_paper_8 = document.getElementById("contenedor_paper_8"); 

window.addEventListener('scroll', function(){

	let value = window.scrollY;
	
	contenedor_hand_movil.style.bottom = 10 + value * -0.01 + '%';
	contenedor_hand.style.bottom = 32 + value * -0.01 + '%';
	contenedor_paper_1.style.bottom = 25 + value * 0.03 + '%';
	contenedor_paper_2.style.bottom = 37 + value * 0.01 + '%';
	contenedor_paper_3.style.bottom = 43 + value * -0.005 + '%';
	contenedor_paper_4.style.bottom = 34 + value * 0.015 + '%';
	contenedor_paper_5.style.bottom = 27 + value * 0.03 + '%';
	contenedor_paper_6.style.bottom = 34 + value * 0.01 + '%';
	contenedor_paper_7.style.bottom = 40 + value * 0.005 + '%';
	contenedor_paper_8.style.bottom = 45 + value * -0.005 + '%';
	
	contenedor_paper_1.style.right = 25 + value * -0.02 + '%';
	contenedor_paper_2.style.right = 52 + value * -0.08 + '%';
	contenedor_paper_3.style.right = 45 + value * -0.05 + '%';
	contenedor_paper_4.style.right = 60 + value * -0.08 + '%';
	contenedor_paper_5.style.right = 35 + value * -0.01 + '%';
	contenedor_paper_6.style.right = 42 + value * -0.03 + '%';
	contenedor_paper_7.style.right = 26 + value * -0.009 + '%';
	contenedor_paper_8.style.right = 30 + value * -0.02 + '%';

	if(contenedor_paper_1.style.right.replace(/%/g,'') < 26){
		contenedor_paper_1.style.right = 26 +'%';
	};
	if(contenedor_paper_2.style.right.replace(/%/g,'') < 26){
		contenedor_paper_2.style.right = 26 +'%';
	};
	if(contenedor_paper_3.style.right.replace(/%/g,'') < 26){
		contenedor_paper_3.style.right = 26 +'%';
	};
	if(contenedor_paper_4.style.right.replace(/%/g,'') < 26){
		contenedor_paper_4.style.right = 26 +'%';
	};
	if(contenedor_paper_5.style.right.replace(/%/g,'') < 26){
		contenedor_paper_5.style.right = 26 +'%';
	};
	if(contenedor_paper_6.style.right.replace(/%/g,'') < 26){
		contenedor_paper_6.style.right = 26 +'%';
	};
	if(contenedor_paper_7.style.right.replace(/%/g,'') < 26){
		contenedor_paper_7.style.right = 26 +'%';
	};

	if(contenedor_paper_8.style.right.replace(/%/g,'') < 22){
		contenedor_paper_8.style.right = 26 +'%';
	};
	
});

/****FIN PARALLAX******************************/



/****MENU*******************************************/


const hamburger = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  
  

  
  
  /*links.forEach(link => {
    link.classList.toggle("fade");
  });*/
});


const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
hamburger.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    hamburger.classList.remove('open');
    menuOpen = false;
  }
});

/***FIN MENU*******/

/***NAVBAR*********************************************/

var prevScrollpos = window.pageYOffset;

var timing = 0;


if(timing == 0){
		
		document.getElementById("navbar").style.top="-90px";

		timing = 1;
	}


window.onscroll = function(){



	var currentScrollPos = window.pageYOffset;

	if(prevScrollpos > currentScrollPos) {

		document.getElementById("navbar").style.top="0";
		document.getElementById("navbar").style.opacity="1";
		


	}else if(menuOpen==false){
		document.getElementById("navbar").style.top="-90px";
		document.getElementById("navbar").style.opacity="0";
	}
	
	prevScrollpos = currentScrollPos;

}

/*****MOVIMIENTO DE SLIDER*****************/ 

var botonAceptar = document.getElementById("boton_principal");
var botonCancelarCont2 = document.getElementById("boton2_contenido2");
var botonCancelarCont3 = document.getElementById("boton2_contenido3");
var botonCancelarCont4 = document.getElementById("boton2_contenido4");
var radio1 = document.getElementById("radio1");
var radio2 = document.getElementById("radio2");
var radio3 = document.getElementById("radio3");
var radio4 = document.getElementById("radio4");

radio1.disabled = true;
radio2.disabled = true;
radio3.disabled = true;
radio4.disabled = true;

var selectRadio1 = document.getElementById('selectRadio1'); 

var selectRadio2 = document.getElementById('selectRadio2'); 

var selectRadio3 = document.getElementById('selectRadio3'); 

var selectRadio4 = document.getElementById('selectRadio4'); 

selectRadio1.style.background = "#bfc2c2";


botonAceptar.addEventListener('click',() =>{

	var valorPuntuacion = document.getElementById('inputRange');
	
	if(valorPuntuacion.value <= 6){

		
		notDisabledContenido2();

		document.getElementById("radio2").checked = true;
		
		/*selectRadio1.style.background = "";

		selectRadio2.style.background = "#bfc2c2";*/
		
		

	}

	else if(valorPuntuacion.value == 7 || valorPuntuacion.value == 8){

		disabledContenido2();
		notdisabledContenido3();

		document.getElementById("radio3").checked = true;

		/*selectRadio1.style.background = "";
		
		selectRadio3.style.background = "#bfc2c2";*/
		


	}
	else{

		disabledContenido2();
		disabledContenido3();
		document.getElementById("radio4").checked = true;

		/*selectRadio1.style.background = "";
		
		selectRadio4.style.background = "#bfc2c2";*/

	}


});

/*****FIN MOVIMIENTO DE SLIDER**************/

/****MOSTRAR Y OCULTAR CAMPO DE TEXTO DE CONTENIDO 1****************/

var checkboxOtros = document.getElementById("checkbox5");

checkboxOtros.addEventListener('change',function(){

	if(this.checked){

		document.getElementById("txtOtros").style.transition= "visibility 0s, opacity 0.2s linear;";
		document.getElementById("txtOtros").style.visibility= "visible";
		document.getElementById("txtOtros").style.opacity= "1";
	}
	else{
		document.getElementById("txtOtros").style.visibility= "hidden";
		document.getElementById("txtOtros").style.opacity= "0";
		
	}
});

/*****FIN MOSTRAR Y OCULTAR CAMPO DE TEXTO DE CONTENIDO 1**********/

/****FUNCIONAMIENTO BOTON CANCELAR*************************/
botonCancelarCont2.addEventListener('click',() =>{
cancelar();
});

botonCancelarCont3.addEventListener('click',() =>{
	cancelar();
	});

botonCancelarCont4.addEventListener('click',() =>{
	cancelar();
	});

function cancelar(){

	document.getElementById("radio1").checked = true;
	selectRadio1.style.background = "#bfc2c2";
	selectRadio2.style.background = "";
	selectRadio3.style.background = "";
	selectRadio4.style.background = "";

};

/*****FIN FUNCIONAMIENTO BOTON CANCELAR*************/
/**DESABILITAR FUNCIONAMIENTO DE CONTENIDO NO MOSTRADO (EVITA BUGS)*********************/ 

function disabledContenido2(){

	document.getElementById("txtArea_contenido2").disabled = true;
	document.getElementById("checkbox1").disabled = true;
	document.getElementById("checkbox2").disabled = true;
	document.getElementById("checkbox3").disabled = true;
	document.getElementById("checkbox4").disabled = true;
	document.getElementById("checkbox5").disabled = true;
}

function notDisabledContenido2(){
	
	document.getElementById("txtArea_contenido2").disabled = false;
	document.getElementById("checkbox1").disabled = false;
	document.getElementById("checkbox2").disabled = false;
	document.getElementById("checkbox3").disabled = false;
	document.getElementById("checkbox4").disabled = false;
	document.getElementById("checkbox5").disabled = false;
}


function disabledContenido3(){

	document.getElementById("txtArea_contenido3").disabled = true;

}

function notdisabledContenido3(){

	document.getElementById("txtArea_contenido3").disabled = false;

}
/**FIN DESABILITAR FUNCIONAMIENTO DE CONTENIDO NO MOSTRADO*********/

/****ICONO IR HACIA ARRIBA*********************** */
/*
function irArriba(pxPantalla){
	window.addEventListener('scroll',()=> {
		var scroll = document.documentElement.scrollTop;
		var icon_arriba = document.getElementById('icon_arriba');

		console.log(scroll);

		if(scroll > pxPantalla){
			icon_arriba.style.right = 20 + "px";

		} else{
			icon_arriba.style.right = -100 + "px";
		}
	});
}

irArriba(500);*/
