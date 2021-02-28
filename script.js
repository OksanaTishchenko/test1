let clickButtons = (event, selectorButtons, selectorClass) => {
  let buttons = document.querySelectorAll(selectorButtons);

  for (let button of buttons) {
    button.addEventListener(event, function () {
      buttons.forEach(item => item.classList.remove(selectorClass));
      this.classList.toggle(selectorClass);
    });
  }
}

clickButtons('click', '.main-button', 'active-but');
clickButtons('click', '.button-buy', 'active-buy');