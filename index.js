const template = document.querySelector('#tags-template').content;
const menuItems = document.querySelectorAll('.menu__item');
const menuInnerItems = document.querySelectorAll('.menu__inner-item');
const tags = document.querySelector('.tags');
const noviceTxt = document.querySelector('#novice-txt').textContent;
const advanceTxt = document.querySelector('#advance-txt').textContent;
const profiTxt = document.querySelector('#profi-txt').textContent;
const buttons = document.querySelectorAll('.card-list__card-button');
//todo disabled; сброс таблицы;

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
// Функция удаления тэгов
function deleteTag(name) {
	document.getElementsByName(name)[0].remove();
}

// Слушатели чекбоксов
menuInnerItems.forEach((item) => {
  if(item.querySelector('#novice')) {
    item.querySelector('#novice').addEventListener('change', function() {
      if (this.checked) {
        tags.append(createTag(noviceTxt, this.id));
      } else {
        deleteTag(this.id);
      }
    });
  }
  if(item.querySelector('#advance')) {
    item.querySelector('#advance').addEventListener('change', function() {
      if (this.checked) {
        tags.append(createTag(advanceTxt, this.id));
      } else {
        deleteTag(this.id);
      }
    });
  }
  if(item.querySelector('#profi')) {
    item.querySelector('#profi').addEventListener('change', function() {
      if (this.checked) {
        tags.append(createTag(profiTxt, this.id));
      } else {
        deleteTag(this.id);
      }
    });
  }
});

// Слушатели открытия меню
menuItems.forEach((item) => {
	item.addEventListener('click', evt => {
		closeOpenFilters(item);
	});
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
