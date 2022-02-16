const dateOfBirth = document.querySelector('#date-of-birth');

//Создание маски ввода даты
dateOfBirth.addEventListener('keyup', function (evt) {
	var v = this.value;
	if (v.match(/^\d{2}$/) !== null || v.match(/^\d{2}\.\d{2}$/) !== null) {
		this.value = v + '.';
	}
});
