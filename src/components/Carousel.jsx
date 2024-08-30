import PropTypes from 'prop-types';

import Slider from 'react-slick';

import {
  FaChevronLeft as PrevArrowIcon,
  FaChevronRight as NextArrowIcon,
} from 'react-icons/fa6';

import image1 from '../assets/images/missions-bg-dark.webp';
import image2 from '../assets/images/missions-bg-light.webp';
import image3 from '../assets/images/rockets-bg-dark.webp';
import image4 from '../assets/images/rockets-bg-light.webp';

import 'slick-carousel/slick/slick.css';

import styles from './Carousel.module.css';

function Arrow(props) {
  const { className, onClick, title } = props;

  return (
    <button
      className={`${className} ${
        title === 'previous' ? styles.prevArrow : styles.nextArrow
      }
       ${styles.arrow}`}
      type="button"
      onClick={onClick}
      aria-label={title}
    >
      {title === 'previous' ? <PrevArrowIcon /> : <NextArrowIcon />}
    </button>
  );
}

function Carousel({ imageUrls }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container">
      <Slider
        className={styles.slider}
        dots={settings.dots}
        fade={settings.fade}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        waitForAnimate={settings.waitForAnimate}
        nextArrow={<Arrow title="next" />}
        prevArrow={<Arrow title="previous" />}
      >
        {imageUrls.map((url) => (
          <div key={url} className={styles.slide}>
            <img src={url} alt="carousel" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

Arrow.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Carousel.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
