/* ----------------------------------------------------------------
  Home Page
---------------------------------------------------------------- */
import { useEffect, useState } from "react";
import LeftPanel from "../components/LeftPanel";
import MainWrapper from "../components/MainWrapper";

const HomePage = () => {
  const [requests, setRequests] = useState(null); // запросы
  const [isLoading, setLoading] = useState(true);  
  const [error, setError] = useState(null);

  // запрос на сервер
  useEffect(() => {
    fetch("http://localhost:8080/requests")
      .then((res) => {
        if(res.ok !== true) {
          throw Error('Could not fetch the data from this resource');
        }
        return res.json();
      })
      .then((data) => {
        setRequests(data);
        setLoading(false)
      }).catch((err) => {
        console.log(err.message);
        setError(err.message)
        setLoading(false)
      });
  }, []);

  // добавление стилей для body
  document.body.classList.add("with-nav", "body--dashboard");

  return (
    <div>
      <LeftPanel />
      <MainWrapper requests={requests} isLoading={isLoading} error={error}/>
    </div>
  );
};

export default HomePage;
