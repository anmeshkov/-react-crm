/* ----------------------------------------------------------------
  Main Wrapper Component
---------------------------------------------------------------- */
import RequestsList from "../RequestsList";
import TopStatusBar from "../TopStatusBar";
import ProductSelect from "../ProductSelect";

const MainWrapper = ({requests, isLoading, error, filterByStatus, filterByProduct}) => {
  return (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="admin-heading-1">Все заявки</div>
        <form>
          {/* <div class="form-row"> */}
          <div className="row mb-3 justify-content-start">
            {/* Col */}
            <div className="col">
              <TopStatusBar filterByStatus={filterByStatus}/>
            </div>
            {/* // Col */}
            {/* Col */}
            <div className="col">
              <ProductSelect filterByProduct={filterByProduct}/>
            </div>
            {/* // Col */}
          </div>
        </form>
        {isLoading && <h2>Загрузка заявок...</h2>}
        {error && <h2>{error}</h2>}
        {requests && <RequestsList requests={requests}/>}
      </div>
    </div>
  );
}

export default MainWrapper;