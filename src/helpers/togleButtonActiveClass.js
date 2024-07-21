// Функция для добавления класса 'active' к выбранной кнопке
const togleButtonActiveClass = (value) => {
  // объект для хранения элементов DOM table.html
  const domElements = {
    topStatusBar: document.querySelector("#topStatusBar"),
    leftStatusBar: document.querySelector(".left-panel__navigation"),
    topStatusBarBtns: document.querySelectorAll("#topStatusBar > a.btn"),
    leftStatusBarBtns: document.querySelectorAll('a[data-role="left-status"]'),
  };

  // удаляем класс active у верхник кнопок
  domElements.topStatusBarBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  // удаляем класс active у кнопок в вертикальной панели навигации
  domElements.leftStatusBarBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  // добавляем класс к выбранной кнопке по значению
  domElements.topStatusBar
    .querySelector(`a[data-value="${value}"]`)
    .classList.add("active");
  domElements.leftStatusBar
    .querySelector(`a[data-value="${value}"]`)
    .classList.add("active");
}

export default togleButtonActiveClass;