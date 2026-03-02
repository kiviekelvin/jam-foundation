"use client";
import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

const StatCounter = ({ value, label, suffix = "" }: StatCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericPart = value.replace(/[^0-9]/g, "");
    const target = parseInt(numericPart, 10);

    if (isNaN(target)) {
      setDisplay(value);
      return;
    }

    // Only extract a leading prefix (e.g. "$") — trailing chars come from suffix prop
    const prefix = value.match(/^[^0-9]*/)?.[0] || "";

    const duration = 1200;
    const steps = 40;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += Math.ceil(target / steps);
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setDisplay(`${prefix}${current}`);
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-jam-sage mb-2 tabular-nums">
        {display}{suffix}
      </p>
      <p className="text-sm text-primary-foreground/60 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default StatCounter;