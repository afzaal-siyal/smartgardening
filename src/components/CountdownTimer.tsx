"use client";

import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const targetDate = new Date();
  targetDate.setHours(targetDate.getHours() + 24);

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-red-600">
        Limited Time Discount Ends In
      </p>

      <div className="flex justify-center gap-3">
        <TimeBox value={timeLeft.hours} label="Hours" />
        <TimeBox value={timeLeft.minutes} label="Minutes" />
        <TimeBox value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="min-w-[90px] rounded-2xl bg-slate-900 px-4 py-4 text-white shadow-xl">
      <div className="text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </div>

      <div className="mt-1 text-xs uppercase text-slate-300">
        {label}
      </div>
    </div>
  );
}