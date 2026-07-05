import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { testimonialsData } from "../data/testimonialsData";

const Testimonials = () => {
  return (
    <section className="testimonials-section">
         <div className="section-heading">
    <span className="line"></span>
    <h2>WHAT OUR CUSTOMERS SAY</h2>
    <span className="line"></span>
  </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialsData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="testimonial-card">
              <div className="quote-icon">❝</div>

              <p className="testimonial-text">{item.text}</p>

              <div className="rating">★★★★★</div>

              <h4>– {item.name}</h4>
              <span>{item.designation}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;