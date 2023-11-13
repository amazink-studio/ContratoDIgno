'use strict'
// funcionalidad de los tabs
const contenedorFichas = document.querySelector('.fichas')
const menuFichas = contenedorFichas.querySelector('ul')
const botonesFichas = menuFichas.querySelectorAll('a')
const informacionFichas = contenedorFichas.querySelectorAll('.fichas__paneles > section')

// Contexto para lectores de pantalla
menuFichas.setAttribute('role', 'tablist')
menuFichas.querySelectorAll('li').forEach((listitem) => {
	listitem.setAttribute('role', 'presentation')
})
informacionFichas.forEach((panel) => {
	panel.setAttribute('role', 'tabpanel')
	panel.setAttribute('tabindex', '0')
})
botonesFichas.forEach((tab, index) => {
	tab.setAttribute('role', 'tab')
	if (index === 0) {
		tab.setAttribute('aria-selected', 'true')
		
	} else {
		tab.setAttribute('tabindex', '-1')
		tab.setAttribute('aria-selected', 'false')
		informacionFichas[index].setAttribute('hidden', '')
	}
})

// comportamiento de los botones
contenedorFichas.addEventListener('click', (e) => {
	const botonCliqueado = e.target.closest("a")
	if (!botonCliqueado || botonCliqueado.getAttribute('target') === '_blank') return
	e.preventDefault()

	console.log()
	cambiarFicha(botonCliqueado)
})

// Navegación con teclado para accesibilidad
contenedorFichas.addEventListener('keydown', (e) => {
	switch (e.key) {
		case "ArrowLeft":
			cambiarIzquierda()
			break
		case "ArrowRight":
			cambiarDerecha()	
	}
})
// Funcionalidad del teclado
function cambiarIzquierda() {
	const fichaActual = document.activeElement;

	if(fichaActual.parentElement.previousElementSibling) {
		cambiarFicha(fichaActual.parentElement.previousElementSibling.querySelector('a'))
	}
}
function cambiarDerecha() {
	const fichaActual = document.activeElement;

	if(fichaActual.parentElement.nextElementSibling) {
		cambiarFicha(fichaActual.parentElement.nextElementSibling.querySelector('a'))
	}
}

// función base del cambio de fichas
function cambiarFicha(nuevaFicha) {
	const idPanelActivo = nuevaFicha.getAttribute('href')
	const panelActivo = contenedorFichas.querySelector(idPanelActivo)

	botonesFichas.forEach((boton) => {
		boton.setAttribute('aria-selected', 'false')
		boton.setAttribute('tabindex', '-1')
	})
	informacionFichas.forEach((panel) => {
		panel.setAttribute('hidden', true)
	})
	panelActivo.removeAttribute('hidden')

	nuevaFicha.setAttribute('aria-selected', 'true')
	nuevaFicha.setAttribute('tabindex', '0')
	nuevaFicha.focus()
}