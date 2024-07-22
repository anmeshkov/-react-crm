/* ----------------------------------------------------------------
  404 Page
---------------------------------------------------------------- */
import { useEffect } from "react";

const NotFound = () => {

  // добавляем классы к body при загрузке страницы и удаляем их при удалении компонента
  useEffect(() => {
    document.body.classList.add("with-nav", "radial-bg", "flex-center");
    
    return () => {
       document.body.classList.remove("with-nav", "radial-bg", "flex-center");
    }
 }, [])

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