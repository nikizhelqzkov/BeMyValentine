import { useEffect, useState } from 'react';
import { Heart } from '@/components/ui/Heart';
import { MESSAGES } from '@/constants/app.constants';

export const SuccessPage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    document.title = 'Happy Valentine\'s Day! 💖';
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/heart.svg";
    }
    setShowConfetti(true);
  }, []);

  // Create confetti hearts
  const confettiHearts = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 flex items-center justify-center p-4 overflow-hidden">
      {/* Confetti hearts */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {confettiHearts.map((i) => (
            <div
              key={i}
              className="absolute animate-celebrate"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            >
              <Heart className="w-8 h-8" animate />
            </div>
          ))}
        </div>
      )}

      <div className="text-center space-y-12 animate-fade-in relative z-10">
        <h1 className="text-6xl md:text-9xl font-bold text-white animate-bounce-slow">
          {MESSAGES.SUCCESS}
        </h1>

        <div className="flex justify-center gap-4">
          <Heart className="w-32 h-32" animate />
          <Heart className="w-32 h-32" animate />
          <Heart className="w-32 h-32" animate />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white animate-pulse-slow">
          {MESSAGES.SUCCESS_MESSAGE}
        </h2>

        <div className="text-9xl animate-wiggle">💑</div>

        <div className="flex justify-center gap-8 text-7xl">
          <span className="animate-bounce">🎉</span>
          <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>
            🎊
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>
            💝
          </span>
          <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>
            🎉
          </span>
        </div>

        <p className="text-3xl text-white font-semibold animate-pulse">
          Happy Valentine's Day! 💖
        </p>
      </div>
    </div>
  );
};
