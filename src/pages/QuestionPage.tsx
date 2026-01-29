import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Heart } from '@/components/ui/Heart';
import { ROUTES, MESSAGES, BUTTON_LABELS } from '@/constants/app.constants';

export const QuestionPage: React.FC = () => {
  const navigate = useNavigate();
  const [noClickCount, setNoClickCount] = useState(0);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    document.title = 'Be My Valentine 💝';
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = "/heart.svg";
    }
  }, []);

  const handleYesClick = () => {
    navigate(ROUTES.SUCCESS);
  };

  const handleNoClick = () => {
    setIsShaking(true);
    setNoClickCount((prev) => prev + 1);

    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  // Calculate button sizes based on click count
  const getYesButtonSize = () => {
    const baseSize = 16; // px-16 py-6
    const growth = noClickCount * 4;
    return {
      padding: `${baseSize + growth}px ${baseSize * 1.5 + growth * 2}px`,
      fontSize: `${24 + noClickCount * 4}px`,
    };
  };

  const getNoButtonSize = () => {
    const baseSize = 12;
    const shrinkage = noClickCount * 2;
    const finalSize = Math.max(baseSize - shrinkage, 4);
    return {
      padding: `${finalSize}px ${finalSize * 1.5}px`,
      fontSize: `${16 - noClickCount * 2}px`,
      minWidth: `${80 - noClickCount * 10}px`,
    };
  };

  // Animation for hearts
  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-red via-valentine-heart to-valentine-dark flex items-center justify-center p-4 overflow-hidden">
      {/* Animated hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((i) => (
          <Heart
            key={i}
            className={`absolute w-8 h-8 opacity-20 animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
            animate
          />
        ))}
      </div>

      <div
        className={`text-center space-y-12 relative z-10 ${
          isShaking ? 'animate-shake' : ''
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse-slow uppercase tracking-wide">
          {noClickCount > 0 ? MESSAGES.QUESTION_REPEAT : MESSAGES.QUESTION}
        </h1>

        <div className="mb-12">
          <Heart className="w-40 h-40 mx-auto" animate />
        </div>

        {/* Show puppy emoji after 4 clicks */}
        {noClickCount >= 4 && (
          <div className="animate-bounce-slow mb-8">
            <span className="text-9xl">🐶</span>
            <p className="text-white text-2xl mt-4 animate-pulse">Моляяя! 🥺</p>
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* YES Button - grows with each NO click */}
          <Button
            variant="primary"
            size="dynamic"
            animated
            onClick={handleYesClick}
            style={getYesButtonSize()}
            className="bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 shadow-2xl transform hover:scale-110 transition-all duration-300"
          >
            {BUTTON_LABELS.YES} 💚
          </Button>

          {/* NO Button - shrinks with each click */}
          {noClickCount < 4 && (
            <Button
              variant="secondary"
              size="dynamic"
              onClick={handleNoClick}
              style={getNoButtonSize()}
              className="bg-gradient-to-r from-gray-400 to-gray-600 text-white hover:from-gray-500 hover:to-gray-700 transition-all duration-300"
            >
              {BUTTON_LABELS.NO}
            </Button>
          )}
        </div>

        {noClickCount > 0 && noClickCount < 4 && (
          <p className="text-white text-xl animate-pulse mt-8">
            Сигурна ли си? Опитай пак! 💕
          </p>
        )}
      </div>
    </div>
  );
};
