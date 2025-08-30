import React, { useState } from 'react'
import './Carousel.css'
import type { carouselItemsList, carouselCardContent } from './Carousellnterfaces'
import CarouselCard from './CarouselCard'

const Carousel = ({itemsList} : {itemsList : carouselItemsList}) => {

  const[currentIndex, setIndex] = useState(0);

  const moveBack = () => {setIndex((current) => current === 0 ?  itemsList.length-1 : current-1)};

  const moveForward = () => {setIndex((current) => current === itemsList.length-1 ? 0 : current+1)};
  

  return (
    <>
     <div className="carousel-container">
     <button className="carousel-arrow left" onClick={moveBack}>⟨</button>
     <div className='carousel-wrapper'>
        {itemsList.map((item : carouselCardContent,ind)  => <CarouselCard key={item.id} currentCardIndex={currentIndex} carouselCardContentProp={item} cardIndex={ind} totalItems={itemsList.length}/>)}    
        {/* <CarouselCard currentCardIndex={currentIndex} carouselCardContentProp={itemsList[currentIndex]} /> */} {/* this is for showing one card at a */}
    </div>
      <button className="carousel-arrow right" onClick={moveForward}>⟩</button>
     </div>
    </>
  )
}

export default Carousel