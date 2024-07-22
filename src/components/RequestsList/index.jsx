/* ----------------------------------------------------------------
  Request List Component
---------------------------------------------------------------- */
import { courseNames as courses } from "../../helpers/varibles";
import { requestStatus } from "../../helpers/varibles";
import { Link } from "react-router-dom";

const RequestsList = ({ requests }) => {
  //рендерим разметку для всех заявок
  const renderRequests = requests.map((request) => {
    // изменяем дату заявки в формате "дд.мм.гггг" и время в формате "чч:мм"
    // дата создания заявки
    const modifiedDate = new Date(request.date).toLocaleDateString("ru-RU", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });

    // имя курса
    const courseTitle = courses.find(
      (course) => course.id === request.product
    ).title;

    // статус заявки (бейдж)
    let badgeClass = 'badge badge-pill '
    
    badgeClass += requestStatus.find(
      (status) => status.id === request.status
    ).className;

    // заголовок статуса заявки (бейдж)
    let badgeTitle = requestStatus.find(
      (status) => status.id === request.status
    ).title;


    return (
      <tr key={request.id}>
        <th scope="row">{request.id}</th>
        <td>{modifiedDate}</td>
        <td>{courseTitle}</td>
        <td>{request.name}</td>
        <td>{request.email}</td>
        <td>{request.phone}</td>
        <td>
          {/* <div className={`badge badge-pill ${badgeClass}`}>{badgeTitle}</div> */}
          <div className={badgeClass}>{badgeTitle}</div>
        </td>
        <td>
          <Link to={`/edit/${request.id}`}>Редактировать</Link>
        </td>
      </tr>
    );
  });

  return (
    <table className="table fs-14">
      <thead>
        <tr>
          <th>ID</th>
          <th>дата</th>
          <th>продукт</th>
          <th>имя</th>
          <th>email</th>
          <th>телефон</th>
          <th>статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tbody">
        {renderRequests}
      </tbody>
    </table>
  );
};

export default RequestsList;
