import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(element => summa += Number.parseFloat(element.prise));
  return (
    <div>
      {props.orders.map((el) => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сумма: { new Intl.NumberFormat().format(summa)}$</p>
    </div>
  );
};

const showNothing = () => {
  return (<div className="empty">
    <h2>Товаров нет</h2>
  </div>)
}

export default function Header(props) {
  let [cardOpen, setCardOpen] = useState(false);
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart
          onClick={() => setCardOpen((cardOpen = !cardOpen))}
          className={`shop-card ${cardOpen && "active"}`}
        />

        {cardOpen && (
          <div className="shop">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
