import { Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <AllMeetupsPage />
    </div>
  );
}

export default App;