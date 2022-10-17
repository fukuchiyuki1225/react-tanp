import React from "react";
import homeIcon from "../img/icon_home.svg";
import homeIconActive from "../img/icon_home-active.svg";
import favoriteIcon from "../img/icon_favorite.svg";
import favoriteIconActive from "../img/icon_favorite-active.svg";
import rankingIcon from "../img/icon_ranking.svg";
import rankingIconActive from "../img/icon_ranking-active.svg";

const MenuButton = (props) => {
  let iconImg = null;
  let textClass = props.name === props.currentPage ? "-active" : "";

  if (props.name === props.currentPage) {
    if (props.name === "ホーム") {
      iconImg = homeIconActive;
    } else if (props.name === "お気に入り") {
      iconImg = favoriteIconActive;
    } else if (props.name === "ランキング") {
      iconImg = rankingIconActive;
    }
  } else {
    if (props.name === "ホーム") {
      iconImg = homeIcon;
    } else if (props.name === "お気に入り") {
      iconImg = favoriteIcon;
    } else if (props.name === "ランキング") {
      iconImg = rankingIcon;
    }
  }

  return (
    <button onClick={() => props.setCurrentPage(props.name)} type="button">
      <img className="menu-icon" src={iconImg} alt={props.name} />
      <p className={`menu-text${textClass}`}>{props.name}</p>
    </button>
  );
};

export default MenuButton;
