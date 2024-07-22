/* ----------------------------------------------------------------
  404 Page
---------------------------------------------------------------- */

const NotFound = () => {
  document.body.classList.add("with-nav", "radial-bg", "flex-center");

  return (

      <div className="container-fluid">
        {/* header */}
        <div className="notfound__header text-center">
          <p className="notfound__text">
            <span>404</span>
            Такой страницы нет
          </p>
        </div>
        {/* // header */}
      </div>

  );
}
 
export default NotFound;