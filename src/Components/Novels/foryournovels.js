import React from "react";
import TitleTemplate from "../../Helpers/tittle_template";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive
import responsive from "../Cards Carousal/responsivesetup";

import CardTemplate from "../Cards Carousal/card_template";
const UserNovels = () => {
  return (
    <div>
      <TitleTemplate title="Novels for you" />
      <Carousel
        additionalTransfrom={0}
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
        <CardTemplate imgUrl="https://picsum.photos/id/83/500/300" />
        <CardTemplate imgUrl="https://picsum.photos/id/92/500/300" />
        <CardTemplate imgUrl="https://picsum.photos/id/42/500/300" />
        <CardTemplate imgUrl="https://picsum.photos/id/91/500/300" />
      </Carousel>
    </div>
  );
};

export default UserNovels;
