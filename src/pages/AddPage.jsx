/* ----------------------------------------------------------------
  Add Page
---------------------------------------------------------------- */
import NewRequestForm from "../components/NewRequestForm";

const AddPage = () => {
  document.body.classList.add("with-nav", "radial-bg", "flex-center");

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
