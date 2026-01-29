import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Heart } from '@/components/ui/Heart';
import { ROUTES, MESSAGES, BUTTON_LABELS } from '@/constants/app.constants';

export const TiredPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-valentine-pink via-valentine-light to-white flex items-center justify-center p-4">
      <div className="text-center space-y-12 animate-fade-in">
        {/* Gentle floating hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-10 left-1/4 w-12 h-12 animate-float opacity-20" />
          <Heart className="absolute bottom-20 right-1/4 w-16 h-16 animate-float opacity-15" />
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-valentine-dark mb-8">
            {MESSAGES.TIRED_TEXT}
          </h1>

          <div className="mb-12">
            <span className="text-8xl animate-bounce-slow">💕</span>
          </div>

          <Button
            variant="primary"
            size="xl"
            animated
            onClick={() => navigate(ROUTES.QUESTION)}
            className="text-3xl"
          >
            {BUTTON_LABELS.SUPER} 🎉
          </Button>
        </div>
      </div>
    </div>
  );
};
