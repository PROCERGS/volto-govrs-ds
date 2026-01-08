import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Card from '../Card/Card';
import './CarouselCard.css';

const chunkItems = (items, size) => {
  if (!Array.isArray(items) || items.length === 0) return [];
  const safeSize = Math.max(1, size || 1);
  const chunks = [];
  for (let i = 0; i < items.length; i += safeSize) {
    chunks.push(items.slice(i, i + safeSize));
  }
  return chunks;
};

const CarouselCard = ({
  title,
  description,
  items = [],
  cardVariant,
  cardsPerView = 3,
  cardsPerViewTablet = 2,
  cardsPerViewMobile = 1,
  gap = 16,
  autoplay = false,
  autoplaySpeed = 5000,
  circular = true,
  showIndicators = true,
  showArrows = true,
}) => {
  const [perView, setPerView] = useState(cardsPerView);

  useEffect(() => {
    const updatePerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setPerView(cardsPerViewMobile);
        return;
      }
      if (width < 1024) {
        setPerView(cardsPerViewTablet);
        return;
      }
      setPerView(cardsPerView);
    };

    updatePerView();
    window.addEventListener('resize', updatePerView);
    return () => window.removeEventListener('resize', updatePerView);
  }, [cardsPerView, cardsPerViewMobile, cardsPerViewTablet]);

  const slides = useMemo(() => chunkItems(items, perView), [items, perView]);
  const totalSlides = slides.length || 1;
  const [currentSlide, setCurrentSlide] = useState(0);

  const contentWidth = useMemo(() => {
    const baseCardWidth = 320;
    const cardsWidth = perView * baseCardWidth;
    const gapsWidth = Math.max(perView - 1, 0) * gap;
    return cardsWidth + gapsWidth;
  }, [gap, perView]);

  useEffect(() => {
    setCurrentSlide(0);
  }, [perView, items]);

  useEffect(() => {
    if (!autoplay || totalSlides <= 1) return undefined;
    const id = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1;
        if (next >= totalSlides) {
          return circular ? 0 : prev;
        }
        return next;
      });
    }, autoplaySpeed);

    return () => clearInterval(id);
  }, [autoplay, autoplaySpeed, circular, totalSlides]);

  const goTo = (idx) => {
    if (!circular) {
      setCurrentSlide(Math.min(Math.max(idx, 0), totalSlides - 1));
      return;
    }
    const wrapped = ((idx % totalSlides) + totalSlides) % totalSlides;
    setCurrentSlide(wrapped);
  };

  const goPrev = () => goTo(currentSlide - 1);
  const goNext = () => goTo(currentSlide + 1);

  if (!items || items.length === 0) {
    return (
      <div className="carousel-card-placeholder">
        <p>Nenhum card cadastrado.</p>
      </div>
    );
  }

  return (
    <section className="carousel-card" aria-roledescription="carousel">
      {(title || description) && (
        <header className="carousel-card-header">
          {title && <h2 className="carousel-card-title">{title}</h2>}
          {description && (
            <p className="carousel-card-description">{description}</p>
          )}
        </header>
      )}

      <div
        className="carousel-card-viewport"
        style={{
          '--cards-per-view': perView,
          '--cards-gap': `${gap}px`,
          '--carousel-content-width': `${contentWidth}px`,
        }}
      >
        <div
          className="carousel-card-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slideItems, slideIdx) => (
            <div
              key={slideIdx}
              className={`carousel-card-slide ${slideIdx === currentSlide ? 'active' : ''}`}
              style={{ '--cards-gap': `${gap}px`, '--cards-per-view': perView }}
              role="group"
              aria-label={`Slide ${slideIdx + 1} de ${totalSlides}`}
            >
              {slideItems.map((item, idx) => {
                const variant = cardVariant || item?.variant || 'post';
                return (
                  <div
                    className={`carousel-card-item ${variant === 'icon' ? 'carousel-card-item-icon' : ''}`}
                    key={`${slideIdx}-${idx}`}
                  >
                    <Card
                      title={item?.title || item?.heading || `Card ${idx + 1}`}
                      description={item?.description || item?.text}
                      image={item?.image}
                      imageAlt={item?.imageAlt}
                      href={item?.href || item?.url}
                      variant={variant}
                      size={item?.size}
                      disabled={item?.disabled}
                      itens={item?.itens}
                      bodyImg={item?.bodyImg}
                      bodyImgAlt={item?.bodyImgAlt}
                      acao={item?.acao}
                      onLike={item?.onLike}
                      onShare={item?.onShare}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {showArrows && totalSlides > 1 && (
          <>
            <button
              className="carousel-card-button prev"
              type="button"
              onClick={goPrev}
              aria-label="Slide anterior"
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              className="carousel-card-button next"
              type="button"
              onClick={goNext}
              aria-label="Proximo slide"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </>
        )}
      </div>

      {showIndicators && totalSlides > 1 && (
        <div className="carousel-card-indicators" aria-hidden>
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`carousel-card-indicator ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => goTo(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CarouselCard;
