import React from "react";
import type { carouselCardContent } from "./Carousellnterfaces";

const CarouselCard = ({
  carouselCardContentProp,
  currentCardIndex,
  cardIndex,
  totalItems
}: {
  carouselCardContentProp: carouselCardContent;
  currentCardIndex: number;
  cardIndex: number;
  totalItems: number;
}) => {
  let position = "";

  if (cardIndex === currentCardIndex) {
    position = "active";
  } else if (cardIndex === (currentCardIndex - 1 + totalItems) % totalItems) {
    // left card
    position = "left";
  } else if (cardIndex === (currentCardIndex + 1) % totalItems) {
    // right card
    position = "right";
  } else {
    position = "hidden";
  }

  return (
    <div className={`carousel-card ${position}`}>
      <img
        src={carouselCardContentProp.image}
        alt={carouselCardContentProp.name}
        loading="lazy"
      />
      <h2>{carouselCardContentProp.name}</h2>
    </div>
  );
};

export default CarouselCard;
