import React from "react";

const ItemList = (props) => {
  return (
    <ul className="item-list-container">
      {props.items.map((item) => {
        return (
          <li key={item.Item.itemName} className="list-item">
            <button
              onClick={() => {
                props.setIsItemPage(true);
                props.setItemInfo(item);
              }}
              className="list-item-link"
              type="button"
            >
              <div className="list-item-img-container">
                <img
                  className="list-item-img"
                  src={item.Item.mediumImageUrls[0].imageUrl}
                  alt={item.Item.itemName}
                />
              </div>
              <h3 className="list-item-text">{item.Item.itemName}</h3>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
