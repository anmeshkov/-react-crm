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

  const [fRequests, setFRequests] = useState(null); // фильтрованные запросы
  // состояние для фильтра
  const [filter, setFilter] = useState({ status: "all", product: "all" });

  const [counter, setCounter] = useState(null);

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
        setRequests(data);
        setFRequests(data);
        setLoading(false);
        loadFilter();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filterStatus = filter.status;
    const filterProduct = filter.product;

    // фильтруем массив заявок по статусу и продукту
    if (requests) {
      const arr = requests
        .filter((request) => {
          return filterStatus === "all"
            ? request
            : filterStatus === request.status;
        })
        .filter((request) => {
          return filterProduct === "all"
            ? request
            : filterProduct === request.product;
        });

      setFRequests(arr);
    }
  }, [filter]);

  // счетчик заявок по статусу
  useEffect(() => {
    if (requests) {
      // счетчик новых заявок
      const value = requests.reduce(
        (acc, cur) => (cur.status === "new" ? acc + 1 : acc),
        0
      );
      setCounter({ new: value });
    }
  }, [requests]);

  // Фильтрация списка по статусу
  const filterByStatus = (status) => {
    setFilter({ ...filter, status: status });
    // сохранение в LocalStorage
    localStorage.setItem(
      "filter",
      JSON.stringify({ ...filter, status: status })
    );
  };

  // Фильтрация списка по продукту
  const filterByProduct = (product) => {
    setFilter({ ...filter, product: product });
    // сохранение в LocalStorage
    localStorage.setItem(
      "filter",
      JSON.stringify({ ...filter, product: product })
    );
  };

  // загрузка из LocalStorage
  const loadFilter = () => {
    const data = localStorage.getItem("filter");
    if (data) {
      const filter = JSON.parse(data);
      setFilter(filter);
    }
  };

  // добавление стилей для body
  document.body.classList.add("with-nav", "body--dashboard");

  return (
    <div>
      <LeftPanel filterByStatus={filterByStatus} counter={counter} filter={filter}/>
      <MainWrapper
        requests={fRequests}
        isLoading={isLoading}
        error={error}
        filterByStatus={filterByStatus}
        filterByProduct={filterByProduct}
        filter={filter}
      />
    </div>
  );
};

export default HomePage;
