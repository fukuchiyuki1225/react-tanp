import React, { useState } from "react";
import ItemList from "./ItemList";
import Item from "./Item";

const frontUrl =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA";
const endUrl = "&applicationId=1095590964104393112";

const Search = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [isItemPage, setIsItemPage] = useState(false);
  const [itemInfo, setItemInfo] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [keyword, setKeyWord] = useState("");

  const search = (e) => {
    let url = "";
    if (e.key === "Enter") {
      url = frontUrl + "%20" + encodeURIComponent(e.target.value) + endUrl;
      fetch(url)
        .then((res) => res.json())
        .then((jsonRes) => {
          setSearchItems(jsonRes.Items);
        });
    }
  };

  if (!isItemPage) {
    return (
      <div className="contents">
        <div className="search">
          <div className="search-input-container">
            <input
              id="keyword"
              type="text"
              className="search-input"
              placeholder="アイテムを探す。"
              onKeyPress={(e) => search(e)}
              onChange={(e) => setKeyWord(e.target.value)}
              value={keyword}
            />
          </div>
          <button type="button" className="search-category"></button>
        </div>
        <div className="list-container">
          <div className="inner">
            <div className="list-heading-container">
              <h2 className="list-heading">検索結果</h2>
            </div>
            <ItemList
              setIsItemPage={setIsItemPage}
              setItemInfo={setItemInfo}
              setScrollY={setScrollY}
              items={searchItems}
              key="Search"
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
};

export default Search;
