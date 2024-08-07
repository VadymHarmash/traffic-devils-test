import React from 'react'
import styles from './slider.module.scss'
import sliderData from './data'
import facebook from '../../../assets/icons/main/slider/facebook.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider() {
    return (
        <div className={styles.slider}>
            <div className="container">
                <div className={styles.slider__wrapper}>
                    <Swiper
                        className={styles.slider__carousel}
                        spaceBetween={50}
                        slidesPerView={1}
                    >
                        {sliderData.map((sliderItem) => (
                            <SwiperSlide key={sliderItem.id} className={styles.slider__carousel__item}>
                                <div className={styles.slider__carousel__item__header}>
                                    <img src={sliderItem.photo} alt={sliderItem.name} />
                                    <div className={styles.slider__carousel__item__header__info}>
                                        <h2>{sliderItem.name}</h2>
                                        <span>{sliderItem.role}</span>
                                        <img src={facebook} alt="Facebook" />
                                    </div>
                                </div>
                                <div className={styles.slider__carousel__item__body}>
                                    <p>{sliderItem.quote}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
