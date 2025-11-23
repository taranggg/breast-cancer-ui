import React from "react";
import { motion } from "framer-motion";

export function AnimatedProgressBar({
  label,
  percent,
  barColor,
  textColor,
}: {
  label: string;
  percent: number;
  barColor: string;
  textColor: string;
}) {
  const [displayPercent, setDisplayPercent] = React.useState(0);
  React.useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 1200;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setDisplayPercent(percent * progress);
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setDisplayPercent(percent);
      }
    };
    setDisplayPercent(0);
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [percent]);
  return (
    <div className="flex items-center gap-4">
      <span className={`w-24 font-medium capitalize ${textColor}`}>
        {label}
      </span>
      <div
        className={`relative flex-1 h-4 rounded-full overflow-hidden ${barColor}`}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          className="absolute left-0 top-0 h-4 rounded-full bg-pink-400"
        />
      </div>
      <span className={`w-24 text-right font-semibold ${textColor}`}>
        {displayPercent.toFixed(8)}%
      </span>
    </div>
  );
}
