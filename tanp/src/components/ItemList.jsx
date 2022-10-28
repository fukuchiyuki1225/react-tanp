import React from "react";
import noImg from "../img/icon_no-image.svg";

const ItemList = (props) => {
  return (
    <ul className="item-list-container">
      {props.items.map((item) => {
        return (
          <li key={item.Item.itemCode} className="list-item">
            <button
              onClick={() => {
                props.setIsItemPage(true);
                props.setItemInfo(item);
                props.setScrollY(window.scrollY);
                window.scrollTo(0, 0);
              }}
              className="list-item-link"
              type="button"
            >
              <div className="list-item-img-container">
                <img
                  className="list-item-img"
                  src={
                    item.Item.mediumImageUrls.length === 0
                      ? noImg
                      : item.Item.mediumImageUrls[0].imageUrl
                  }
                  alt={item.Item.itemName}
                />
              </div>
              <div className="list-item-text-container">
                <h3 className="list-item-text">{item.Item.itemName}</h3>
                <h4 className="list-item-price">
                  ¥{item.Item.itemPrice.toLocaleString()}
                  <span> (税込)</span>
                </h4>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
