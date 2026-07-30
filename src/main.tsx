import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.css'
import 'beercss/dist/cdn/beer.css';
import '../src/assets/font/pelak/font.css';
import App from './App.tsx';
import "swiper/css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
