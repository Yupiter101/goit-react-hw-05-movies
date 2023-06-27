

import { Link } from "react-router-dom";

export function NotFaund() {
  return (
    <>
      <h3>Помилка 404</h3>
      <h2>Сторінку не знайдено</h2>
      <p>Не правильно набрано адресу або такої сторінки на сайті не існує</p>
      <button type="button"><Link to="/">На головну</Link></button>
    </>
  );
}