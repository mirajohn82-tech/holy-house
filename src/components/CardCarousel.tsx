"use client";
import { useState, useLayoutEffect, useRef } from "react";
import ContentCard from "./ContentCard";
import svgPaths from "@/imports/Home/svg-faniy7js1a";

const CARD_W = 346;
const GAP = 24;
const STEP = CARD_W + GAP;

interface CardData { image: string; title: string; description: string; }
interface CardCarouselProps { cards: CardData[]; }

export default function CardCarousel({ cards }: CardCarouselProps) {
  const N = cards.length;
  const [start, setStart] = useState(0);
  const [busy, setBusy] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (rowRef.current) {
      rowRef.current.style.transition = "none";
      rowRef.current.style.transform = `translateX(-${STEP}px)`;
    }
  }, [start]);

  function goNext() {
    if (busy || !rowRef.current) return;
    setBusy(true);
    rowRef.current.style.transition = "transform 350ms ease-in-out";
    rowRef.current.style.transform = `translateX(-${2 * STEP}px)`;
    setTimeout(() => { setStart((s) => (s + 1) % N); setBusy(false); }, 360);
  }

  function goPrev() {
    if (busy || !rowRef.current) return;
    setBusy(true);
    rowRef.current.style.transition = "transform 350ms ease-in-out";
    rowRef.current.style.transform = "translateX(0px)";
    setTimeout(() => { setStart((s) => (s - 1 + N) % N); setBusy(false); }, 360);
  }

  const displayCards = [-1, 0, 1, 2, 3].map((offset) => cards[(start + offset + N) % N]);
  const viewportW = 3 * CARD_W + 2 * GAP;

  return (
    <div className="flex gap-[24px] items-center" style={{ width: "1200px" }}>
      <button onClick={goPrev} className="flex items-center justify-center shrink-0 cursor-pointer" aria-label="Previous">
        <div className="-scale-y-100 rotate-180">
          <div className="overflow-clip relative size-[32px]">
            <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
              <g><path d={svgPaths.p35273dc0} fill="#6F82B8" fillOpacity="0.4" /></g>
            </svg>
          </div>
        </div>
      </button>
      <div style={{ width: `${viewportW}px`, overflow: "hidden", flexShrink: 0 }}>
        <div ref={rowRef} style={{ display: "flex", gap: `${GAP}px`, transform: `translateX(-${STEP}px)`, width: `${5 * CARD_W + 4 * GAP}px` }}>
          {displayCards.map((card, i) => <ContentCard key={`${start}-${i}`} {...card} />)}
        </div>
      </div>
      <button onClick={goNext} className="overflow-clip relative shrink-0 size-[32px] cursor-pointer" aria-label="Next">
        <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
          <g><path d={svgPaths.p35273dc0} fill="#2B3C6B" /></g>
        </svg>
      </button>
    </div>
  );
}
