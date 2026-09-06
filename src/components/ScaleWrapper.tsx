"use client";
import { useEffect, useState } from "react";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 8071;

export default function ScaleWrapper({ children }: { children: React.ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function update() {
      setScale(window.innerWidth / DESIGN_WIDTH);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div style={{ width: "100%", height: DESIGN_HEIGHT * scale, overflow: "hidden" }}>
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transformOrigin: "top left",
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
