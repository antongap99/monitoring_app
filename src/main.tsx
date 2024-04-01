/// <reference types="vite-plugin-svgr/client" />
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from './app/App.tsx';

const BASE_URL = import.meta.env.VITE_BASE_URL;

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter basename={BASE_URL}>
                <StoreProvider>
                    <App />
                </StoreProvider>
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>,
);
