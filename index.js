const template = document.querySelector('#tags-template').content;
const menuItems = document.querySelectorAll('.menu__item');
const tags = document.querySelector('.tags');
const novice = document.getElementById('novice');
const noviceTxt = document.querySelector('label[for=' + novice.value + ']').querySelector('.menu__inner-item-text').textContent;
const advance = document.getElementById('advance');
const advanceTxt = document.querySelector('label[for=' + advance.value + ']').querySelector('.menu__inner-item-text').textContent;
const profi = document.getElementById('profi');
const profiTxt = document.querySelector('label[for=' + profi.value + ']').querySelector('.menu__inner-item-text').textContent;
const buttons = document.querySelectorAll('.card-list__card-button');

// Функция открытия-закрытия списков фильтров
function closeOpenFilters(menuItem) {
	if (menuItem.querySelector('.menu__item-icon')) {
		menuItem.querySelector('.menu__item-icon').classList.toggle('menu__item-icon_active');
	}
	if (menuItem.querySelector('.menu__inner')) {
		menuItem.querySelector('.menu__inner').classList.toggle('menu__inner_active');
	}
}
// Функция создания тэгов
function createTag(tagTxt, name) {
	const newTag = template.querySelector('.tags__item').cloneNode(true);
	newTag.setAttribute('name', name);
	const delButton = newTag;
	newTag.querySelector('.tags__text').textContent = tagTxt;
	// Кнопка удаления тэга
	delButton.addEventListener('click', () => {
		delButton.remove();
		document.getElementById(name).checked = false;
	});
	return newTag;
}
// Функция удаления тэгов
function deleteTag(name) {
	document.getElementsByName(name)[0].remove();
}

menuItems.forEach((item) => {
	item.addEventListener('click', evt => {
		closeOpenFilters(item);
	});
});
novice.addEventListener('change', function () {
	if (this.checked) {
		tags.append(createTag(noviceTxt, this.id));
	} else {
		deleteTag(this.id);
	}
});
advance.addEventListener('change', function () {
	if (this.checked) {
		tags.append(createTag(advanceTxt, this.id));
	} else {
		deleteTag(this.id);
	}
});
profi.addEventListener('change', function () {
	if (this.checked) {
		tags.append(createTag(profiTxt, this.id));
	} else {
		deleteTag(this.id);
	}
});


// кнопка

buttons.forEach(button => {
	button.addEventListener('click', function () {
		if (button.classList.contains('card-list__card-button_sign-up')) {
			button.classList.remove('card-list__card-button_sign-up');
			button.classList.add('card-list__card-button_continue');
			button.textContent = 'Продолжить';
		}
	})
});


