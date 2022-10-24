import React, { useState } from "react";
import ItemList from "./ItemList";
import Item from "./Item";

const frontUrl =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json&keyword=%E3%82%B5%E3%83%B3%E3%83%AA%E3%82%AA";
const endUrl = "&applicationId=1095590964104393112";

const genreName = {
  ladies: "レディースファッション",
  mens: "メンズファッション",
  inner: "インナー・下着・ナイトウェア",
  bag: "バッグ・小物・ブランド雑貨",
  shoes: "靴",
  watch: "腕時計",
  accessory: "ジュエリー・アクセサリー",
  kids: "キッズ・ベビー・マタニティ",
  toy: "おもちゃ",
  outdoor: "スポーツ・アウトドア",
  appliances: "家電",
  tv: "TV・オーディオ・カメラ",
  pc: "パソコン・周辺機器",
  sp: "スマートフォン・タブレット",
  // data: "光回線・モバイル通信",
  food: "食品",
  sweets: "スイーツ・お菓子",
  drink: "水・ソフトドリンク",
  // beer: "ビール・洋酒",
  // shochu: "日本酒・焼酎",
  interior: "インテリア・寝具・収納",
  daily: "日用品雑貨・文房具・手芸",
  kitchen: "キッチン用品・食器・調理器具",
  books: "本・雑誌・コミック",
  cddvd: "CD・DVD",
  game: "テレビゲーム",
  hobby: "ホビー",
  instrument: "楽器・音響機器",
  // car: "車・バイク",
  carsupplies: "車用品・バイク用品",
  cosme: "美容・コスメ・香水",
  health: "ダイエット・健康",
  medical: "医薬品・コンタクト・介護",
  pet: "ペット・ペットグッズ",
  diy: "花・ガーデン・DIY",
  renovation: "サービス・リフォーム",
  // home: "住宅・不動産",
  catalog: "カタログギフト・チケット",
  // gift: "百貨店・総合通販・ギフト",
};

const genreId = {
  ladies: "100371",
  mens: "551177",
  inner: "100433",
  bag: "216131",
  shoes: "558885",
  watch: "558929",
  accessory: "216129",
  kids: "100533",
  toy: "566382",
  outdoor: "101070",
  appliances: "562637",
  tv: "211742",
  pc: "100026",
  sp: "564500",
  // data: "565004",
  food: "100227",
  sweets: "551167",
  drink: "100316",
  // beer: "510915",
  // shochu: "510901",
  interior: "100804",
  daily: "215783",
  kitchen: "558944",
  books: "200162",
  cddvd: "101240",
  game: "101205",
  hobby: "101164",
  instrument: "112493",
  // car: "101114",
  carsupplies: "503190",
  cosme: "100939",
  health: "100938",
  medical: "551169",
  pet: "101213",
  diy: "100005",
  renovation: "101438",
  // home: "111427",
  catalog: "101381",
  // gift: "100000",
};

const Search = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [isItemPage, setIsItemPage] = useState(false);
  const [itemInfo, setItemInfo] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const [showSearchSetting, setShowSearchSetting] = useState(false);
  const [showCategory, setShowCategory] = useState(false);

  const search = (e, type) => {
    if (type === "key") {
      if (e.key !== "Enter" || keyword === "") return;
    }
    let url = "";
    url = frontUrl + "%20" + encodeURIComponent(keyword) + endUrl;
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        setSearchItems(jsonRes.Items);
      });
  };

  const createJenreList = () => {
    let list = [];
    for (const key of Object.keys(genreId)) {
      list.push(
        <li className="modal-list-item" id={genreId[key]}>
          <div className="modal-list-inner inner">
            <button type="button" className="modal-list-button">
              {genreName[key]}
            </button>
          </div>
        </li>
      );
    }
    console.log(list);
    return list;
  };

  const closeSearchSetting = () => {
    setShowSearchSetting(false);
    setShowCategory(false);
  };

  if (!isItemPage) {
    return (
      <div>
        <div className="contents">
          <div className="search">
            <div className="search-input-container">
              <input
                id="keyword"
                type="text"
                className="search-input"
                placeholder="アイテムを探す。"
                onKeyPress={(e) => search(e, "key")}
                onChange={(e) => setKeyWord(e.target.value)}
                value={keyword}
              />
            </div>
            <button
              type="button"
              className="search-setting"
              onClick={() => {
                setShowSearchSetting(true);
              }}
            ></button>
          </div>
          <div className="list-container">
            <div className="inner">
              <div className="list-heading-container">
                <h2 className="list-heading">検索結果</h2>
              </div>
              {searchItems.length !== 0 ? (
                <ItemList
                  setIsItemPage={setIsItemPage}
                  setItemInfo={setItemInfo}
                  setScrollY={setScrollY}
                  items={searchItems}
                  key="Search"
                ></ItemList>
              ) : (
                <p className="message-no-item">アイテムを検索しましょう。</p>
              )}
            </div>
          </div>
        </div>
        <div className={showSearchSetting ? "modal show" : "modal"}>
          <div className="modal-wrapper">
            <div className="modal-container">
              <div className="modal-header inner">
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => {
                    closeSearchSetting();
                  }}
                ></button>
                <h3 className="modal-header-text">検索の絞り込み</h3>
                <button type="button" className="modal-clear">
                  すべてクリア
                </button>
              </div>
              <div className={!showCategory ? "modal-body show" : "modal-body"}>
                <ul className="modal-list">
                  <li className="modal-list-item">
                    <div className="modal-list-inner inner">
                      <button
                        type="button"
                        className="modal-list-button--next"
                        onClick={() => {
                          setShowCategory(true);
                        }}
                      >
                        カテゴリ
                      </button>
                    </div>
                  </li>
                  <li className="modal-list-item">
                    <div className="modal-list-inner inner">
                      価格
                      <div className="modal-input-container">
                        <input
                          type="text"
                          placeholder="最低額"
                          className="modal-input"
                        />
                        〜
                        <input
                          type="text"
                          placeholder="最高額"
                          className="modal-input"
                        />
                      </div>
                    </div>
                  </li>
                </ul>
                <button
                  type="button"
                  className="modal-search-button"
                  onClick={() => {
                    closeSearchSetting();
                    search("click");
                  }}
                >
                  検索する
                </button>
              </div>
              <div className={showCategory ? "modal-body show" : "modal-body"}>
                <ul className="modal-list">
                  <li className="modal-list-item">
                    <div className="modal-list-inner inner">
                      <button type="button" className="modal-list-button">
                        すべてのカテゴリ
                      </button>
                    </div>
                  </li>
                  {createJenreList()}
                </ul>
              </div>
            </div>
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
