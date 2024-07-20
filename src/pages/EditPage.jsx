/* ----------------------------------------------------------------
  Edit Page
---------------------------------------------------------------- */
import { useState, useEffect } from "react";
import EditRequestForm from "../components/EditRequestForm";
import { useParams } from "react-router-dom";
import { serverPath } from "../helpers/varibles";

const EditPage = () => {
  document.body.classList.add("with-nav");

  const { id } = useParams();
  const [request, setRequest] = useState(null); // запрос
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // загрузка запроса по id
  useEffect(() => {
    fetch(serverPath + "/" + id)
      .then((res) => {
        if (res.ok !== true) {
          throw Error("Could not fetch the data from this resource");
        }
        return res.json();
      })
      .then((data) => {
        console.log("->>>>>>>", data);
        setRequest(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // отправка заявки на сервер
  const handleSubmit = (id) => {
    console.log('handleSubmit', id);
    console.log(request);
  };

  return (
    <div className="form-wrapper">
      <div className="container-fluid">
        {/* row */}
        <div className="row justify-content-between align-items-center">
          <div className="col">
            <div className="admin-heading-1">Работа с заявкой</div>
          </div>
          <div className="col text-right">
            <a href="/" className="btn btn-link">
              Вернуться назад
            </a>
          </div>
        </div>
        {/* // row */}
        {/* row */}
        <div className="row">
          {/* col */}
          <div className="col">
            {isLoading && <h2>Загрузка заявки...</h2>}
            {error && <h2>{error}</h2>}
            {request && <EditRequestForm id={id} request={request} handleSubmit={handleSubmit} setRequest={setRequest}/>}
          </div>
          {/* //col */}
        </div>
        {/* //row */}
      </div>
    </div>
  );
};

export default EditPage;
