import React from "react";
import Card from "../Card/Card";

const CardsList = ({ items }) => {
  return (
    <div className="cardList">
      {items.map((item, i) => {
        return (
          <Card
            key={i}
            gameName={item.gameName}
            gameThumbnail={item.gameThumbnail}
            slug={item.slug}
            gamePreviewUrl={item.gamePreviewUrl}
          />
        );
      })}
    </div>
  );
};
export default CardsList;
