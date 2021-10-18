import React from "react";
import TitleTemplate from "../../Helpers/tittle_template";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Responsive
import responsive from "../Cards Carousal/responsivesetup";

import NovelCardTemplate from "./novel_card"

const LatestNovels = () => {
  return (
    <div>
      <TitleTemplate title="Latest Novels Arrival" />
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
       <NovelCardTemplate title="India" price="800" rating={5}/>
       <NovelCardTemplate title="Pradeep Fundamental" price="400" rating={3}/>
       <NovelCardTemplate title="HC Verma Concept" price="300" rating={5}/>
       <NovelCardTemplate title="26Years" price="200" rating={4}/>
       <NovelCardTemplate title="NCERT Class 12 Biology" price="500" rating={3}/>
       </Carousel>
    </div>
  );
};

export default LatestNovels;
