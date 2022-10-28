import React, { useState, useRef } from "react";
import ItemList from "./ItemList";
import Item from "./Item";
import ladiesImg from "../img/icon_ladies.svg";
import mensImg from "../img/icon_mens.svg";
import innerImg from "../img/icon_inner.svg";
import bagImg from "../img/icon_bag.svg";
import shoesImg from "../img/icon_shoes.svg";
import watchImg from "../img/icon_watch.svg";
import accessoryImg from "../img/icon_accessory.svg";
import kidsImg from "../img/icon_kids.svg";
import toyImg from "../img/icon_toy.svg";
import outdoorImg from "../img/icon_outdoor.svg";
import appliancesImg from "../img/icon_appliances.svg";
import tvImg from "../img/icon_tv.svg";
import pcImg from "../img/icon_pc.svg";
import spImg from "../img/icon_sp.svg";
import foodImg from "../img/icon_food.svg";
import sweetsImg from "../img/icon_sweets.svg";
import drinkImg from "../img/icon_drink.svg";
import interiorImg from "../img/icon_interior.svg";
import dailyImg from "../img/icon_daily.svg";
import kitchenImg from "../img/icon_kitchen.svg";
import booksImg from "../img/icon_books.svg";
import cddvdImg from "../img/icon_cddvd.svg";
import gameImg from "../img/icon_game.svg";
import hobbyImg from "../img/icon_hobby.svg";
import instrumentImg from "../img/icon_instrument.svg";
import carsuppliesImg from "../img/icon_carsupplies.svg";
import cosmeImg from "../img/icon_cosme.svg";
import healthImg from "../img/icon_health.svg";
import medicalImg from "../img/icon_medical.svg";
import petImg from "../img/icon_pet.svg";
import diyImg from "../img/icon_diy.svg";
import renovationImg from "../img/icon_renovation.svg";
import catalogImg from "../img/icon_catalog.svg";

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

const genreImg = {
  ladies: ladiesImg,
  mens: mensImg,
  inner: innerImg,
  bag: bagImg,
  shoes: shoesImg,
  watch: watchImg,
  accessory: accessoryImg,
  kids: kidsImg,
  toy: toyImg,
  outdoor: outdoorImg,
  appliances: appliancesImg,
  tv: tvImg,
  pc: pcImg,
  sp: spImg,
  // data: dataImg,
  food: foodImg,
  sweets: sweetsImg,
  drink: drinkImg,
  // beer: beerImg,
  // shochu: shochuImg,
  interior: interiorImg,
  daily: dailyImg,
  kitchen: kitchenImg,
  books: booksImg,
  cddvd: cddvdImg,
  game: gameImg,
  hobby: hobbyImg,
  instrument: instrumentImg,
  // car: carImg,
  carsupplies: carsuppliesImg,
  cosme: cosmeImg,
  health: healthImg,
  medical: medicalImg,
  pet: petImg,
  diy: diyImg,
  renovation: renovationImg,
  // home: homeImg,
  catalog: catalogImg,
  // gift: giftImg,
};

const Search = () => {
  const [searchItems, setSearchItems] = useState([]);
  const [isItemPage, setIsItemPage] = useState(false);
  const [itemInfo, setItemInfo] = useState();
  const [scrollY, setScrollY] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [showSearchSetting, setShowSearchSetting] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const noItemsMsg = useRef("アイテムを検索しましょう。");

  const search = (e, type) => {
    if (type === "key") {
      if (e.key !== "Enter" || keyword === "") return;
    }
    if (checkPrice() < 0) return;
    if (checkKeyword() < 0) return;
    let url = "";
    let categoryStr = category === "all" ? "" : `&genreId=${genreId[category]}`;
    let minPriceStr = minPrice > 0 ? `&minPrice=${minPrice}` : "";
    let maxPriceStr = maxPrice > 0 ? `&maxPrice=${maxPrice}` : "";
    url = `${frontUrl}"%20"${encodeURIComponent(
      keyword
    )}${categoryStr}${minPriceStr}${maxPriceStr}${endUrl}`;
    fetch(url)
      .then((res) => res.json())
      .then((jsonRes) => {
        setSearchItems(jsonRes.Items);
        if (searchItems.length === 0) {
          noItemsMsg.current = "アイテムが見つかりませんでした。";
        } else {
          noItemsMsg.current = "アイテムを検索しましょう。";
        }
      });
  };

  const createJenreList = () => {
    let list = [];
    for (const key of Object.keys(genreId)) {
      list.push(
        <li className="modal-list-item" id={genreId[key]} key={key}>
          <div className="modal-list-inner inner">
            <img src={genreImg[key]} alt={key} className="category-icon" />
            <button
              type="button"
              className={
                category === key
                  ? "modal-list-button--selected"
                  : "modal-list-button"
              }
              onClick={() => {
                setCategory(key);
              }}
            >
              {genreName[key]}
            </button>
          </div>
        </li>
      );
    }
    return list;
  };

  const closeSearchSetting = () => {
    setShowCategory(false);
    setShowSearchSetting(false);
  };

  const clearSearchSetting = () => {
    setCategory("all");
    setMinPrice(0);
    setMaxPrice(0);
    noItemsMsg.current = "アイテムを検索しましょう。";
  };

  const checkPrice = () => {
    if (minPrice === 0 && maxPrice === 0) {
      noItemsMsg.current = "アイテムを検索しましょう。";
      return 0;
    } else if (minPrice < 0 || maxPrice < 0) {
      noItemsMsg.current = "検索条件を修正してください。";
      return -1;
    } else if (maxPrice <= minPrice && minPrice >= 0 && maxPrice >= 0) {
      if (maxPrice === 0) {
        noItemsMsg.current = "アイテムを検索しましょう。";
        return 0;
      }
      noItemsMsg.current = "検索条件を修正してください。";
      return -2;
    }
    noItemsMsg.current = "アイテムを検索しましょう。";
    return 0;
  };

  const checkKeyword = () => {
    if (keyword.length <= 2) {
      noItemsMsg.current = "検索キーワードは3文字以上入力してください。";
      return -1;
    } else {
      noItemsMsg.current = "アイテムを検索しましょう。";
      return 0;
    }
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
                onChange={(e) => {
                  checkKeyword();
                  setKeyWord(e.target.value);
                }}
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
                <p className="message-no-item">{noItemsMsg.current}</p>
              )}
            </div>
          </div>
        </div>
        <div className={showSearchSetting ? "modal show" : "modal"}>
          <div className="modal-wrapper">
            <div className="modal-container">
              <div className="modal-header inner">
                {!showCategory ? (
                  <button
                    type="button"
                    className="modal-close"
                    onClick={() => {
                      closeSearchSetting();
                    }}
                  ></button>
                ) : (
                  <button
                    type="button"
                    className="modal-back"
                    onClick={() => {
                      setShowCategory(false);
                    }}
                  ></button>
                )}
                <h3 className="modal-header-text">検索の絞り込み</h3>
                <button
                  type="button"
                  className="modal-clear"
                  onClick={() => {
                    clearSearchSetting();
                  }}
                >
                  すべてクリア
                </button>
              </div>
              <div
                className={
                  showSearchSetting && !showCategory
                    ? "modal-body show"
                    : "modal-body"
                }
              >
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
                          type="number"
                          placeholder="最低額"
                          className="modal-input"
                          onChange={(e) => {
                            if (e.target.value < 0) return;
                            if (e.target.value === "") {
                              setMinPrice(0);
                            } else {
                              setMinPrice(Number(e.target.value));
                            }
                          }}
                          value={minPrice === 0 ? "" : minPrice}
                        />
                        〜
                        <input
                          type="number"
                          placeholder="最高額"
                          className="modal-input"
                          onChange={(e) => {
                            setMaxPrice(Number(e.target.value));
                          }}
                          value={maxPrice === 0 ? "" : maxPrice}
                        />
                        {checkPrice() === -1 && (
                          <p className="modal-input-error">
                            0より大きい金額を入力してください
                          </p>
                        )}
                        {checkPrice() === -2 && (
                          <p className="modal-input-error">
                            最高額を最低額より小さくしてください
                          </p>
                        )}
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
              <div
                className={
                  showSearchSetting && showCategory
                    ? "modal-body show"
                    : "modal-body"
                }
              >
                <ul className="modal-list">
                  <li className="modal-list-item">
                    <div className="modal-list-inner inner">
                      <button
                        type="button"
                        className={
                          category === "all"
                            ? "modal-list-button--selected"
                            : "modal-list-button"
                        }
                        onClick={() => {
                          setCategory("all");
                        }}
                      >
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
