import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCreative } from 'swiper/modules';

import SliderArrowButton from './SliderArrowButton';

import styles from './index.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';

function Slider({ slides, tag }) {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': 'var(--primary)',
        '--swiper-pagination-color': 'var(--primary)',
      }}
      tag={tag}
      wrapperTag="ul"
      className={`${styles.slider}`}
      spaceBetween={50}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }}
      modules={[Pagination, EffectCreative]}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.key} className={`${styles.slide}`} tag="li">
          {slide.content}
        </SwiperSlide>
      ))}

      <SliderArrowButton direction="previous" />
      <SliderArrowButton direction="next" />
    </Swiper>
  );
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      content: PropTypes.element,
    }),
  ).isRequired,
  tag: PropTypes.string,
};

Slider.defaultProps = {
  tag: 'div',
};

export default Slider;
