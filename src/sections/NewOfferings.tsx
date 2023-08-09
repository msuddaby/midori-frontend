import { useRef } from "react";
import WDSDCard from "../components/WDSDCard";
import "./NewOfferings.css";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function NewOfferings() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const cards = [11, 12, 13];

  const next = () => {
    if (!cardsRef.current) return;
    const card = cardsRef.current.children[0];
    cardsRef.current.scrollBy({
      left: card.clientWidth,
      behavior: "smooth",
    });
  };

  const last = () => {
    if (!cardsRef.current) return;
    const card = cardsRef.current.children[0];
    cardsRef.current.scrollBy({
      left: -card.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="bg-black py-32">
        <div className="offerings-container">
          <div className="offerings-header">
            <h4 className="text-white">What Does She Do?</h4>
          </div>
          <div ref={cardsRef} className="offerings-cards">
            {cards.map((card) => (
              <WDSDCard key={card} />
            ))}
          </div>
          <div className="offerings-controls">
            <button
              onClick={last}
              className="offerings-controls__button text-white"
            >
              <NavigateBeforeIcon />
            </button>
            <button
              onClick={next}
              className="offerings-controls__button text-white"
            >
              <NavigateNextIcon />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
