import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Safe root element access with null check
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Make sure you have a div with id='root' in your HTML.");
}

createRoot(rootElement).render(<App />);
