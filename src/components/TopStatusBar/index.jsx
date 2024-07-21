/* ----------------------------------------------------------------
  Top Status Bar Component
---------------------------------------------------------------- */
import togleButtonActiveClass from "../../helpers/togleButtonActiveClass";

const TopStatusBar = ({ filterByStatus }) => {

  // Обработка нажатия на кнопку фильтра статуса заявок
  const handleStatusChange = (event) => {
    filterByStatus(event.target.dataset.value);
    togleButtonActiveClass(event.target.dataset.value)
  }

  return (
    <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
      <a onClick={handleStatusChange} href="#" className="btn btn-light" data-value="all">Все</a>
      <a onClick={handleStatusChange} href="#" className="btn btn-light" data-value="new">Новые</a>
      <a onClick={handleStatusChange} href="#" className="btn btn-light" data-value="inwork">В работе</a>
      <a onClick={handleStatusChange} href="#" className="btn btn-light" data-value="complete">Завершенные</a>
    </div>
  );
}

export default TopStatusBar;