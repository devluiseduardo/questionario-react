import React from "react";
import styles from "../../styles/Slide.module.css";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) setActive(active - 1);
  }

  function slideNext() {
    if (active < slides.length - 1) setActive(active + 1);
  }

  return (
    <section className={styles.container}>
      <div
        ref={contentRef}
        className={styles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={styles.item}>
            {slide.text}
          </div>
        ))}
      </div>
      <nav className={styles.nav}>
        <button
          className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold hover:scale-105 duration-75"
          onClick={slidePrev}
        >
          Anterior
        </button>
        <button
          className="bg-blue-600 px-3 py-2 rounded-md text-white font-semibold hover:scale-105 duration-75"
          onClick={slideNext}
        >
          Próximo
        </button>
      </nav>
    </section>
  );
};

export default Slide;
