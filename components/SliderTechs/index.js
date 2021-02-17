import React from "react";
import { CustomSlider, SliderHolder, Logo, Wrapper } from "./styles";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { sliderItems } from "./items";
import { Fade } from "react-reveal";

const Arrow = ({
  currentSlide,
  arrowColor,
  left,
  slideCount,
  children,
  ...props
}) => {
  return left ? (
    <FiChevronLeft {...props} color={arrowColor} />
  ) : (
    <FiChevronRight {...props} color={arrowColor} />
  );
};

const Slider = ({ arrowColor = "#F6F8FC" }) => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <Arrow left arrowColor={arrowColor} />,
    nextArrow: <Arrow arrowColor={arrowColor} />,
    responsive: [
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 392,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <Wrapper>
      <CustomSlider {...settings}>
        {sliderItems.map((item, index) => {
          return (
            <SliderHolder key={index}>
              <Fade delay={300}>
                <Logo
                  small={item.image === "lgLogo" ? true : false}
                  src={require(`@images/sliderPartners/${item.image}.svg`)}
                  alt={item.alt}
                />
              </Fade>
            </SliderHolder>
          );
        })}
      </CustomSlider>
    </Wrapper>
  );
};
export default Slider;
