import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { ROUTES, BUTTON_LABELS } from '@/constants/app.constants';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="text-center space-y-12">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800">
            Здравей Дими
          </h1>

          <h2 className="text-4xl md:text-5xl font-semibold text-gray-600">
            Как си?
          </h2>

          <div className="space-y-4 w-full max-w-md mx-auto pt-8">
            <Button
              variant="primary"
              size="lg"
              animated
              onClick={() => navigate(ROUTES.QUESTION)}
              className="w-full text-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              {BUTTON_LABELS.SUPER} 💪
            </Button>

            <Button
              variant="secondary"
              size="lg"
              animated
              onClick={() => navigate(ROUTES.TIRED)}
              className="w-full text-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-gray-400"
            >
              {BUTTON_LABELS.TIRED} 😴
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
