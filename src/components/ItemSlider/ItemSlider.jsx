import PropTypes from "prop-types";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "./ItemSlider.css";
import SingleCard from "../SingleCard/SingleCard";

const ItemSlider = ({ component, data }) => {
  // data => Array.flat() || Array.flatMap()

  return (
    <>
      <Swiper
        draggable={true}
        slidesPerView={4}
        spaceBetween={30}
        autoplay={true}
        pagination={false}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {data?.map((d) => (
          <SwiperSlide key={d.id}>
            <SingleCard cardInfo={d} component={component} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

ItemSlider.propTypes = { data: PropTypes.array.isRequired };
ItemSlider.propTypes = { component: PropTypes.string.isRequired };

export default ItemSlider;
