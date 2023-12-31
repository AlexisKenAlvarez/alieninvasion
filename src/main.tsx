import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ParallaxProvider } from 'react-scroll-parallax';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ParallaxProvider>
    <App />
  </ParallaxProvider>

)
