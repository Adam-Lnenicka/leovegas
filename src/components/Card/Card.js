import React from "react";

const Card = ({ gameThumbnail, gameName, slug, gamePreviewUrl}) => {
  return (
    <div className="card">
      <a href={gamePreviewUrl}>
        <img src={`http://${gameThumbnail}`} alt="itemPic" />
        <div>
          <h2>{gameName}</h2>
          <p>{slug}</p>      
        </div>
      </a>
    </div>
  );
};

export default Card;
