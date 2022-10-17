import React from "react";
import Cookies from "js-cookie";

const Item = (props) => {
  console.log(props.itemInfo);
  const item = props.itemInfo;

  const onClickFavorite = () => {
    const cookies = Cookies.get();
    console.log(cookies);
    let i = 0;
    for (const key of Object.keys(cookies)) {
      console.log(key);
      if (key === `favorite${i}`) {
        if (Cookies.get(`favorite${i}`) === item.itemCode) break;
        i++;
      }
    }
    Cookies.set(`favorite${i}`, item.itemCode);
  };

  return (
    <div className="contents--item">
      <button
        onClick={() => {
          props.setIsItemPage(false);
        }}
        type="button"
        className="back-button"
      ></button>
      <div className="item">
        <div className="inner">
          <div className="item-img-container">
            <img
              src={item.mediumImageUrls[0].imageUrl}
              alt={item.itemName}
              className="item-img"
            />
          </div>
          <div className="item-img-container--dummy">
            <img
              src={item.mediumImageUrls[0].imageUrl}
              alt={item.itemName}
              className="item-img"
            />
          </div>
        </div>
        <div className="item-detail">
          <div className="inner">
            <h2 className="item-name">
              <a href={item.itemUrl} target="blank">
                {item.itemName}
              </a>
            </h2>
            <a
              href={item.shopUrl}
              target="_blank"
              rel="noreferrer"
              className="shop-name"
            >
              {item.shopName}
            </a>
            <h3 className="item-price">
              ¥{item.itemPrice.toLocaleString()} <span>税込</span>
            </h3>
            <button
              onClick={() => {
                onClickFavorite();
              }}
              className="add-favorite-button"
              type="button"
            >
              <span>お気に入りに追加する</span>
            </button>
            <h4 className="item-heading">商品詳細</h4>
            <p className="item-caption">{item.itemCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
