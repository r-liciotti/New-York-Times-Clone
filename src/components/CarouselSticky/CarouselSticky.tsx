import { UseQueryResult } from "@tanstack/react-query";
import React, { useRef } from "react";
import styles from "./CarouselSticky.module.css";
import Slider from "react-slick";
import Spinner from "../Spinner/Spinner";
import { TopStoriesArticle } from "../../intrerface/interface";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticlePreview from "../ArticlePreview/ArticlePreview.tsx";
import ArticleImage from "../ArticleImage/ArticleImage.tsx";
import Error from "../Error/Error";
import { AxiosError } from "axios";

interface CarouselStickyProps {
  UseQueryCarousel: UseQueryResult<
    { data: { results: TopStoriesArticle[] } },
    unknown
  >;
}

const CarouselSticky: React.FC<CarouselStickyProps> = ({
  UseQueryCarousel,
}) => {
  const sliderRef = useRef<Slider | null>(null);

  const next = () => {
    sliderRef.current?.slickNext(); // ora sliderRef.current è di tipo Slider | null
  };
  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (UseQueryCarousel.isError) {
    return (
      <Error isError={true} error={UseQueryCarousel.error as AxiosError} />
    );
  }
  if (UseQueryCarousel.isLoading) {
    return <Spinner />;
  }
  const Articles = UseQueryCarousel.data?.data.results as TopStoriesArticle[];

  const slides = [];
  for (let i = 0; i < Articles.length; i += 3) {
    slides.push(
      <div key={i} className={styles.carouselSlide}>
        {/* Prima riga: una colonna singola con un articolo */}
        <div className={styles.carouselFirstRow}>
          <div className={`${styles.carouselColumn} ${styles.singleColumn}`}>
            <ArticlePreview article={Articles[i]} indexMultimedia={2} />
          </div>
        </div>
        {/* Seconda riga: due colonne con due articoli */}
        <div className={styles.carouselSecondRow}>
          {Articles[i + 1] && (
            <div className={styles.carouselColumn}>
              <a href={Articles[i + 1]?.url} target="_blank">
                <ArticleImage
                  article={Articles[i + 1]}
                  withPhotographer={false}
                />
                <h3>{Articles[i + 1]?.title}</h3>
              </a>
            </div>
          )}
          {Articles[i + 2] && (
            <div className={styles.carouselColumn}>
              <a href={Articles[i + 2]?.url} target="_blank">
                <ArticleImage
                  article={Articles[i + 2]}
                  withPhotographer={false}
                  indexMultimedia={2}
                />
                <h3>{Articles[i + 2]?.title}</h3>
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="slider-container">
      <Slider
        ref={(slider: Slider | null) => {
          sliderRef.current = slider; // Imposta correttamente il ref con tipo Slider o null
        }}
        {...settings}
      >
        {slides}
      </Slider>
      <div className={styles.button_wrapper}>
        <button className={styles.rotate} onClick={previous}>
          <svg viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="12.5"></circle>
            <path
              d="M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998"
              fill="none"
            ></path>
          </svg>
        </button>
        <button className="button" onClick={next}>
          <svg viewBox="0 0 26 26">
            <circle cx="13" cy="13" r="12.5"></circle>
            <path
              d="M10.3984 7.7998L15.5984 12.9998L10.3984 18.1998"
              fill="none"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarouselSticky;
