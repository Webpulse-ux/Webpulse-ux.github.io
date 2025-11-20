"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type BeforeAfterSliderProps = {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
};

const MIN_AUTO_VALUE = 0;
const MAX_AUTO_VALUE = 100;
const IDLE_DELAY_MS = 3500;

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Voorbeeld van de oude situatie",
  afterAlt = "Voorbeeld van de nieuwe situatie",
}: BeforeAfterSliderProps) {
  const [value, setValue] = useState(52);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const lastInteractionRef = useRef(Date.now());
  const autoDirectionRef = useRef<1 | -1>(1);

  const clamp = (nextValue: number) => Math.min(100, Math.max(0, nextValue));

  const registerInteraction = () => {
    lastInteractionRef.current = Date.now();
  };

  const updateValue = (nextValue: number) => {
    setValue(() => {
      const clamped = clamp(nextValue);
      registerInteraction();
      return clamped;
    });
  };

  const valueFromClientX = (clientX: number) => {
    if (!sliderRef.current) return value;
    const rect = sliderRef.current.getBoundingClientRect();
    const relative = ((clientX - rect.left) / rect.width) * 100;
    return clamp(relative);
  };

  const startDragging = (clientX: number) => {
    setIsDragging(true);
    updateValue(valueFromClientX(clientX));
  };

  useEffect(() => {
    if (!isDragging) return;
    const handlePointerMove = (event: PointerEvent) => {
      event.preventDefault();
      updateValue(valueFromClientX(event.clientX));
    };
    const handlePointerUp = () => setIsDragging(false);

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      if (isDragging) return;
      if (Date.now() - lastInteractionRef.current < IDLE_DELAY_MS) return;

      setValue((previous) => {
        let nextValue = previous + autoDirectionRef.current * 0.25;

        if (nextValue >= MAX_AUTO_VALUE) {
          autoDirectionRef.current = -1;
          nextValue = MAX_AUTO_VALUE;
        } else if (nextValue <= MIN_AUTO_VALUE) {
          autoDirectionRef.current = 1;
          nextValue = MIN_AUTO_VALUE;
        }

        return Number(nextValue.toFixed(2));
      });
    }, 16);

    return () => window.clearInterval(interval);
  }, [isDragging]);

  const handleToggleClick = () => {
    const target = value >= 50 ? 20 : 80;
    updateValue(target);
  };

  const glowLabel = (text: string, extraClassName: string) => (
    <div className={`pointer-events-none absolute ${extraClassName}`}>
      <div className="relative inline-flex rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-800 drop-shadow-[0_0_16px_rgba(79,70,229,0.35)]">
        <span
          className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-sky-400 opacity-70 blur-xl"
          aria-hidden="true"
        />
        <span className="relative">{text}</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 rounded-[32px] border border-slate-100 bg-white p-8 shadow-[0_20px_60px_rgba(148,163,184,0.25)]">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.12em] text-indigo-500">Voorbeeld vernieuwing</p>
        <p className="text-sm text-slate-600">
          We begeleidden de klant bij het moderniseren van hun volledige website, inclusief copy, visuele identiteit en
          micro-interacties.
        </p>
      </div>

      <div className="space-y-4">
        <div
          ref={sliderRef}
          className="relative aspect-[8/5] w-full select-none overflow-hidden rounded-[28px] border border-slate-100 bg-slate-100"
          onPointerDown={(event) => startDragging(event.clientX)}
        >
          <Image src={afterSrc} alt={afterAlt} fill sizes="(min-width: 1024px) 540px, 100vw" className="object-cover" />

          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${Math.max(0, 100 - value)}% 0 0)`,
              transition: isDragging ? "none" : "clip-path 220ms ease",
            }}
            aria-hidden="true"
          >
            <Image
              src={beforeSrc}
              alt={beforeAlt}
              fill
              sizes="(min-width: 1024px) 540px, 100vw"
              className="object-cover"
            />
          </div>

          <div
            className="absolute inset-y-0 flex -translate-x-1/2 items-center"
            style={{
              left: `${value}%`,
              transition: isDragging ? "none" : "left 220ms ease",
            }}
            aria-hidden="true"
          >
            <div className="pointer-events-none h-full border-l border-white/80" />
            <button
              type="button"
              className="relative ml-[-20px] flex h-12 w-12 items-center justify-center rounded-full border border-white/90 bg-indigo-500 text-white shadow-[0_10px_30px_rgba(79,70,229,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
              aria-label="Sleep om voor en na te vergelijken"
              onPointerDown={(event) => {
                event.stopPropagation();
                registerInteraction();
                startDragging(event.clientX);
              }}
              onClick={(event) => {
                event.stopPropagation();
                handleToggleClick();
              }}
            >
              <span className="text-base font-semibold">↔</span>
            </button>
          </div>

          {glowLabel("Voor", "left-4 top-4")}
          {glowLabel("Na", "right-4 top-4")}
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={value}
          onChange={(event) => updateValue(Number(event.target.value))}
          className="sr-only"
          aria-label="Vergelijk de oude en nieuwe versie"
        />
      </div>
    </div>
  );
}
