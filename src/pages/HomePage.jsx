/* ----------------------------------------------------------------
  Home Page
---------------------------------------------------------------- */
import { useEffect, useState } from "react";
import LeftPanel from "../components/LeftPanel";
import MainWrapper from "../components/MainWrapper";
import { serverPath } from "../helpers/varibles";

const HomePage = () => {
  const [requests, setRequests] = useState(null); // запросы
  const [filteredRequests, setFilteredRequests] = useState(null); // фильтрованные заявки
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
        setRequests(data);
        filteredRequests(data);
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
    console.log("-----> filterByStatus", status);
    console.log(requests);

    // фильтруем массив заявок по статусу
    const array = requests.filter((request) => {
      return status === "all" || request.status === status;
    })
    console.log('NEW ->', array);
    setRequests(array)

    // setFilterStatus(status)
  };

  // Фильтрация списка по продукту
  const filterByProduct = (product) => {
    console.log("-----> filterByProduct", product);
    // setFilterProduct(product)
    // filterAllRequests()
  };

  // Функция для фильтрации заявок в таблице
  const filterAllRequests = () => {
    const status = filterStatus; // значение фильтра по статусу
    const product = filterProduct; // значение фильтра по продукту

    // фильтруем массив заявок по статусу и продукту
    // const filteredRequests = requests
    //   .filter((request) => {
    //     return status === "all" ? request : request.status === status;
    //   })
    //   .filter((request) => {
    //     return product === "all" ? request : request.product === product;
    //   });

    // возвращаем массив заявок подготовленный для отображения в таблице
    // console.log(filteredRequests);
  }

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
