'use strict';

// visibilidad del menu
let posicionPreviaScroll = window.scrollY;
let botonMenu = document.getElementById('menuBtn')
// ocultar o mostrar el menú según el scroll
window.onscroll = function() {
	let pantallaAncho = window.innerWidth
	let posicionActualScroll = window.scrollY;
	// Condicional que evita un comportamiento indeseado al cambiar el tamaño de pantalla del navegador
	if (pantallaAncho > 768) {
		botonMenu.checked = false;
	}
	// Evalúa la posición anterior y la posición actual del scroll y decide qué acción tomar
	if (posicionActualScroll > 1) {
		if (posicionActualScroll > posicionPreviaScroll && !botonMenu.checked) {
			document.getElementById('menu').classList.add('esconder')
		} else {
			document.getElementById('menu').classList.remove('esconder')
			
		}
		posicionPreviaScroll = posicionActualScroll;
	};
};
