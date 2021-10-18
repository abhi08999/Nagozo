import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive
import responsive from "./responsivesetup";

import React from "react";
import CardTemplate from "./card_template";
const CardCarousal = () => {
  return (
    <Carousel
      additionalTransfrom={0}
      autoPlay
      arrows
      autoPlaySpeed={1000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      renderButtonGroupOutside={false}
      
      responsive={responsive}
      sliderClass=""
      slidesToSlide={1}
      swipeable
    >
      <CardTemplate imgUrl="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
      <CardTemplate imgUrl="https://picsum.photos/id/1/500/300" />
      <CardTemplate imgUrl="https://picsum.photos/id/10/500/300" />
      <CardTemplate imgUrl="https://picsum.photos/id/100/500/300" />
      <CardTemplate imgUrl="https://picsum.photos/id/43/500/300" />
       </Carousel>
  );
};

export default CardCarousal;
