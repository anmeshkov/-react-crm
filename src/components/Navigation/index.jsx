/* ----------------------------------------------------------------
  Navigation Component
---------------------------------------------------------------- */
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="project-nav">
      <div className="project-nav__links-wrapper">
        <Link to="/add">Форма добавления заявок</Link>
        <Link to="/">Таблица с заявками</Link>
        <Link to="/edit">Редактирование заявки</Link>
      </div>
    </nav>
  );
};

export default Navigation;
