/* ----------------------------------------------------------------
  Request List Component
---------------------------------------------------------------- */
import { courseNames as courses } from "../../helpers/varibles";
import { requestStatus } from "../../helpers/varibles";

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
    let badgeClass = requestStatus.find((status) => status.id === request.status).className;
    let badgeTitle = requestStatus.find((status) => status.id === request.status).title;

    return (
      <tr key={request.id}>
        <th scope="row">{request.id}</th>
        <td>{modifiedDate}</td>
        <td>{courseTitle}</td>
        <td>{request.name}</td>
        <td>{request.email}</td>
        <td>{request.phone}</td>
        <td>
          <div className={`badge badge-pill ${badgeClass}`}>{badgeTitle}</div>
        </td>
        <td>
          <a href="edit.html">Редактировать</a>
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
        {/* <tr>
          <th scope="row">1</th>
          <td>01.04.2020</td>
          <td>Курс по верстке</td>
          <td>Петр Сергеевич</td>
          <td>info@inbox.ru</td>
          <td>+7 (909) 77-55-777</td>
          <td>
            <div className="badge badge-pill badge-danger">Новый</div>
          </td>
          <td>
            <a href="edit.html">Редактировать</a>
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>01.04.2020</td>
          <td>Курс по верстке</td>
          <td>Василий Петрович</td>
          <td>info@gmail.ru</td>
          <td>+7 (909) 77-55-777</td>
          <td>
            <div className="badge badge-pill badge-warning">В работе</div>
          </td>
          <td>
            <a href="edit.html">Редактировать</a>
          </td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td>01.04.2020</td>
          <td>Курс по верстке</td>
          <td>Николай Владимирович</td>
          <td>info@mail.ru</td>
          <td>+7 (909) 77-55-777</td>
          <td>
            <div className="badge badge-pill badge-success">Завершенный</div>
          </td>
          <td>
            <a href="edit.html">Редактировать</a>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default RequestsList;
