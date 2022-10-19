import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import ItemList from "./ItemList";
import Item from "./Item";

const frontUrl =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA&itemCode=";
const endUrl = "&applicationId=1095590964104393112";

const Favorite = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isItemPage, setIsItemPage] = useState(false);
  const [itemInfo, setItemInfo] = useState();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    getFavoriteItems();
  }, []);

  const getFavoriteItems = () => {
    let url = "";
    let items = [];
    const cookies = Cookies.get();
    for (const key of Object.keys(cookies)) {
      if (key.includes("favorite")) {
        url = frontUrl + Cookies.get(key).replace(":", "%3A") + endUrl;
        fetch(url)
          .then((res) => res.json())
          .then((jsonRes) => {
            items.push(jsonRes.Items[0]);
            setFavoriteItems(items.slice(0, items.length)); // 新しい配列として渡す（Stateが変更されたことにならないため）
          });
      }
    }
    if (items.length === 0) {
      setFavoriteItems([]);
    }
  };

  if (favoriteItems.length !== 0) {
    if (!isItemPage) {
      return (
        <div className="contents">
          <div className="list-container">
            <div className="inner">
              <div className="list-heading-container">
                <h2 className="list-heading">お気に入り一覧</h2>
              </div>
              <ItemList
                setIsItemPage={setIsItemPage}
                setItemInfo={setItemInfo}
                setScrollY={setScrollY}
                items={favoriteItems}
                key="Favorite"
              ></ItemList>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Item
          setIsItemPage={setIsItemPage}
          itemInfo={itemInfo.Item}
          scrollY={scrollY}
          getFavoriteItems={getFavoriteItems}
        ></Item>
      );
    }
  } else {
    return (
      <div className="contents">
        <div className="list-container">
          <div className="inner">
            <div className="list-heading-container">
              <h2 className="list-heading">お気に入り一覧</h2>
            </div>
            <p className="message-no-favorite">
              商品をお気に入りに登録してみましょう。
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default Favorite;
