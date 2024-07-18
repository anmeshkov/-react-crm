/* ----------------------------------------------------------------
  Navigation Component
---------------------------------------------------------------- */

const Navigation = () => {
  return (
    <nav className="project-nav">
      <div className="project-nav__links-wrapper">
        <a href="/add">Форма добавления заявок</a>
        <a href="/">Таблица с заявками</a>
        <a href="/edit">Редактирование заявки</a>
      </div>
    </nav>
  );
};

export default Navigation;
