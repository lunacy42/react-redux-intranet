import styles from './HorizontalScrollBox.module.scss';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import { ReactNode, useEffect, useRef } from 'react';

interface HorizontalScrollBoxProps {
  children: ReactNode;
  cardRef: { current: null | HTMLDivElement };
}

const HorizontalScrollBox = ({ children, cardRef }: HorizontalScrollBoxProps) => {
  const scrollContainerRef = useRef<null | HTMLDivElement>(null);
  const buttonLeftRef = useRef<null | HTMLDivElement>(null);
  const buttonRightRef = useRef<null | HTMLDivElement>(null);

  const setButtonVisability = () => {
    setTimeout(() => {
      const containerWidth = scrollContainerRef?.current
        ? scrollContainerRef.current.offsetWidth + 14
        : 500;
      const totalScrollWidth = scrollContainerRef?.current
        ? scrollContainerRef.current.scrollWidth
        : 250;
      const scrollPosition = scrollContainerRef?.current
        ? scrollContainerRef.current.scrollLeft
        : 0;
      if (scrollPosition >= totalScrollWidth - containerWidth) {
        if (buttonRightRef?.current) {
          buttonRightRef.current.style.display = 'none';
        }
      } else {
        if (buttonRightRef?.current) {
          buttonRightRef.current.style.display = 'flex';
        }
      }
      if (scrollPosition === 0) {
        if (buttonLeftRef?.current) {
          buttonLeftRef.current.style.display = 'none';
        }
      } else {
        if (buttonLeftRef?.current) {
          buttonLeftRef.current.style.display = 'flex';
        }
      }
    }, 500);
  };

  const scrollForward = () => {
    const scrollWidth = cardRef?.current ? cardRef.current.offsetWidth + 12 : 250;
    scrollContainerRef &&
      scrollContainerRef.current &&
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollWidth,
        behavior: 'smooth'
      });
    setButtonVisability();
  };

  const scrollBack = () => {
    const scrollWidth = cardRef?.current ? -cardRef.current.offsetWidth + 12 : -250;
    scrollContainerRef &&
      scrollContainerRef.current &&
      scrollContainerRef.current.scrollBy({
        top: 0,
        left: scrollWidth,
        behavior: 'smooth'
      });
    setButtonVisability();
  };
  return (
    <div className={styles.listContainer}>
      <div className={styles.grid} ref={scrollContainerRef}>
        {children}
      </div>
      <div className={styles.scrollButtonRightWrapper} ref={buttonRightRef}>
        <BsArrowRightCircleFill className={styles.scrollForwardIcon} onClick={scrollForward} />
      </div>
      <div className={styles.scrollButtonLeftWrapper} ref={buttonLeftRef}>
        <BsArrowLeftCircleFill className={styles.scrollBackIcon} onClick={scrollBack} />
      </div>
    </div>
  );
};

export default HorizontalScrollBox;
