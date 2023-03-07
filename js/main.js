'use strict';

// Obtener los elementos del formulario y los campos de entrada
const form = document.querySelector('.validate-form');
// const name = form.querySelector('input[name="name"]');
const email = form.querySelector('input[name="email"]');
const password = form.querySelector('input[name="password"]');

// Asignar un controlador de eventos al formulario
const iniciarSesionBtn = document.querySelector('#iniciarsesion');
iniciarSesionBtn.addEventListener('click', function (event) {
	event.preventDefault(); // Prevenir el envío del formulario

	let check = true;

	// Validar los campos de entrada
	// if (name.value.trim() === '') {
	// 	showValidate(name);
	// 	check = false;
	// }

	if (password.value.trim() === '') {
		showValidate(password);
		check = false;
	}

	const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!email.value.trim().match(mailformat)) {
		showValidate(email);
		check = false;
	}

	if (check) {
		// Si el formulario se valida correctamente, enviar los datos por medio de un submit
		form.submit();
	}
});

// Asignar controladores de eventos a los campos de entrada
const inputFields = form.querySelectorAll('.input1');
inputFields.forEach(function (field) {
	field.addEventListener('focus', function () {
		hideValidate(this);
	});
});

// Funciones para mostrar y ocultar la validación
function showValidate(input) {
	const thisAlert = input.parentElement;
	thisAlert.classList.add('alert-validate');
}
// Ocultar Validación
function hideValidate(input) {
	const thisAlert = input.parentElement;
	thisAlert.classList.remove('alert-validate');
}