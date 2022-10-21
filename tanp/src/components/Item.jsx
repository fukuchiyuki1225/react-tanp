import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Item = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const item = props.itemInfo;

  useEffect(() => {
    const cookies = Cookies.get();
    for (const key of Object.keys(cookies)) {
      if (Cookies.get(key) === item.itemCode) {
        setIsFavorite(true);
      }
    }
  }, []);

  const onClickFavorite = () => {
    const cookies = Cookies.get();
    let max = -1;
    for (const key of Object.keys(cookies)) {
      if (key.includes("favorite")) {
        if (Cookies.get(key) === item.itemCode) {
          Cookies.remove(key);
          setIsFavorite(false);
          return;
        }
        let index = parseInt(key.replace("favorite", ""));
        max = max <= index ? index : max;
        console.log(max);
      }
    }
    Cookies.set(`favorite${max + 1}`, item.itemCode);
    setIsFavorite(true);
  };

  return (
    <div className="contents--item">
      <button
        onClick={() => {
          props.setIsItemPage(false);
          window.scrollTo(0, props.scrollY);
          if (typeof props.getFavoriteItems !== "undefined") {
            props.getFavoriteItems();
          }
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
              className={
                isFavorite
                  ? "add-favorite-button favorite-button-active"
                  : "add-favorite-button"
              }
              type="button"
            ></button>
            <h4 className="item-heading">商品詳細</h4>
            <p className="item-caption">{item.itemCaption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
