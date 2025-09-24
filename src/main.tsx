import { ErrorBoundary, ErrorFallback } from '@components/ErrorBoundary/index.ts';
import { ThemeProvider } from '@components/providers/ThemeProvider.tsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App.tsx';
import { store } from './redux/store.ts';
import './styles/global.scss';

const ROOT_SELECTOR = '#root';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(document.querySelector(ROOT_SELECTOR)!).render(
  <StrictMode>
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <ThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StrictMode>,
);
