import React from "react";
import "./testimonials.css";
// import Swiper core and required modules


import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";


// import required modules
import { Navigation } from "swiper";


import dataAvatar from "./testimonial";
const Testimonials = (props) => {


  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"  // install Swiper modules
      navigation={true} modules={[Navigation]} className="mySwiper"
    >
        {dataAvatar.map((element) => (
          <SwiperSlide className="testimonial" key={element.id}>
            <div className="client__avatar">
              <img src={element.image} alt="element.title" />
            </div>
            <h5
              className="client_
            _name "
            >
              {element.name}
            </h5>
            <small className="client__review">{element.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
