import React, { Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import PreLoader from 'components/PreLoader';

const App = lazy(() => import('components/App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<PreLoader />}><App /></Suspense>
  </React.StrictMode>,
);
