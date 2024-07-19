/* ----------------------------------------------------------------
  New Request Form Component
---------------------------------------------------------------- */

import { useEffect, useState } from "react";
import generateRandomRequest from "../../helpers/generateRandomRequest";
import { isDemoMode } from "../../helpers/varibles";
import { serverPath } from "../../helpers/varibles";

const NewRequestForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");

  useEffect(() => {
    demoRequest();
  }, []);

  const demoRequest = () => {
    if (isDemoMode) {
      const demoData = generateRandomRequest();
      setName(demoData.name);
      setPhone(demoData.phone);
      setEmail(demoData.email);
      setProduct(demoData.product);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // новый запрос
    const request = {
      name: name,
      phone: phone,
      email: email,
      product: product,
      date: new Date().toISOString(),
      status: "new",
    };

    fetch(serverPath, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }).then(() => {
      console.log("Success! New request added successfully");
      // очищаем форму
      setName("");
      setPhone("");
      setEmail("");
      setProduct("");
      
      demoRequest();
    });
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      <label>Ваши данные:</label>
      <div className="form-group">
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="on"
          className="form-control"
          placeholder="Имя и Фамилия"
          onChange={(event) => setName(event.target.value)}
          value={name}
          required
        />
      </div>
      <div className="form-group">
        <input
          id="phone"
          type="text"
          name="phone"
          autoComplete="on"
          className="form-control"
          placeholder="Телефон"
          onChange={(event) => setPhone(event.target.value)}
          value={phone}
        />
      </div>
      <div className="form-group">
        <input
          id="email"
          type="email"
          name="email"
          autoComplete="on"
          className="form-control"
          placeholder="Email"
          // onChange={(value) => setRequest({ ...request, email: value })}
          onChange={(event) => setEmail(event.target.value)}
          value={email}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Продукт:</label>
        <select
          id="product"
          name="product"
          className="form-control"
          // onChange={(value) => setRequest({ ...request, product: value })}
          onChange={(event) => setProduct(event.target.value)}
          value={product}
        >
          <option value="course-html">Курс по верстке</option>
          <option value="course-js">Курс по JavaScript</option>
          <option value="course-vue">Курс по VUE JS</option>
          <option value="course-php">Курс по PHP</option>
          <option value="course-wordpress">Курс по WordPress</option>
        </select>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Оформить заявку
        </button>
      </div>
    </form>
  );
};

export default NewRequestForm;
