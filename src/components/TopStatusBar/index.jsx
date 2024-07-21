/* ----------------------------------------------------------------
  Top Status Bar Component
---------------------------------------------------------------- */
const TopStatusBar = ({ filterByStatus, filter }) => {
  // Обработка нажатия на кнопку фильтра статуса заявок
  const handleStatusChange = (event) => {
    filterByStatus(event.target.dataset.value);
  };

  const buttons = [
    { data: "all", label: "Все" },
    { data: "new", label: "Новые" },
    { data: "inwork", label: "В работе" },
    { data: "complete", label: "Завершенные" },
  ];

  const renderButtons = buttons.map((button) => {
    // Если текущая кнопка активна, добавляем активный класс
    const isActive = filter.status === button.data ? "active" : "";
    return (
      <a
        onClick={handleStatusChange}
        href="#"
        className={`btn btn-light ${isActive}`}
        data-value={button.data}
        key={button.data}
      >
        {button.label}
      </a>
    );
  });

  return (
    <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
      {renderButtons}
    </div>
  );
};

export default TopStatusBar;
