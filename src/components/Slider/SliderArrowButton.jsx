import PropTypes from 'prop-types';

import { useSwiper } from 'swiper/react';

import {
  FaChevronLeft as PrevIcon,
  FaChevronRight as NextIcon,
} from 'react-icons/fa6';

import styles from './index.module.css';

const SliderArrowButton = ({ direction }) => {
  const swiper = useSwiper();

  return (
    <button
      type="button"
      className={`${styles.sliderArrowButton} ${styles[direction]} border-0 p-2`}
      onClick={() => swiper.slideNext()}
      aria-label={`Slide to the ${direction} slide`}
    >
      {direction === 'next' ? <NextIcon /> : <PrevIcon />}
    </button>
  );
};

SliderArrowButton.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default SliderArrowButton;
