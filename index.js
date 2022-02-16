const template = document.querySelector('#tags-template').content;
const menuItems = document.querySelectorAll('.menu__item');
const menuInnerItems = document.querySelectorAll('.menu__inner-item');
const tags = document.querySelector('.tags');
const noviceTxt = document.querySelector('#novice-txt').textContent;
const advanceTxt = document.querySelector('#advance-txt').textContent;
const profiTxt = document.querySelector('#profi-txt').textContent;
const eraseButton = document.querySelector('.menu__erase');
const buttons = document.querySelectorAll('.card-list__card-button');
const activeCheckbox = document.querySelector('#active');
const inactiveCheckbox = document.querySelector('#inactive');

// Функция открытия-закрытия меню
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
// Функция проверки на checked
function check() {
	let checked = false;
	checkboxes = menuInnerItems;
	for(var i=0, n=checkboxes.length; i<n; i++) {
	  if (checkboxes[i].checked) checked = true;
	}
	return checked;
}
// Функция удаления тэгов
function deleteTag(name) {
	document.getElementsByName(name)[0].remove();
}
// Функция добавления слушателя для чекбоксов
function addListener(item, name, text = 'noTag') {
	item.querySelector(name).addEventListener('change', function() {
		if (!check()){
			eraseButton.classList.remove('menu__erase_active');
		}
		// Если нужно создавать тэг
		if (this.checked && text !== 'noTag') {
			tags.append(createTag(text, this.id));
			eraseButton.classList.add('menu__erase_active');
		} else if (this.checked && text === 'noTag') {
			eraseButton.classList.add('menu__erase_active');
			// для отключения взаимоисключающих статусов
			if (name === '#inactive') {
				activeCheckbox.disabled = true;
			} else if (name === '#active') {
				inactiveCheckbox.disabled = true;
			}
		} else if (!this.checked && text === 'noTag') {
			if (name === '#inactive') {
				activeCheckbox.disabled = false;
			} else if (name === '#active') {
				inactiveCheckbox.disabled = false;
			}
		} else if (text !== 'noTag') {
			deleteTag(this.id);
		}
	});
}

// Слушатели чекбоксов
menuInnerItems.forEach((item) => {
  if(item.querySelector('#novice')) {
	addListener(item, '#novice', noviceTxt);
  }
  if(item.querySelector('#advance')) {
	addListener(item, '#advance', advanceTxt);
  }
  if(item.querySelector('#profi')) {
	addListener(item, '#profi', profiTxt);
  }
  if(item.querySelector('#inactive')) {
	addListener(item, '#inactive');
  }
  if(item.querySelector('#recorded')) {
	addListener(item, '#recorded');
  }
  if(item.querySelector('#active')) {
	addListener(item, '#active');
  }
  if(item.querySelector('#finished')) {
	addListener(item, '#finished');
  }
});

// Слушатели открытия меню
menuItems.forEach((item) => {
	item.addEventListener('click', evt => {
		closeOpenFilters(item);
	});
});
// Слушатель кнопки очистки
eraseButton.addEventListener('click', evt => {
	tags.querySelectorAll('.tags__item').forEach(item => {
		item.remove();
	});
	activeCheckbox.disabled = false;
	inactiveCheckbox.disabled = false;
	eraseButton.classList.remove('menu__erase_active');
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
