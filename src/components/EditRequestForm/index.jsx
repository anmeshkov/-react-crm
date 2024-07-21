/* ----------------------------------------------------------------
  Edit Request Form Component
---------------------------------------------------------------- */
import { useState } from "react";
import { requestStatus } from "../../helpers/varibles";
import { courseNames } from "../../helpers/varibles";
import modifyDate from "../../helpers/modifyDate";

const EditRequestForm = ({ id, request, handleSubmit, setRequest, deleteRequest, isPending }) => {
  // рендер имен курсов
  const renderCourseNames = (courseList) => {
    return courseNames.map((course) => {
      return (
        <option key={course.id} value={course.id}>
          {course.title}
        </option>
      );
    });
  };

  // рендер статусов
  const renderRequestStatusList = (statusList) => {
    return requestStatus.map((status) => {
      return (
        <option key={status.id} value={status.id}>
          {status.title}
        </option>
      );
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // обработка изменений заявки
    handleSubmit(id);
  };

  const onClickDelete = () => {
    // удаление заявки
    deleteRequest(id)
  }

  return (
    <form onSubmit={onFormSubmit} id="form">
      {/* card */}
      <div className="card mb-4">
        <div className="card-header">Данные о заявке</div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>ID:</strong>
            </div>
            <div className="col">
              Заявка № <span id="number">{request.id}</span>
            </div>
            <input name="id" type="hidden" id="id" />
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Дата создания:</strong>
            </div>
            <div className="col" id="date">
              {modifyDate(request.date)}
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Продукт:</strong>
            </div>
            <div className="col">
              <select
                id="product"
                name="product"
                className="custom-select"
                onChange={(event) => {
                  setRequest({ ...request, product: event.target.value });
                }}
                value={request.product}
              >
                {renderCourseNames(courseNames)}
              </select>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Имя:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(event) => {
                  setRequest({ ...request, name: event.target.value });
                }}
                value={request.name}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Email:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                onChange={(event) => {
                  setRequest({ ...request, email: event.target.value });
                }}
                value={request.email}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Телефон:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                onChange={(event) => {
                  setRequest({ ...request, phone: event.target.value });
                }}
                value={request.phone}
                id="phone"
                name="phone"
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Статус заявки:</strong>
            </div>
            <div className="col">
              <select
                className="custom-select"
                id="status"
                name="status"
                onChange={(event) => {
                  setRequest({ ...request, status: event.target.value });
                }}
                value={request.status}
              >
                {/* <option selected>Выберите...</option> */}
                {renderRequestStatusList(requestStatus)}
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* //card */}
      <div className="row justify-content-between">
        <div className="col text-left">
          {!isPending && <button onClick={onClickDelete} type="button" className="btn btn-danger">Удалить заявку</button>}
          {isPending && <button onClick={onClickDelete} type="button" className="btn btn-danger" disabled>Удалить заявку</button>}
        </div>
        <div className="col text-right">
          {!isPending && <button type="submit" className="btn btn-primary">Сохранить изменения</button>}
          {isPending && <button type="submit" className="btn btn-primary" disabled>Сохранить изменения</button>}
        </div>
      </div>
    </form>
  );
};

export default EditRequestForm;
