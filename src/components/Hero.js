import React from "react";
import "../assets/css/Hero.css";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  EffectFade,
  Pagination,
  Autoplay
} from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css/bundle";

SwiperCore.use([Navigation, EffectFade, Pagination, Autoplay]);

const Hero = () => {
  const navigate = useNavigate();
  const slides = [];

  slides.push(
    <SwiperSlide key={`slide-1`} style={{ lineStile: "none" }} tag="li">
      <div className="hero1">
        <div className="hero_text">
          <h1>Find the best places out there with us</h1>
          <h5>
            We provide a complete service for the sale, purchase, or rental of
            real estate.
          </h5>
          <div className="btn-container">
          <Button
            onClick={() => navigate('/property')}
            className="btn"
            variant="outlined"
            style={{
              background: "linear-gradient(to bottom left, #4cafff, #15e4fe)",
              color: "white",
              textTransform: "inherit",
              marginTop: 20,
              fontWeight: 600,
            }}
          >
            View Properties
          </Button>
          </div> 
        </div>
      </div>
    </SwiperSlide>
  );

  slides.push(
    <SwiperSlide key={`slide-2`} style={{ lineStile: "none" }} tag="li">
      <div className="hero2">
        <div className="hero_text2">
          <h1>Find the best places out there with us</h1>
          <h5>
            We provide a complete service for the sale, purchase, or rental of
            real estate.
          </h5>
          <div className="btn-container">
          <Button
            onClick={() => navigate('/property')}
            className="btn"
            variant="outlined"
            style={{
              background: "linear-gradient(to bottom left, #4cafff, #15e4fe)",
              color: "white",
              textTransform: "inherit",
              marginTop: 20,
              fontWeight: 600,
            }}
          >
            View Properties
          </Button>
          </div> 
        </div>
      </div>
    </SwiperSlide>
  );

  slides.push(
    <SwiperSlide key={`slide-3`} style={{ lineStile: "none" }} tag="li">
      <div className="hero3">
        <div className="hero_text">
          <h1>Find the best places out there with us</h1>
          <h5>
            We provide a complete service for the sale, purchase, or rental of
            real estate.
          </h5>
          <div className="btn-container">
          <Button
            onClick={() => navigate('/property')}
            className="btn"
            variant="outlined"
            style={{
              background: "linear-gradient(to bottom left, #4cafff, #15e4fe)",
              color: "white",
              textTransform: "inherit",
              marginTop: 20,
              fontWeight: 600,
            }}
          >
            View Properties
          </Button>
          </div> 
        </div>
      </div>
    </SwiperSlide>
  );

  return (
    <React.Fragment>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
        // breakpoints={{
        //   // when window width is >= 640px
        //   640: {
        //     width: 640
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     width: 768
        //   },
        // }}
      >
        {slides}
      </Swiper>
    </React.Fragment>
  );
};

export default Hero;
