import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from '@vercel/analytics/react';
import App from './App'
import './index.css'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Analytics />
  </StrictMode>,
)
/*
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p

*/