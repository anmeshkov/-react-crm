/* ----------------------------------------------------------------
  Main Wrapper Component
---------------------------------------------------------------- */
import RequestsList from "../RequestsList";

const MainWrapper = ({requests, isLoading, error}) => {
  return (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="admin-heading-1">Все заявки</div>
        <form>
          {/* <div class="form-row"> */}
          <div className="row mb-3 justify-content-start">
            {/* Col */}
            <div className="col">
              <div id="topStatusBar" className="btn-group" role="group" aria-label="...">
                <a href="#" className="btn btn-light" data-value="all">Все</a>
                <a href="#" className="btn btn-light" data-value="new">Новые</a>
                <a href="#" className="btn btn-light" data-value="inwork">В работе</a>
                <a href="#" className="btn btn-light" data-value="complete">Завершенные</a>
              </div>
            </div>
            {/* // Col */}
            {/* Col */}
            <div className="col">
              <select className="custom-select" id="productSelect">
                <option value="all">Все продукты</option>
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
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