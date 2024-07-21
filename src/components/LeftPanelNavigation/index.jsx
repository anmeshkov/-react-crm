/* ----------------------------------------------------------------
  Left Panel Navigation Component
---------------------------------------------------------------- */
import togleButtonActiveClass from "../../helpers/togleButtonActiveClass";
import CounterBadge from "../counterBadge";

const LeftPanelNavigation = ({ filterByStatus, counter }) => {
  // Обработка нажатия на кнопку фильтра статуса заявок
  // Обновление статуса заявок
  const handleStatusChange = (event) => {
    filterByStatus(event.target.dataset.value);
    // event.target.classList.add('active')
    if (event.target.dataset.value) {
      togleButtonActiveClass(event.target.dataset.value);
    }
  };

  return (
    <ul>
      <li>
        <a
          onClick={handleStatusChange}
          data-value="all"
          data-role="left-status"
          href="#"
          className="active"
        >
          Все вместе
        </a>
      </li>
      <li>
        <a
          onClick={handleStatusChange}
          data-value="new"
          data-role="left-status"
          href="#"
        >
          Новые
        {counter && <CounterBadge counter={counter}/>}
        </a>
      </li>
      <li>
        <a
          onClick={handleStatusChange}
          data-value="inwork"
          data-role="left-status"
          href="#"
        >
          В работе
        </a>
      </li>
      <li>
        <a
          onClick={handleStatusChange}
          data-value="complete"
          data-role="left-status"
          href="#"
        >
          Завершенные
        </a>
      </li>
    </ul>
  );
};

export default LeftPanelNavigation;
