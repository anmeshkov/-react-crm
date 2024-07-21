/* ----------------------------------------------------------------
  Edit Page
---------------------------------------------------------------- */
import { useState, useEffect } from "react";
import EditRequestForm from "../components/EditRequestForm";
import { useParams } from "react-router-dom";
import { serverPath } from "../helpers/varibles";
import { useNavigate } from "react-router-dom";

const EditPage = () => {
  document.body.classList.add("with-nav");

  const { id } = useParams();
  const [request, setRequest] = useState(null); // запрос
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);

  const navigate = useNavigate();

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
        setRequest(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Обновление данных на сервере
  const handleSubmit = (id) => {
    setIsPending(true);
    // Отправка запроса на сервер
    fetch(serverPath + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })
      .then((res) => {
        if (res.ok !== true) {
          throw Error("Could not update the data on the server");
        }
        console.log("Success! Request updated successfully");
        setIsPending(false);
        // перенаправляем на главную страницу
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setIsPending(false);
        setError(err.message);
      });
  };

  const deleteRequest = () => {
    setIsPending(true);
    // Удаление запроса на сервере
    let confirmDelete = window.confirm(
      "Вы действительно хотите удалить заявку?"
    );

    if (confirmDelete) {
      // Отправка запроса на сервер
      fetch(serverPath + "/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok !== true) {
            throw Error("Could not update the data on the server");
          }
          console.log("Success! Request delete successfully");
          setIsPending(false);
          // перенаправляем на главную страницу
          navigate("/");
        })
        .catch((err) => {
          console.log(err.message);
          setIsPending(false);
          setError(err.message);
        });
    }
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
            {request && (
              <EditRequestForm
                id={id}
                request={request}
                handleSubmit={handleSubmit}
                setRequest={setRequest}
                deleteRequest={deleteRequest}
                isPending={isPending}
              />
            )}
          </div>
          {/* //col */}
        </div>
        {/* //row */}
      </div>
    </div>
  );
};

export default EditPage;
