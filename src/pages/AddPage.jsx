/* ----------------------------------------------------------------
  Add Page
---------------------------------------------------------------- */
import NewRequestForm from "../components/NewRequestForm";
import { useEffect } from "react";

const AddPage = () => {

  // добавляем классы к body при загрузке страницы и удаляем их при удалении компонента
  useEffect(() => {
    document.body.classList.add("with-nav", "radial-bg", "flex-center");

    return () => {
      document.body.classList.remove("with-nav", "radial-bg", "flex-center");
    };
  }, []);

  return (
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">
        {/* header */}
        <div className="white-plate__header text-center">
          <p className="white-plate__logo">
            <span>Форма</span> заявок
          </p>
        </div>
        {/* // header */}
        <div className="white-plate__line-between white-plate__line-between--main" />
        <NewRequestForm />
      </div>
    </div>
  );
};

export default AddPage;
