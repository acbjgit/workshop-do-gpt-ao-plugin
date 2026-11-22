'use client';

import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const destination = new Date(targetDate).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = destination - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isFinished: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="countdownContainer" style={{ opacity: 0.6 }}>
        <div className="countdownLabel">Carregando contagem regressiva...</div>
      </div>
    );
  }

  if (timeLeft.isFinished) {
    return (
      <div className="countdownContainer finished">
        <span className="liveBadge">● AO VIVO AGORA</span>
        <div className="countdownLabel">O workshop já começou na sala do Zoom!</div>
      </div>
    );
  }

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="countdownWrapper">
      <div className="countdownHeader">
        <span className="pulseDot" />
        <span>O WORKSHOP COMEÇA EM:</span>
      </div>
      <div className="countdownGrid">
        <div className="countdownBox">
          <span className="countdownNumber">{formatNumber(timeLeft.days)}</span>
          <span className="countdownUnit">DIAS</span>
        </div>
        <div className="countdownSeparator">:</div>
        <div className="countdownBox">
          <span className="countdownNumber">{formatNumber(timeLeft.hours)}</span>
          <span className="countdownUnit">HORAS</span>
        </div>
        <div className="countdownSeparator">:</div>
        <div className="countdownBox">
          <span className="countdownNumber">{formatNumber(timeLeft.minutes)}</span>
          <span className="countdownUnit">MINUTOS</span>
        </div>
        <div className="countdownSeparator">:</div>
        <div className="countdownBox secondsBox">
          <span className="countdownNumber">{formatNumber(timeLeft.seconds)}</span>
          <span className="countdownUnit">SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
}
