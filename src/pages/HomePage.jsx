/* ----------------------------------------------------------------
  Home Page
---------------------------------------------------------------- */
import { useEffect, useState } from "react";
import LeftPanel from "../components/LeftPanel";
import MainWrapper from "../components/MainWrapper";
import { serverPath } from "../helpers/varibles";

const HomePage = () => {
  const [requests, setRequests] = useState(null); // запросы
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [fRequests, setFRequests] = useState(null);
  // состояние для фильтра
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterProduct, setFilterProduct] = useState("all");

  // запрос на сервер
  useEffect(() => {
    fetch(serverPath)
      .then((res) => {
        if (res.ok !== true) {
          throw Error("Could not fetch the data from this resource");
        }
        return res.json();
      })
      .then((data) => {
        // фильтруем массив заявок по статусу
        console.log("DATA ->>>", data);
        setRequests(data);
        setFRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Фильтрация списка по статусу
  const filterByStatus = (status) => {
    setFilterStatus(status);
    filterAllRequests(requests)
  };

  // Фильтрация списка по продукту
  const filterByProduct = (product) => {
    setFilterProduct(product);
  };

  // Функция для фильтрации заявок в таблице
  const filterAllRequests = (data) => {
    const status = filterStatus; // значение фильтра по статусу
    // const product = filterProduct; // значение фильтра по продукту

    // фильтруем массив заявок по статусу и продукту
    const arr = data.filter((request) => {
      // return status === 'all' ? request : status === request.status
      if (status === 'all') {
        return request
      } else if (status === request.status) {
        return request
      }
    })

    console.log('ARR', arr);
    setFRequests(arr)
  };

  // добавление стилей для body
  document.body.classList.add("with-nav", "body--dashboard");

  return (
    <div>
      <LeftPanel filterByStatus={filterByStatus} />
      <MainWrapper
        requests={requests}
        isLoading={isLoading}
        error={error}
        filterByStatus={filterByStatus}
        filterByProduct={filterByProduct}
      />
    </div>
  );
};

export default HomePage;
