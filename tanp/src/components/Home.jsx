import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Item from "./Item";

const rankingUrl = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA&sort=%standard&applicationId=1095590964104393112`;
const newUrl = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA&sort=-updateTimestamp&applicationId=1095590964104393112`;

const Home = () => {
  const [rankingItems, setRankingItems] = useState([]);
  const [rankingMore, setRankingMore] = useState(false);
  const [newItems, setNewItems] = useState([]);
  const [newMore, setNewMore] = useState(false);
  const [isItemPage, setIsItemPage] = useState(false);
  const [itemInfo, setItemInfo] = useState();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    fetch(rankingUrl)
      .then((res) => res.json())
      .then((jsonRes) => {
        setRankingItems(jsonRes.Items);
      });
  }, []);

  useEffect(() => {
    fetch(newUrl)
      .then((res) => res.json())
      .then((jsonRes) => {
        console.log(jsonRes);
        setNewItems(jsonRes.Items);
      });
  }, []);

  const onClickMore = (e, itemsType) => {
    if (itemsType === "ranking") {
      setRankingMore(true);
    } else if (itemsType === "new") {
      setNewMore(true);
    }
    e.target.style.display = "none";
  };

  if (rankingItems.length !== 0 && newItems.length !== 0) {
    if (!isItemPage) {
      return (
        <div className="contents">
          <div className="list-container">
            <div className="inner">
              <div className="list-heading-container">
                <h2 className="list-heading">人気ランキング</h2>
                {!rankingMore && (
                  <button
                    onClick={(e) => onClickMore(e, "ranking")}
                    className="list-more"
                    type="button"
                  >
                    もっと見る
                  </button>
                )}
              </div>
              <ItemList
                setIsItemPage={setIsItemPage}
                setItemInfo={setItemInfo}
                setScrollY={setScrollY}
                items={rankingMore ? rankingItems : rankingItems.slice(0, 6)}
                key="Ranking"
              ></ItemList>
            </div>
          </div>
          <div className="list-container">
            <div className="inner">
              <div className="list-heading-container">
                <h2 className="list-heading">新着商品</h2>
                {!newMore && (
                  <button
                    onClick={(e) => onClickMore(e, "new")}
                    className="list-more"
                    type="button"
                  >
                    もっと見る
                  </button>
                )}
              </div>
              <ItemList
                setIsItemPage={setIsItemPage}
                setItemInfo={setItemInfo}
                setScrollY={setScrollY}
                items={newMore ? newItems : newItems.slice(0, 6)}
                key="New"
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
        ></Item>
      );
    }
  }
};

export default Home;
