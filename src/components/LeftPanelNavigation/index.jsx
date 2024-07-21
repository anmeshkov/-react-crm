/* ----------------------------------------------------------------
  Left Panel Navigation Component
---------------------------------------------------------------- */
import togleButtonActiveClass from "../../helpers/togleButtonActiveClass";

const LeftPanelNavigation = ({filterByStatus}) => {

  // Обработка нажатия на кнопку фильтра статуса заявок
  // Обновление статуса заявок
  const handleStatusChange = (event) => {
    filterByStatus(event.target.dataset.value);
    // event.target.classList.add('active')
    togleButtonActiveClass(event.target.dataset.value)
  }

  return (
    <ul>
      <li><a onClick={handleStatusChange} data-value="all" data-role="left-status" href="#" className="active">Все вместе</a></li>
      <li><a onClick={handleStatusChange} data-value="new" data-role="left-status" href="#">Новые<div className="badge" id="badge-new">12</div></a></li>
      <li><a onClick={handleStatusChange} data-value="inwork" data-role="left-status" href="#">В работе</a></li>
      <li><a onClick={handleStatusChange} data-value="complete" data-role="left-status" href="#">Завершенные</a></li>
    </ul>
  );
}

export default LeftPanelNavigation;