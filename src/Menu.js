import React, { useState } from "react";

const Menu = ({ items, priceSum, setPriceSum, quantity, setQuantity }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
              </header>
              <h4 className="price">{price} ლარი</h4>
              <p>რაოდენობა: {quantity[id]}</p>
              <button
                className="filter-btn"
                onClick={() => {
                  setPriceSum(priceSum + price);
                  const quantityTemp = quantity;
                  quantityTemp[id] = quantity[id] + 1;
                  setQuantity(quantityTemp);
                }}
              >
                დაამატე
              </button>
            </div>

            {console.log(quantity)}
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
