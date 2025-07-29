import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './assets/styles/chatbot.css';
import { LanguageProvider } from './LanguageContext';
import './components/Categories.tsx'

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);


