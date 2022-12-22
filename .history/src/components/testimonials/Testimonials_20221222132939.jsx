import React from "react";
import "./testimonials.css";
// import Swiper core and required modules


import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
// import "swiper/css/navigation";




import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


// import {Pagination} from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import "swiper/css"
// import 'swiper/css/pagination';

import dataAvatar from "./testimonial";
const Testimonials = (props) => {


  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container mySwiper " navigation={true}  // install Swiper modules
      modules={Pagination}
      // modules={[Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }
    }
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
