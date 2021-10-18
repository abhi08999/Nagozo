import React from "react";
import TitleTemplate from "../../Helpers/tittle_template";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive
import responsive from "../Cards Carousal/responsivesetup";

import NovelCardTemplate from "./novel_card"

const FeaturedNovels = () => {
  return (
    <div>
      <TitleTemplate title="Featured Novels" />
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
       <NovelCardTemplate title="GRB New Era" price="376" rating={3}/>
       <NovelCardTemplate title="ABC Book" price="400" rating={3}/>
       <NovelCardTemplate title="XYZ" price="300" rating={2}/>
       <NovelCardTemplate title="UYS" price="200" rating={4}/>
       <NovelCardTemplate title="NIS" price="500" rating={5}/>
       </Carousel>
    </div>
  );
};

export default FeaturedNovels;
