const dateOfBirth = document.querySelector('#date-of-birth');

dateOfBirth.addEventListener('keyup', function (evt) {
	var v = this.value;
	console.log(v);
	if (v.match(/^\d{2}$/) !== null || v.match(/^\d{2}\.\d{2}$/) !== null) {
		this.value = v + '.';
	}
});



