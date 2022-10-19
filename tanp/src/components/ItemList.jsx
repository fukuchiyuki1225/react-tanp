import React from "react";

const ItemList = (props) => {
  console.log(props.items);
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
