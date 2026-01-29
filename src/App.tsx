import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { QuestionPage } from '@/pages/QuestionPage';
import { TiredPage } from '@/pages/TiredPage';
import { SuccessPage } from '@/pages/SuccessPage';
import { ROUTES } from '@/constants/app.constants';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.QUESTION} element={<QuestionPage />} />
        <Route path={ROUTES.TIRED} element={<TiredPage />} />
        <Route path={ROUTES.SUCCESS} element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
