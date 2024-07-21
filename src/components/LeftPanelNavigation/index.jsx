/* ----------------------------------------------------------------
  Left Panel Navigation Component
---------------------------------------------------------------- */
import CounterBadge from "../counterBadge";

const LeftPanelNavigation = ({ filterByStatus, counter, filter }) => {
  // Обработка нажатия на кнопку фильтра статуса заявок
  // Обновление статуса заявок
  const handleStatusChange = (event) => {
    // Обновляем фильтр по статусу заявок
    const button = event.target.closest("a[data-value]");
    filterByStatus(button.dataset.value);
  };

  const buttons = [
    { data: "all", label: "Все вместе", showCounters: false },
    { data: "new", label: "Новые", showCounters: true },
    { data: "inwork", label: "В работе", showCounters: false },
    { data: "complete", label: "Завершенные", showCounters: false },
  ];

  const renderButtons = buttons.map((button) => {
    // Если текущая кнопка активна, добавляем активный класс
    const isActive = filter.status === button.data ? "active" : "";
    return (
      <li key={button.data}>
        <a
          onClick={handleStatusChange}
          data-value={button.data}
          data-role="left-status"
          href="#"
          className={isActive}
        >
          {button.label}
          {/* отображаем счетчик */}
          {counter && button.showCounters && <CounterBadge counter={counter} />}
        </a>
      </li>
    );
  });

  return (
    <ul>
      {renderButtons}

      {/* <li>
        <a
          onClick={handleStatusChange}
          data-value="new"
          data-role="left-status"
          href="#"
        >
          Новые
          {counter && <CounterBadge counter={counter} />}
        </a>
      </li>
      <li> */}
    </ul>
  );
};

export default LeftPanelNavigation;
